// File: /components/ArticleSection/ArticleCard.jsx

import React from 'react';
import styles from './ArticleCard.module.scss';
import { FaRegCalendarAlt } from 'react-icons/fa'; // Cần cài: npm install react-icons

const ArticleCard = ({ postUrl, imageUrl, title, date, description }) => {
  return (
    <article className={styles.card}>
      <a href={postUrl} className={styles.imageLink}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </a>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <a href={postUrl}>{title}</a>
        </h3>
        <div className={styles.meta}>
          <FaRegCalendarAlt /> {date}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default ArticleCard;