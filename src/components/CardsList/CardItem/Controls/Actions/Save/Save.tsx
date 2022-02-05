import React from 'react';
import styles from './Save.module.scss';
import PlusIcon from '@/assets/icons/plus-layout.svg';

const Save = () => {
  return (
    <button className={styles.saveButton}>
      <PlusIcon />
    </button>
  );
};

export default Save;
