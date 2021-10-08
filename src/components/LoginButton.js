import React from 'react';
import {
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFormikContext} from 'formik';

export function LoginButton() {
  const {isSubmitting, handleSubmit, isValid, dirty} = useFormikContext();

  const disabled = !(isValid && dirty) || isSubmitting;

  const el = isSubmitting ? (
    <ActivityIndicator color="white" />
  ) : (
    <Text style={styles.text}>Login to Account</Text>
  );

  const opacityVal = () => {
    if (disabled && !isSubmitting) return 0.5;
    if (isSubmitting) return 1;
  };

  return (
    <TouchableWithoutFeedback
      onPress={
        disabled || isSubmitting
          ? () => {
              console.log('clicked while submitting or disbaled.');
            }
          : handleSubmit
      }>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#8607e3', '#e493ef']}
        style={[styles.btn, {opacity: opacityVal()}]}>
        {el}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
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
