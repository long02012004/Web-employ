import React from 'react';
import styles from './SectorCard.module.scss';

// Đổi tên component thành SectorCard
const SectorCard = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default SectorCard;