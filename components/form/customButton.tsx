import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ICustomButtonProps } from '../../types';
import Loading from '../loading';

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    alignSelf: 'flex-end',
  },
  button_text: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '700',
  },
  loading: {
    marginRight: 20,
    alignSelf: 'flex-end',
  },
});

export default function CustomButton(props: ICustomButtonProps) {
  const {
    text,
    onPress,
    ghost = false,
    loading = false,
    disabled = false,
    buttonStyle = undefined,
  } = props;

  const NORMAL_BUTTON_STYLE = {
    backgroundColor: disabled ? '#8f8f8f' : '#000',
  };
  const GHOST_BUTTON_STYLE = {
    borderColor: disabled ? '#8f8f8f' : '#000',
    borderWidth: 2,
  };

  if (loading)
    return (
      <View style={styles.loading}>
        <Loading size={32} color="#000" thickness={2} />
      </View>
    );

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        ghost ? GHOST_BUTTON_STYLE : NORMAL_BUTTON_STYLE,
        buttonStyle,
      ]}
    >
      <Text style={[styles.button_text, { color: ghost ? '#000' : '#FFF' }]}>
        {text}
      </Text>
    </Pressable>
  );
}
