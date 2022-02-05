import React from 'react';
import styles from './TextContent.module.scss';

const TextContent = () => {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/371199/avatars/normal/a626094233ada762441d796611460518.jpg?1604833100"
            alt="Avatar"
          />
          <a href="#user-url" className={styles.username}>
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа
          назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности
        </a>
      </h2>
    </div>
  );
};

export default TextContent;
