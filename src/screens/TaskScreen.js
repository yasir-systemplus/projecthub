import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SectionList,
  TouchableWithoutFeedback,
} from 'react-native';
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
import colors from '../config/colors';
import {graphqlOperation} from '@aws-amplify/api-graphql';
import API from '@aws-amplify/api';
import * as queries from '../graphql/queries';
import * as utils from '../shared/utilities';
import CommentReply from '../components/CommentReply';
const gallery = [
  {id: 1, image: 'https://picsum.photos/200'},
  {id: 2, image: 'https://picsum.photos/200'},
  {id: 3, image: 'https://picsum.photos/200'},
  {id: 4, image: 'https://picsum.photos/200'},
];

export default function TaskScreen({navigation, route}) {
  const {
    id: taskId,
    creator,
    title,
    description,
    taskStatus,
    priority,
    deadLine,
    assignee,
  } = route.params.task;

  const [attachments, setAttachments] = useState(null);
  const [comments, setComments] = useState([]);
  const [doReply, setDoReply] = useState(false);

  const project = route.params.project;

  useEffect(() => {
    fetchAttachments();
    fetchComments();
    return () => {};
  }, []);

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

  const handleSubmitReply = reply => {
    console.log(reply.comment, reply.id);
    setDoReply(false);
  };

  return (
    <>
      <SectionList
        ListHeaderComponent={
          <>
            <CurvedPanHeader
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
                  information={taskStatus}
                  color="#8869ff"
                  textColor="white"
                />
              </View>
              <AppText style={typography.heading4}>Assigned To</AppText>
              <ProfileImageWithRightDescription
                image={assignee.profileURL}
                role="Team Member"
                name={assignee.firstName + ' ' + assignee.lastName}
              />
              <AppText style={typography.heading4}>Gallery</AppText>
              <View style={styles.gallery}>
                <ScrollView horizontal>
                  {attachments &&
                    attachments.map(g => (
                      <ImageInput key={g.id} source={g.url} />
                    ))}
                </ScrollView>
              </View>
            </CurvedBodyPan>
          </>
        }
        sections={comments}
        renderItem={({item}) => <Comment comment={item} style={styles.reply} />}
        renderSectionHeader={({section}) => (
          <>
            <Comment comment={section} />
            <TouchableWithoutFeedback onPress={() => setDoReply(section.id)}>
              <AppText style={{marginLeft: 87, color: colors.heading}}>
                Reply
              </AppText>
            </TouchableWithoutFeedback>
          </>
        )}
        keyExtractor={(item, index) => index}
      />

      <CommentReply
        visible={doReply}
        id={doReply}
        onSubmitComment={handleSubmitReply}
        onClose={() => setDoReply(false)}
      />
    </>
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
});
