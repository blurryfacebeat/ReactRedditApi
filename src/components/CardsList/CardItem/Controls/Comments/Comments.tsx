import React from 'react';
import styles from './Comments.module.scss';
import CommentsIcon from '@/assets/icons/comments.svg';

const Comments = () => {
  return (
    <button className={styles.commentsButton}>
      <CommentsIcon />
      <span className={styles.commentsNumber}>27</span>
    </button>
  );
};

export default Comments;
