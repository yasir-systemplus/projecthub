import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import AppText from '../AppText';
import typography from '../../config/typography';
import PickerItem from './PickerItem';
import PickerImage from './PickerImage';
import PickerSeparator from './PickerSeparator';

export default function WorkplacePicker({workplaces, workplace, onSelection}) {
  const [modal, setModal] = useState(false);

  const handleWorkspaceSelection = selected => {
    onSelection(selected);
    setModal(false);
  };

  return (
    <>
      <PickerImage
        image={workplace.image}
        onPress={() => setModal(prev => !prev)}
      />
      <Modal animationType="slide" visible={modal} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.container}>
            <AppText style={[typography.heading4, {marginBottom: 20}]}>
              Choose your workspace
            </AppText>
            <FlatList
              data={workplaces}
              keyExtractor={w => w.id}
              renderItem={({item}) => (
                <PickerItem
                  item={item}
                  onPress={() => handleWorkspaceSelection(item)}
                />
              )}
              ItemSeparatorComponent={PickerSeparator}
            />
          </View>
        </View>
      </Modal>
    </>
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
});
