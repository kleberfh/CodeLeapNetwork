import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ICustomInputProps } from '../../types';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    marginBottom: 20,
    flexDirection: 'column',
  },
  label: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
  input: {
    padding: 10,
    color: '#000',
    borderWidth: 1,
    fontSize: 18,
    borderColor: '#777777',
  },
});

export default function CustomInput(props: ICustomInputProps) {
  const {
    label,
    value,
    placeholder,
    onChangeText,
    inputProps,
    inputStyle,
    containerStyle,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[styles.input, inputStyle]}
        {...inputProps}
      />
    </View>
  );
}
