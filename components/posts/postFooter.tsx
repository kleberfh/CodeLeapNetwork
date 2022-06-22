import React from 'react';
import { View, StyleSheet } from 'react-native';
import Loading from '../loading';
import { IPostFooterProps } from '../../types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default function PostFooter(props: IPostFooterProps) {
  const { showLoading } = props;

  if (showLoading)
    return (
      <View style={styles.container}>
        <Loading size={60} color="#000" />
      </View>
    );

  return null;
}
