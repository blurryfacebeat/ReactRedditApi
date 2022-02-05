import React from 'react';
import styles from './CardsList.module.scss';
import { CardItem } from './CardItem';

const CardsList = () => {
  return (
    <ul className={styles.cardsList}>
      <CardItem />
    </ul>
  );
};

export default CardsList;
