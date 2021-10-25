import React from 'react';
import {Image, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';

export default function ImageInput({source, onChangeImage, onAddImage}) {
  const loadImage = () => {
    launchImageLibrary(null, resp => {
      if (!resp.didCancel) {
        const imageData = resp.assets[0];
        console.log(resp);
        if (!source) {
          onAddImage(imageData);
        } else {
          onChangeImage(imageData);
        }
      }
    });
  };
  return (
    <TouchableWithoutFeedback onPress={loadImage}>
      <View style={styles.container}>
        <>
          {!source && <Ionicons name="camera" size={20} color="black" />}

          {source && <Image style={styles.image} source={{uri: source}} />}
        </>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
  },

  image: {
    height: 100,
    width: 100,
  },
});
