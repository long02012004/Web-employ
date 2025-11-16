import React from 'react';
import styles from './CtaBanners.module.scss';
import { cvAuto, cvAi } from '../../../assets/Image/img';

const CtaBanners = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        
        {/* Banner 1: Tạo CV */}
        <a href="/tao-cv" className={styles.bannerLink}>
          <img 
            src={cvAuto} 
            alt="Tạo CV tự động chỉ 2 phút" 
            className={styles.bannerImage} 
          />
        </a>

        {/* Banner 2: Đánh giá CV AI */}
        <a href="/danh-gia-cv-ai" className={styles.bannerLink}>
          <img 
            src={cvAi} 
            alt="Đánh giá CV JobsGO AI" 
            className={styles.bannerImage} 
          />
        </a>

      </div>
    </section>
  );
};

export default CtaBanners;