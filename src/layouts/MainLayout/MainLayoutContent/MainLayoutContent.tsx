import React from 'react';
import { IMainLayoutContentProps } from './MainLayoutContent.types';
import styles from './MainLayoutContent.module.scss';

const MainLayoutContent = (props: IMainLayoutContentProps) => {
  const { children } = props;
  return <main className={styles.content}>{children}</main>;
};

export default MainLayoutContent;
