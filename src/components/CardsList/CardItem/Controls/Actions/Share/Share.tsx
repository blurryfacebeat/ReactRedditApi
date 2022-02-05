import React from 'react';
import styles from './Share.module.scss';
import SocialIcon from '@/assets/icons/social.svg';

const Share = () => {
  return (
    <button className={styles.shareButton}>
      <SocialIcon />
    </button>
  );
};

export default Share;
