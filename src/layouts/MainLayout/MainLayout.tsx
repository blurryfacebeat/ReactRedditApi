import React, { FunctionComponent } from 'react';
import { IMainLayoutProps } from './MainLayout.types';
import styles from './MainLayout.module.scss';
import { MainLayoutHeader } from './MainLayoutHeader';
import { MainLayoutContent } from './MainLayoutContent';
import { CardsList } from '@/components';

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <MainLayoutHeader />
      <MainLayoutContent>
        <CardsList />
      </MainLayoutContent>
    </div>
  );
};

const withMainLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withMainLayoutComponent(props: T) {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};

export default withMainLayout;
