import React from 'react';
import {StyleSheet, View} from 'react-native';
import Profile from './Profile';

export default function Profiles({profiles, size = 40}) {
  return (
    <View style={styles.container}>
      {profiles.map((p, i) => (
        <Profile key={p.id} index={i} image={p.image} size={size} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginTop: 10, marginBottom: 10},
});
