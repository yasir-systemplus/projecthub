import {StyleSheet} from 'react-native';
import colors from './colors';
const typography = StyleSheet.create({
  bodySmall: {
    fontSize: 14,
    ...colors.darkGrey,
  },
  bodyLarge: {
    fontSize: 16,
    color: colors.darkGrey,
  },
  heading4: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },

  heading5: {
    fontSize: 20,
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

  workplacePickerHeading: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  workplacePickerSubtitle: {
    fontSize: 16,
    color: colors.darkGrey,
  },
});

export default typography;
