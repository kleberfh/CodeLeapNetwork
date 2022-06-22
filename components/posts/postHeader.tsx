import React from 'react';
import { useSelector } from 'react-redux';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PostForm from './postForm';
import { getAllPosts, getPostsStatus } from '../../redux/postsSlice';

const styles = StyleSheet.create({
  loading_container: {
    marginTop: 20,
    alignItems: 'center',
  },
  empty_container: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  empty_text: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default function PostHeader() {
  const posts = useSelector(getAllPosts);
  const status = useSelector(getPostsStatus);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <PostForm />
        {status !== 'loading' && posts.length === 0 && (
          <View style={styles.empty_container}>
            <Text style={styles.empty_text}>No posts found 😟</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
