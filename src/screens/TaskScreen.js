import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, ScrollView, SectionList} from 'react-native';
import CurvedPanHeader from '../components/CurvedPanHeader';
import CurvedBodyPan from '../components/CurvedBodyPan';
import AppText from '../components/AppText';
import typography from '../config/typography';
import ProfileImageWithRightDescription from '../components/ProfileImageWithRightDescription';
import IconWithDescription from '../components/IconWithDescription';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppBadge from '../components/AppBadge';
import routes from '../navigation/routes';
import ImageInput from '../components/ImageInput';
import Comment from '../components/Comment';
import {graphqlOperation} from '@aws-amplify/api-graphql';
import API from '@aws-amplify/api';
import * as queries from '../graphql/queries';
import * as utils from '../shared/utilities';
import CommentReply from '../components/CommentReply';
import * as mutations from '../graphql/mutations';
import useAuth from '../hooks/useAuth';
import CommentActionBar from '../components/task/CommentActionBar';
import FloatingButton from '../components/FloatingButton';
import ModalScreen from '../screens/ModalScreen';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import {Picker} from '@react-native-picker/picker';
import Screen from '../screens/Screen';
import Storage from '@aws-amplify/storage';

export default function TaskScreen({navigation, route}) {
  const [task, setTask] = useState(route.params.task);
  const {
    id: taskId,
    creator,
    title,
    description,
    taskStatus,
    priority,
    deadLine,
    assignee,
    assigneeID,
  } = task;

  const [attachments, setAttachments] = useState([]);
  const [comments, setComments] = useState([]);
  const [targetComment, setTargetComment] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [loading, setLoading] = useState(false);

  const [updatedTask, setUpdatedTask] = useState({
    title,
    description,
    taskStatus,
    priority,
    deadLine,
    assigneeID,
    id: taskId,
  });

  const {user} = useAuth();

  const project = route.params.project;

  useEffect(() => {
    fetchAttachments();
    fetchComments();
    return () => {};
  }, [fetchAttachments, fetchComments]);

  const fetchAttachments = useCallback(async () => {
    const results = await API.graphql(
      graphqlOperation(queries.listAttachments, {
        filter: {
          taskID: {
            contains: taskId,
          },
        },
      }),
    );

    setAttachments(results.data.listAttachments.items);
  }, [taskId]);

  const fetchComments = useCallback(async () => {
    const results = await API.graphql(
      graphqlOperation(queries.listComments, {
        filter: {taskID: {eq: taskId}},
      }),
    );

    Promise.all(
      results.data.listComments.items
        .filter(c => !c.commentedOnID)
        .map(async c => {
          const replies = await API.graphql(
            graphqlOperation(queries.listComments, {
              filter: {
                commentedOnID: {
                  eq: c.id,
                },
              },
            }),
          );

          return {...c, data: replies.data.listComments.items || []};
        }),
    ).then(result => setComments(result));
  }, [taskId]);

  const deleteComment = async id => {
    const replies = await API.graphql(
      graphqlOperation(queries.listComments, {
        filter: {
          commentedOnID: {
            eq: id,
          },
        },
      }),
    );

    const commentsTodelete = [
      ...replies.data.listComments.items.map(comment =>
        API.graphql(
          graphqlOperation(mutations.deleteComment, {
            input: {id: comment.id},
          }),
        ),
      ),
      API.graphql(
        graphqlOperation(mutations.deleteComment, {
          input: {id: id},
        }),
      ),
    ];

    await Promise.all(commentsTodelete);
    fetchComments();
  };

  const handleSubmitReply = async reply => {
    if (targetComment.actionType == 'reply') {
      await API.graphql(
        graphqlOperation(mutations.createComment, {
          input: {
            commentatorID: user.id,
            commentedOnID: targetComment.id,
            description: reply.comment,
            taskID: taskId,
          },
        }),
      );
    }

    if (targetComment.actionType == 'edit') {
      await API.graphql(
        graphqlOperation(mutations.updateComment, {
          input: {
            id: targetComment.id,
            description: reply.comment,
          },
        }),
      );
    }

    if (targetComment.actionType == 'new') {
      await API.graphql(
        graphqlOperation(mutations.createComment, {
          input: {
            description: reply.comment,
            commentatorID: user.id,
            taskID: taskId,
          },
        }),
      );
    }

    setTargetComment(null);
    fetchComments();
  };

  const handleUpdateForm = (value, key) => {
    setUpdatedTask({...updatedTask, [key]: value});
  };

  const handleSubmitUpdateForm = async () => {
    setLoading(true);
    API.graphql(graphqlOperation(mutations.updateTask, {input: updatedTask}))
      .then(results => {
        console.log('Updated Task', results.data.updateTask);
        setTask(results.data.updateTask);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
        setShowNav(false);
      });
  };

  const handleUploadImage = async ({fileName, type, uri, width, height}) => {
    setLoading(true);
    const photo = await fetch(uri);
    const photoBlob = await photo.blob();

    await Storage.put(fileName, photoBlob, {
      level: 'public',
      contentType: type,
    });

    const newAttachment = await API.graphql(
      graphqlOperation(mutations.createAttachment, {
        input: {
          taskID: taskId,
          url: await Storage.get(fileName, {level: 'public'}),
        },
      }),
    );
    const newAttachments = [
      ...attachments,
      newAttachment.data.createAttachment,
    ];
    setAttachments(newAttachments);
    setLoading(false);
  };
  return (
    <Screen styles={{paddingHorizontal: 0}} loading={loading}>
      <SectionList
        ListHeaderComponent={
          <>
            <CurvedPanHeader
              title={utils.taskStatusMessages[taskStatus]}
              onMenuToggle={() => setShowNav(true)}
              onBack={() =>
                navigation.navigate(routes.PROJECT, {data: project})
              }
            />
            <CurvedBodyPan>
              <AppText style={[typography.heading4, styles.title]}>
                {title}
              </AppText>
              <ProfileImageWithRightDescription
                image={creator.profileURL}
                role="Team Lead"
                name={creator.firstName + ' ' + creator.lastName}
              />
              <AppText
                style={[
                  typography.bodyLarge,
                  {marginVertical: 5, lineHeight: 25},
                ]}>
                {description}
              </AppText>
              <View style={styles.statusBar}>
                <IconWithDescription
                  name="md-flag"
                  color="red"
                  description={deadLine || '20/02/2012'}
                  component={Ionicons}
                  border={{}}
                />
                <AppBadge
                  information={utils.priorityMessages[priority]}
                  color="#fd9b35"
                  textColor="white"
                />
                <AppBadge
                  information={utils.taskStatusMessages[taskStatus]}
                  color="#8869ff"
                  textColor="white"
                />
              </View>
              <AppText style={typography.heading5}>Assigned To</AppText>
              <ProfileImageWithRightDescription
                image={assignee.profileURL}
                role="Team Member"
                name={assignee.firstName + ' ' + assignee.lastName}
              />
              <AppText style={typography.heading5}>Gallery</AppText>
              <View style={styles.gallery}>
                <ScrollView horizontal>
                  {attachments &&
                    attachments.map(g => (
                      <ImageInput key={g.id} source={g.url} />
                    ))}
                  <ImageInput onAddImage={handleUploadImage} />
                </ScrollView>
              </View>
            </CurvedBodyPan>
          </>
        }
        sections={comments}
        renderItem={({item}) => (
          <>
            <Comment comment={item} style={styles.reply} />
            <CommentActionBar
              hide={
                user?.id != item.commentatorID ? ['reply', 'delete'] : ['reply']
              }
              onPress={actionType => {
                if (actionType == 'delete') {
                  return deleteComment(item.id);
                }

                if (actionType == 'reply') {
                  setTargetComment({
                    id: item.id,
                    actionType: 'reply',
                  });
                }

                if (actionType == 'edit') {
                  setTargetComment({
                    id: item.id,
                    actionType: 'edit',
                    description: item.description,
                  });
                }

                setShowCommentForm(true);
              }}
            />
          </>
        )}
        renderSectionHeader={({section}) => (
          <>
            <Comment comment={section} />
            <CommentActionBar
              hide={user?.id != section.commentatorID ? ['delete'] : []}
              onPress={actionType => {
                if (actionType == 'delete') {
                  return deleteComment(section.id);
                }

                setShowCommentForm(true);
                if (actionType == 'reply') {
                  setTargetComment({
                    id: section.id,
                    actionType: 'reply',
                  });
                }

                if (actionType == 'edit') {
                  setTargetComment({
                    id: section.id,
                    actionType: 'edit',
                    description: section.description,
                  });
                }
              }}
            />
          </>
        )}
        keyExtractor={(item, index) => index}
      />
      <FloatingButton
        onPress={() => {
          setShowCommentForm(true);
          setTargetComment({actionType: 'new'});
        }}
      />

      {showCommentForm && (
        <CommentReply
          value={targetComment?.description || ''}
          visible={showCommentForm}
          onSubmitComment={handleSubmitReply}
          onClose={() => setShowCommentForm(null)}
        />
      )}

      {showNav && (
        <ModalScreen
          visible={showNav}
          header="Setting"
          onClose={() => setShowNav(false)}>
          <ScrollView>
            <AppText>Title</AppText>
            <AppInput
              value={updatedTask.title}
              onChangeText={text => handleUpdateForm(text, 'title')}
            />
            <AppText>Description</AppText>
            <AppInput
              value={updatedTask.description}
              onChangeText={text => handleUpdateForm(text, 'description')}
            />
            <AppText>Deadline</AppText>
            <AppInput
              value={updatedTask.deadLine}
              onChangeText={text => handleUpdateForm(text, 'deadLine')}
            />

            <AppText>Task Priority</AppText>
            <View style={styles.picker}>
              <Picker
                mode={'dropdown'}
                selectedValue={updatedTask.priority}
                onValueChange={(itemValue, index) => {
                  handleUpdateForm(itemValue, 'priority');
                  console.log(itemValue);
                }}>
                {utils.taskStatuses.map(p => (
                  <Picker.Item
                    color="black"
                    key={p.id}
                    label={p.name}
                    value={p.id}
                  />
                ))}
              </Picker>
            </View>
            <AppText>Task Status</AppText>
            <View style={styles.picker}>
              <Picker
                mode={'dropdown'}
                selectedValue={updatedTask.taskStatus}
                onValueChange={(itemValue, index) => {
                  handleUpdateForm(itemValue, 'taskStatus');
                  console.log('taskStatus', itemValue);
                }}>
                {utils.priorityTypes.map(p => (
                  <Picker.Item
                    color="black"
                    key={p.id}
                    label={p.name}
                    value={p.id}
                  />
                ))}
              </Picker>
            </View>
            <AppButton onPress={handleSubmitUpdateForm} value="Submit" />
          </ScrollView>
        </ModalScreen>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#3e405c',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  gallery: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  reply: {
    borderLeftWidth: 1,
    borderColor: 'black',
    paddingLeft: 60,
    marginVertical: 12,
  },

  picker: {
    backgroundColor: '#fafafa',
    marginVertical: 5,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cbcbcb',
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginBottom: 10,
  },
});
