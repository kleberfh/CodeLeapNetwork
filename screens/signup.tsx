import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { setUsername } from '../redux/userSlice';
import CustomInput from '../components/form/customInput';
import CustomButton from '../components/form/customButton';
import { screenWidthbreakpoints } from '../components/utilities';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
  signup_container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
    width: screen.width >= screenWidthbreakpoints.sm ? 500 : '100%',
  },
  singup_title: {
    fontSize: 32,
    color: '#000',
    fontWeight: '700',
  },
  signup_button: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#000',
  },
  signup_button_text: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: '700',
  },
});

export default function Signup() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name) {
      dispatch(setUsername(name));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.signup_container}>
        <Text style={styles.singup_title}>Welcome to CodeLeap network!</Text>
        <CustomInput
          value={name}
          onChangeText={setName}
          placeholder="John doe"
          label="Please enter your username"
        />
        <CustomButton text="ENTER" disabled={!name} onPress={handleSubmit} />
      </View>
    </View>
  );
}
