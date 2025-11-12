import React, { useRef } from "react";
import SectorCard from "./SectorCard";
import styles from "./TopHiring.module.scss";

// 1. Import dữ liệu từ file riêng
import { categoriesData } from "../../../Service/Data/topHiringData";

const TopHiring = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -360,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 360,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTitle}>
        Doanh nghiệp hàng đầu đang tuyển dụng
      </h2>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrowButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &lt;
        </button>

        <div className={styles.categoryList} ref={scrollContainerRef}>
          {/* 3. Sử dụng dữ liệu đã import */}
          {categoriesData.map((category) => (
            <SectorCard
              key={category.id}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>

        <button
          className={`${styles.arrowButton} ${styles.right}`}
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TopHiring;
