import React from "react";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category }) => {
  // Lấy Icon (component), title, và count từ prop
  const { Icon, title, count } = category;

  return (
    <a href="#" className={styles.categoryCard}>
      <div className={styles.iconWrapper}>
        <Icon />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.count}>{count}</p>
    </a>
  );
};

export default CategoryCard;