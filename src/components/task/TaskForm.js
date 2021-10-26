import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import AppForm from '~components/AppForm';
import AppText from '~components/AppText';
import FormField from '~components/FormField';
import ImageInput from '~components/ImageInput';
import {Picker} from '@react-native-picker/picker';
import * as utils from '~shared/utilities';
import FormButton from '~components/FormButton';
import MultiSelect from 'react-native-multiple-select';
import * as Yup from 'yup';

export default function TaskForm({project, users, user, onSubmitTask}) {
  const handleSubmitUpdateForm = (values, action) => {
    onSubmitTask(values);
  };

  const handleUploadImage = (image, setAttachments, currentAttachments) => {
    setAttachments('attachments', [...currentAttachments, image]);
  };

  const onTeamMemberChange = (data, setAssignee) => {
    setAssignee('assigneeID', data[0]);
  };

  const schema = () =>
    Yup.object().shape({
      assigneeID: Yup.string().required('Assign this task to any member.'),
      attachments: Yup.array(),
      deadLine: Yup.string().required('Date is required.'),
      description: Yup.string().required('Description is required.'),
      priority: Yup.string().required('Priority is required.'),
      taskStatus: Yup.string().required('Task Status is required.'),
      title: Yup.string().required('Title is required. '),
    });

  return (
    <AppForm
      initialValues={{
        assigneeID: '',
        attachments: [],
        creatorID: user?.id,
        deadLine: '',
        description: '',
        priority: '',
        projectID: project?.id,
        taskStatus: '',
        title: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmitUpdateForm}>
      {({values, touched, handleBlur, errors, setFieldValue}) => (
        <ScrollView>
          <AppText>Title</AppText>
          <FormField name="title" />
          <AppText>Description</AppText>
          <FormField name="description" multiline={true} />
          <AppText>Deadline</AppText>
          <FormField name="deadLine" />
          <AppText>Task Priority</AppText>
          <View style={styles.picker}>
            <Picker
              mode={'dropdown'}
              onBlur={handleBlur('priority')}
              selectedValue={values.priority}
              onValueChange={value => setFieldValue('priority', value)}>
              {utils.taskStatuses.map(p => (
                <Picker.Item
                  color="black"
                  key={p.id}
                  label={p.name}
                  value={p.id}
                />
              ))}
            </Picker>
            {errors.priority && (
              <AppText style={styles.error}>{errors.priority}</AppText>
            )}
          </View>
          <View>
            <AppText>Task Status</AppText>
            <View style={styles.picker}>
              <Picker
                onBlur={handleBlur('taskStatus')}
                mode={'dropdown'}
                selectedValue={values.taskStatus}
                onValueChange={(itemValue, index) => {
                  setFieldValue('taskStatus', itemValue);
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
              {errors.taskStatus && (
                <AppText style={styles.error}>{errors.taskStatus}</AppText>
              )}
            </View>
          </View>
          <AppText>Gallery</AppText>
          <View style={styles.gallery}>
            <ScrollView horizontal>
              {values.attachments.map(g => (
                <ImageInput key={g.fileName} source={g.uri} />
              ))}
              <ImageInput
                onAddImage={imageData =>
                  handleUploadImage(
                    imageData,
                    setFieldValue,
                    values.attachments,
                  )
                }
              />
            </ScrollView>
          </View>

          <View>
            <MultiSelect
              searchInputStyle={styles.multiselect}
              single
              items={users.map(u => ({
                fullName: u.firstName + ' ' + u.lastName,
                userId: u.id,
              }))}
              uniqueKey="userId"
              onSelectedItemsChange={data =>
                onTeamMemberChange(data, setFieldValue)
              }
              selectedItems={[values.assigneeID]}
              selectText="Select a member"
              searchInputPlaceholderText="Search users..."
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="fullName"
            />
            {errors.assigneeID && (
              <AppText style={styles.error}>{errors.assigneeID}</AppText>
            )}
          </View>

          <FormButton value="Submit" />
        </ScrollView>
      )}
    </AppForm>
  );
}

const styles = StyleSheet.create({
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
  error: {color: 'red'},
  multiselect: {
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
