import React from 'react';
import {Text} from 'react-native';
import defaultStyles from '~config/typography';

export default function AppText({children, style, ...otherProps}) {
  return (
    <Text style={[defaultStyles.bodyLarge, style]} {...otherProps}>
      {children}
    </Text>
  );
}
