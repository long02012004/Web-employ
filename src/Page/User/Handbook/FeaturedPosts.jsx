import React from "react";
import styles from "./FeaturedPosts.module.scss";
// Giả sử bạn có icon, nếu không có thể dùng text hoặc SVG
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { largePost, smallPosts } from "../../../Service/Data/FeaturedPosts";

// Import dữ liệu (hoặc định nghĩa ở trên)
// const { largePost, smallPosts } = ... (từ bước 2)

const FeaturedPosts = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>Bài Viết Nổi Bật</h2>

      <div className={styles.grid}>
        {/* === CỘT LỚN BÊN TRÁI === */}
        {largePost && (
          <article className={styles.largeCard}>
            <img
              src={largePost.imageUrl}
              alt={largePost.title}
              className={styles.largeCardImage}
            />
            <div className={styles.largeCardOverlay}></div>
            <div className={styles.largeCardContent}>
              <h3 className={styles.largeCardTitle}>
                <a href="#">{largePost.title}</a>
              </h3>
              <div className={styles.meta}>
                <span>
                  <FaRegCalendarAlt /> {largePost.date}
                </span>
                <span>
                  <FaRegUser /> {largePost.author}
                </span>
              </div>
              <p className={styles.description}>{largePost.description}</p>
              <a href="#" className={styles.readMore}>
                Xem thêm »
              </a>
            </div>
          </article>
        )}

        {/* === CỘT NHỎ BÊN PHẢI === */}
        <div className={styles.smallCardList}>
          {smallPosts.map((post) => (
            <article key={post.id} className={styles.smallCard}>
              <div className={styles.smallCardImage}>
                <img src={post.imageUrl} alt={post.title} />
              </div>
              <div className={styles.smallCardContent}>
                <h4 className={styles.smallCardTitle}>
                  <a href="#">{post.title}</a>
                </h4>
                <div className={styles.meta}>
                  <span>
                    <FaRegCalendarAlt /> {post.date}
                  </span>
                </div>
                <p className={styles.description}>{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
