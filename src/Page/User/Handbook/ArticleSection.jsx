
import React from 'react';
import styles from './ArticleSection.module.scss';
import ArticleCard from './ArticleCard'; // Import component thẻ

const ArticleSection = ({ title, posts, seeMoreLink = "#" }) => {
  // Chỉ lấy 4 bài đầu tiên để hiển thị
  const displayedPosts = posts.slice(0, 4);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <a href={seeMoreLink} className={styles.seeMore}>
          Xem thêm »
        </a>
      </header>
      
      <div className={styles.grid}>
        {/* Lặp qua mảng 4 bài viết và render 4 thẻ */}
        {displayedPosts.map((post) => (
          <ArticleCard
            key={post.id}
            imageUrl={post.imageUrl}
            title={post.title}
            date={post.date}
            description={post.description}
            postUrl="#" // Bạn có thể thêm link thật ở đây
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;