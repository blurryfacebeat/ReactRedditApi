import React from 'react';
import styles from './Preview.module.scss';

const Preview = () => {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/371199/screenshots/17434631/media/9ee3baaddc3cc902733d69945c8aa5ba.jpg?compress=1&resize=1200x900&vertical=top"
        alt="Preview"
      />
    </div>
  );
};

export default Preview;
