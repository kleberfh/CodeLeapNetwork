import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../form/customButton';
import CustomInput from '../form/customInput';
import { addPost } from '../../redux/postsSlice';
import { createPost } from '../../services/codeleap';
import { RootState } from '../../types';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: '#999999',
    flexDirection: 'column',
  },
  header: {
    fontSize: 26,
    color: '#000',
    fontWeight: '700',
  },
  button: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#000',
  },
  button_text: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '700',
  },
});

export default function PostForm() {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const clearStates = () => {
    setTitle('');
    setContent('');
  };

  const handleCreate = async () => {
    setLoading(true);
    await createPost({
      title,
      content,
      username,
    })
      .then(response => {
        dispatch(addPost(response));
        Alert.alert('Success', 'Your new post was created!');
        clearStates();
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What’s on your mind?</Text>
      <CustomInput
        value={title}
        onChangeText={setTitle}
        inputStyle={{ marginBottom: -20 }}
        label="Title"
        placeholder="Hello world"
      />
      <CustomInput
        value={content}
        onChangeText={setContent}
        inputStyle={{ height: 100 }}
        inputProps={{ multiline: true }}
        label="Content"
        placeholder="Content here"
      />
      <Button
        loading={loading}
        onPress={handleCreate}
        disabled={!title || !content}
        text="SAVE"
      />
    </View>
  );
}
