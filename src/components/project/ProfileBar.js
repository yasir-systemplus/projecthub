import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Profiles from '~components/Profiles';
import colors from '~config/colors';
import Icon from 'react-native-vector-icons/AntDesign';
export default function ProfileBar({profiles, showAddButton, opened, onAdd}) {
  return (
    <View style={styles.container}>
      <Profiles
        profiles={profiles.map(u => ({...u, image: u.profileURL}))}
        size={40}
      />
      {showAddButton && (
        <TouchableWithoutFeedback style={styles.add} onPress={onAdd}>
          <Icon name={opened ? 'close' : 'plus'} size={32} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f3f9',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderColor: colors.lightGrey,
    backgroundColor: 'white',
    opacity: 0.8,
  },
  add: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
