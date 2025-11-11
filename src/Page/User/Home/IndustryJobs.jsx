// src/components/IndustryJobs/IndustryJobs.jsx
import React, { useState } from "react";
import styles from "./IndustryJobs.module.scss";
import CategoryCard from "./CategoryCard"; // Import component con

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Import dữ liệu từ file riêng
// !!! Nhớ cập nhật đường dẫn này
import { DUMMY_CATEGORIES } from "../../../Service/Data/IndustryData";

// Số lượng danh mục hiển thị (như trong ảnh)
const ITEMS_PER_PAGE = 6;

const IndustryJobs = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalItems = DUMMY_CATEGORIES.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Cắt mảng để lấy 6 danh mục cho trang hiện tại
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const itemsToShow = DUMMY_CATEGORIES.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className={styles.industryJobsSection}>
      {/* Tiêu đề section */}
      <div className={styles.header}>
        <h2 className={styles.title}>Việc làm theo ngành nghề</h2>
        <a href="#" className={styles.viewAll}>
          Xem tất cả &gt;
        </a>
      </div>

      {/* Phần Carousel */}
      <div className={styles.carouselContainer}>
        {/* Mũi tên trái */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          <MdChevronLeft />
        </button>

        {/* Lưới các danh mục */}
        <div className={styles.categoryGrid}>
          {itemsToShow.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Mũi tên phải */}
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <MdChevronRight />
        </button>
      </div>

      {/* Dấu chấm Paging */}
      <div className={styles.dots}>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentPage === index ? styles.active : ""
            }`}
            onClick={() => setCurrentPage(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default IndustryJobs;