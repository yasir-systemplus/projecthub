import {Platform, StyleSheet} from 'react-native';
import colors from './colors';
const styles = StyleSheet.create({
  bodySmall: {
    fontSize: 14,
    ...colors.text,
  },
  bodyLarge: {
    fontSize: 16,
    ...colors.text,
  },
  large: {
    fontSize: 36,
    ...colors.large,
  },
  medium: {
    fontSize: 20,
  },
});

export default styles;
