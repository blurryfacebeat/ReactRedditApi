import React from 'react';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';
import styles from './MainLayoutHeader.module.scss';

const MainLayoutHeader = () => {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
};

export default MainLayoutHeader;
