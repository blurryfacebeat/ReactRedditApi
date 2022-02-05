import React from 'react';
import styles from './Menu.module.scss';
import MenuDots from '@/assets/icons/menu-dots.svg';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton}>
        <MenuDots />
      </button>
    </div>
  );
};

export default Menu;
