import {StyleSheet} from 'react-native';
import colors from './colors';
const styles = StyleSheet.create({
  bodySmall: {
    fontSize: 14,
    ...colors.darkGrey,
  },
  bodyLarge: {
    fontSize: 16,
    color: colors.darkGrey,
  },
  heading5: {
    fontSize: 24,
    color: colors.black,
  },
  subTitle: {
    fontSize: 16,
    color: colors.black,
  },
  caption: {
    fontSize: 12,
    color: colors.lightGrey,
  },
});

export default styles;
