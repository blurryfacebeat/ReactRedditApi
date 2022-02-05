import React from 'react';
import styles from './CardItem.module.scss';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

// TODO Доверстать адаптив и не только!!!
const CardItem = () => {
  return (
    <li className={styles.cardItem}>
      <TextContent />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
};

export default CardItem;
