import React, {useState} from 'react';
import {View, StyleSheet, Modal, TouchableWithoutFeedback} from 'react-native';

import typography from '~config/typography';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '~config/colors';
import AppButton from './AppButton';
import AppInput from './AppInput';
import AppText from './AppText';

export default function CommentReply({
  onClose,
  onSubmitComment,
  value,
  visible,
}) {
  const [comment, setComment] = useState(value);
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.header}>
            <AppText style={[typography.heading4, styles.headerText]}>
              Replying
            </AppText>
            <TouchableWithoutFeedback onPress={onClose}>
              <Icon name="close" size={30} color="black" />
            </TouchableWithoutFeedback>
          </View>

          <AppText style={styles.label}>Select Priority</AppText>
          <AppInput
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setComment(text)}
            value={comment}
          />
          <AppButton
            value="Submit"
            onPress={() => {
              onSubmitComment({comment});
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
    height: 'auto',
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
