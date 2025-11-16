import React from "react";
import styles from "./CVCard.module.scss";

const CVCard = ({ imageSrc, caption, topBorderColor }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.imageContainer}
        // Style cho đường viền màu
        style={{ borderTopColor: topBorderColor }}
      >
        <img src={imageSrc} alt={caption} />
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
};

export default CVCard;
