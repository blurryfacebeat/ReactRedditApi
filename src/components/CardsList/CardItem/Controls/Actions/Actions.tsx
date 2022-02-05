import React from 'react';
import styles from './Actions.module.scss';
import { Save } from './Save';
import { Share } from './Share';

const Actions = () => {
  return (
    <div className={styles.actions}>
      <Share />
      <Save />
    </div>
  );
};

export default Actions;
