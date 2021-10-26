import React, {useState} from 'react';
import {View, StyleSheet, Modal, TouchableWithoutFeedback} from 'react-native';
import AppText from '~components/AppText';
import typography from '~config/typography';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import colors from '~config/colors';
import AppButton from '~components/AppButton';
import {taskStatuses, priorityTypes} from '~shared/utilities';

export default function FilterTasks({visible, onApplyFilter, onClose}) {
  const [taskType, settaskType] = useState(0);
  const [priority, setPriority] = useState(0);

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.header}>
            <AppText style={[typography.heading4, styles.headerText]}>
              Filter Projects
            </AppText>
            <TouchableWithoutFeedback onPress={onClose}>
              <Icon name="close" size={30} color="black" />
            </TouchableWithoutFeedback>
          </View>
          <AppText style={styles.label}>Select Priority</AppText>
          <View style={styles.input}>
            <Picker
              mode={'dropdown'}
              selectedValue={taskType}
              onValueChange={(itemValue, index) => settaskType(itemValue)}>
              {taskStatuses.map(p => (
                <Picker.Item
                  color="black"
                  key={p.id}
                  label={p.name}
                  value={p.id}
                />
              ))}
            </Picker>
          </View>
          <AppText style={styles.label}>Select Priority</AppText>
          <View style={styles.input}>
            <Picker
              mode={'dropdown'}
              selectedValue={priority}
              onValueChange={(itemValue, index) => setPriority(itemValue)}>
              {priorityTypes.map(p => (
                <Picker.Item
                  color="black"
                  key={p.id}
                  label={p.name}
                  value={p.id}
                />
              ))}
            </Picker>
          </View>
          <AppButton
            value="Submit"
            onPress={() => {
              onApplyFilter({taskType, priority});
              onClose();
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  selectedImage: {
    width: 45,
    height: 45,
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(23, 23, 23, 0.56)',
  },
  container: {
    backgroundColor: 'white',
    height: '50%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 20,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
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
  label: {
    ...typography.bodyLarge,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  headerText: {marginBottom: 20},
});
