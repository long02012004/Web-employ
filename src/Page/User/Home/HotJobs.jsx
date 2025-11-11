import React, { useState } from "react";
import styles from "./HotJobs.module.scss";
import JobCard from "./JobCard";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { DUMMY_JOBS } from "../../../Service/Data/JobData";

// Số lượng công việc hiển thị trên mỗi trang
const JOBS_PER_PAGE = 12;

const HotJobs = () => {
  // State để theo dõi trang hiện tại (bắt đầu từ 0)
  const [currentPage, setCurrentPage] = useState(0);

  // Tính toán tổng số trang
  const totalJobs = DUMMY_JOBS.length;
  const totalPages = Math.ceil(totalJobs / JOBS_PER_PAGE);

  // Lấy ra các công việc cho trang hiện tại
  const startIndex = currentPage * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  // jobsToShow sẽ là 12 jobs (trang 1, 2) hoặc 2 jobs (trang 3)
  const jobsToShow = DUMMY_JOBS.slice(startIndex, endIndex);

  // Hàm xử lý khi nhấn nút "Next"
  const handleNextPage = () => {
    // Tăng trang, nhưng không vượt quá trang cuối
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  // Hàm xử lý khi nhấn nút "Previous"
  const handlePrevPage = () => {
    // Giảm trang, nhưng không nhỏ hơn 0
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className={styles.hotJobsSection}>
      {/* Tiêu đề section */}
      <div className={styles.header}>
        <h2 className={styles.title}>Việc làm hấp dẫn</h2>
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
          disabled={currentPage === 0} // Vô hiệu hóa khi ở trang đầu
        >
          <MdChevronLeft />
        </button>

        {/* Lưới các job */}
        <div className={styles.jobGrid}>
          {/* Chỉ render các công việc của trang hiện tại */}
          {jobsToShow.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Mũi tên phải */}
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1} // Vô hiệu hóa khi ở trang cuối
        >
          <MdChevronRight />
        </button>
      </div>

      {/* Dấu chấm Paging */}
      <div className={styles.dots}>
        {/* Render các dấu chấm động */}
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

export default HotJobs;