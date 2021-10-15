import React from 'react';
import {Touchable, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../config/colors';

export default function MenuDots({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{padding: 1}}>
        <Icon name="dots-three-horizontal" color={colors.heading} size={20} />
      </View>
    </TouchableOpacity>
  );
}
