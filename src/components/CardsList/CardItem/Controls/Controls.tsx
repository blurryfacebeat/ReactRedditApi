import React from 'react';
import styles from './Controls.module.scss';
import { KarmaCounter } from './KarmaCounter';
import { Comments } from './Comments';
import { Actions } from './Actions';

const Controls = () => {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <Comments />
      <Actions />
    </div>
  );
};

export default Controls;
