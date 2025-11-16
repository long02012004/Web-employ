import React from "react";
import styles from "./BenefitsSection.module.scss";

// Bạn hãy import 3 icon của bạn vào đây
import { cv1, cv2, cv3 } from "../../../assets/Image/img";

// 1. Tạo mảng dữ liệu cho 3 thẻ
const benefitsData = [
  {
    id: 1,
    imageSrc: cv1,
    description:
      "Tạo hồ sơ\ncực nhanh trên JobsGO\nmà không cần nhập thông tin.",
  },
  {
    id: 2,
    imageSrc: cv2,
    description: "Nhận phân tích CV\nvà gợi ý việc làm\nphù hợp bởi JobsGO AI.",
  },
  {
    id: 3,
    imageSrc: cv3,
    description: "Làm mới CV\nTừ nhiều mẫu CV đẹp.",
  },
];

const BenefitsSection = () => {
  return (
    <div className={styles.container}>
      {/* 2. Tiêu đề và gạch chân */}
      <h2 className={styles.title}>BẠN SẼ NHẬN ĐƯỢC GÌ ?</h2>

      {/* 3. Lưới chứa các thẻ */}
      <div className={styles.cardGrid}>
        {benefitsData.map((benefit) => (
          <div key={benefit.id} className={styles.card}>
            {/* 4. Khung chứa icon */}
            <div className={styles.imageContainer}>
              {/* Thay thế bằng thẻ <img> của bạn */}
              <img
                src={benefit.imageSrc}
                
              />
            </div>

            {/* 5. Nội dung mô tả */}
            <p className={styles.cardDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
