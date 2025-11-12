import React from 'react';
import styles from './CompanyCard.module.scss';

const CompanyCard = ({ logo, name, jobCount, locations }) => {
  
  // Đảm bảo locations luôn là string để hiển thị
  const displayLocations = Array.isArray(locations) 
    ? locations.join(', ') 
    : locations;

  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logo} alt={`${name} logo`} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.companyName}>{name}</h3>
        <p className={styles.jobCount}>
          {jobCount} việc đang tuyển
        </p>
        <p className={styles.location}>{displayLocations}</p>
      </div>
    </div>
  );
};

export default CompanyCard;