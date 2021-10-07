import React from 'react';
import {Text} from 'react-native';
import defaultStyles from '../config/typography';

export default function AppText({children}) {
  return <Text style={defaultStyles.bodyLarge}>{children}</Text>;
}
