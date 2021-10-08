import React from 'react';
import {Text} from 'react-native';
import defaultStyles from '../config/typography';

export default function AppText({children, ...otherProps}) {
  return (
    <Text style={defaultStyles.bodyLarge} {...otherProps}>
      {children}
    </Text>
  );
}
