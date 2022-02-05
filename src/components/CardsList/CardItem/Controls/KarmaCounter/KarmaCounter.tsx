import React from 'react';
import styles from './KarmaCounter.module.scss';
import KarmaUp from '@/assets/icons/karma-up.svg';
import KarmaDown from '@/assets/icons/karma-down.svg';

const KarmaCounter = () => {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.karmaUp}>
        <KarmaUp />
      </button>
      <span className={styles.karmaValue}>234</span>
      <button className={styles.karmaDown}>
        <KarmaDown />
      </button>
    </div>
  );
};

export default KarmaCounter;
