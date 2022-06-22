import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { IPost, RootState } from '../../types';
import EditIcon from '../icons/edit';
import TrashIcon from '../icons/trash';
import EditPost from '../modals/editPost';
import DeletePost from '../modals/deletePost';
import { getTimeDifference } from '../utilities';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginBottom: 20,
    borderColor: '#999999',
    flexDirection: 'column',
  },
  header: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '700',
  },
  actions: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  body: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    flexDirection: 'column',
  },
  info_container: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_text: {
    fontSize: 16,
    color: '#777777',
    fontWeight: '700',
  },
  content: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
  },
});

export default function Post({ post }: { post: IPost }) {
  const username = useSelector((state: RootState) => state.user.username);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<null | 'edit' | 'delete'>(null);

  const handleCloseModal = () => {
    setModalType(null);
    setModalVisible(false);
  };

  const handleShowModal = (type: 'edit' | 'delete') => {
    setModalType(type);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{post.title}</Text>
        {post.username === username && (
          <View style={styles.actions}>
            <Pressable
              style={styles.icon}
              onPress={() => handleShowModal('edit')}
            >
              <EditIcon size={32} color="#fff" />
            </Pressable>
            <Pressable
              style={styles.icon}
              onPress={() => handleShowModal('delete')}
            >
              <TrashIcon size={32} color="#fff" />
            </Pressable>
          </View>
        )}
      </View>
      <View style={styles.body}>
        <View style={styles.info_container}>
          <Text style={styles.info_text}>{`@${post.username}`}</Text>
          <Text>{getTimeDifference(post.created_datetime)}</Text>
        </View>
        <Text style={styles.content}>{post.content}</Text>
      </View>
      <Modal transparent animationType="fade" visible={modalVisible}>
        {modalType === 'edit' ? (
          <EditPost post={post} handleCloseModal={handleCloseModal} />
        ) : (
          <DeletePost post={post} handleCloseModal={handleCloseModal} />
        )}
      </Modal>
    </View>
  );
}
