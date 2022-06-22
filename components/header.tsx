import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { screenWidthbreakpoints } from './utilities';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  background: {
    width: '100%',
    backgroundColor: '#000',
    alignItems:
      screen.width >= screenWidthbreakpoints.sm ? 'center' : 'stretch',
  },
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    width: screen.width >= screenWidthbreakpoints.sm ? 800 : '100%',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '700',
  },
});

export default function Header() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>CodeLeap Network</Text>
      </View>
    </SafeAreaView>
  );
}
