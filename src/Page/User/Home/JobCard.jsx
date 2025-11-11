// src/components/HotJobs/JobCard.jsx
import React from "react";
import styles from "./JobCard.module.scss";

// Import các icon
import { FiHeart } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";

const JobCard = ({ job }) => {
  // Lấy dữ liệu từ prop 'job'
  const { logo, title, company, location, salary, date, isHot } = job;

  return (
    <div className={styles.jobCard}>
      {/* Phần trên của thẻ */}
      <div className={styles.cardTop}>
        <img src={logo} alt={`${company} logo`} className={styles.logo} />
        <div className={styles.jobInfo}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{title}</h3>
            <FiHeart className={styles.saveIcon} />
          </div>
          <p className={styles.company}>{company}</p>
          <div className={styles.tags}>
            {isHot && (
              <span className={`${styles.tag} ${styles.hotTag}`}>HOT</span>
            )}
            <span className={styles.tag}>
              <CiLocationOn /> {location}
            </span>
          </div>
        </div>
      </div>

      {/* Phần dưới của thẻ */}
      <div className={styles.cardBottom}>
        <span className={`${styles.tag} ${styles.salaryTag}`}>
          <BsCurrencyDollar /> {salary}
        </span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default JobCard;