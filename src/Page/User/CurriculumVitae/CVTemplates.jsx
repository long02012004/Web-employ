import React from "react";
import styles from "./CVTemplates.module.scss";
// 1. Import component con
import CVCard from "./CVCard";
// 2. Import dữ liệu
import { cvTemplateData } from "../../../Service/Data/cvTemplateData";

const CVTemplates = () => {
  return (
    <div className={styles.wrapper}>
      {/* 1. Tiêu đề */}
      <div className={styles.titleSection}>
        <h2>BẠN CẦN MỘT MẪU CV MỚI ?</h2>
        <p>
          TẠO CV XIN VIỆC ONLINE CHUYÊN NGHIỆP, NHANH CHÓNG, MIỄN PHÍ VỚI JOBSGO
        </p>
      </div>

      {/* 2. Lưới 3 cột */}
      <div className={styles.grid}>
        {cvTemplateData.map((cv) => (
          <CVCard
            key={cv.id}
            imageSrc={cv.imageSrc} // Bỏ comment khi bạn có ảnh
            caption={cv.caption}
            topBorderColor={cv.topBorderColor}
          />
        ))}
      </div>

      {/* 3. Dấu chấm phân trang */}
      <div className={styles.paginationDots}>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>

      {/* 4. Nút "Xem thêm" */}
      <button className={styles.viewMoreButton}>Xem thêm</button>

      {/* 5. Khối CTA "Nhận phân tích" */}
      <div className={styles.bottomCta}>
        <h3>Nhận phân tích CV & gợi ý việc làm từ JobsGO AI</h3>
        <button className={styles.ctaButton}>NHẬN PHÂN TÍCH NGAY</button>
      </div>
    </div>
  );
};

export default CVTemplates;
