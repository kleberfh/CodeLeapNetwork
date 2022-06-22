import React, { useEffect } from 'react';
import { orderBy } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { AppDispatch } from '../types';
import Header from '../components/header';
import Post from '../components/posts/post';
import PostFooter from '../components/posts/postFooter';
import PostHeader from '../components/posts/postHeader';
import {
  fetchPosts,
  getAllPosts,
  getPostsStatus,
  resetOffset,
} from '../redux/postsSlice';
import { screenWidthbreakpoints } from '../components/utilities';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:
      screen.width >= screenWidthbreakpoints.sm ? 'center' : 'stretch',
    backgroundColor: '#fff',
  },
  list: {
    paddingLeft: 20,
    paddingRight: 20,
    width: screen.width >= screenWidthbreakpoints.sm ? 800 : '100%',
  },
  list_container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default function Feed() {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector(getAllPosts);
  const status = useSelector(getPostsStatus);

  const refreshPosts = () => {
    dispatch(resetOffset());
    dispatch(fetchPosts());
  };

  const loadMorePosts = () => {
    if (status !== 'loading') {
      dispatch(fetchPosts());
    }
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.list}
        onRefresh={refreshPosts}
        onEndReachedThreshold={0.01}
        onEndReached={loadMorePosts}
        ListHeaderComponent={PostHeader}
        refreshing={status === 'loading'}
        data={orderBy(posts, ['id'], ['desc'])}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list_container}
        renderItem={({ item }) => <Post post={item} />}
        ListFooterComponent={<PostFooter showLoading={status === 'loading'} />}
      />
    </View>
  );
}
