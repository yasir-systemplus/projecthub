import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function LoginButton({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#8607e3', '#e493ef']}
        style={styles.btn}>
        <Text style={styles.text}>Login to Account</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '80%',
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
