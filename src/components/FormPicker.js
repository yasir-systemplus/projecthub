import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useFormikContext} from 'formik';

export default function FormPicker({selected, name, data, onValueChange}) {
  const {values, handleChange} = useFormikContext();

  return (
    <View style={styles.input}>
      <Picker
        itemStyle={styles.input}
        mode={'dropdown'}
        selectedValue={values[name]}
        onValueChange={(itemValue, index) => handleChange(name)}>
        {data.map(p => (
          <Picker.Item color="black" key={p.id} label={p.name} value={p.id} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fafafa',
    marginVertical: 5,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cbcbcb',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
