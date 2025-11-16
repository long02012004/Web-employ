import FeaturedPosts from "./FeaturedPosts";
import styles from "./Handbook.module.scss";
import HandbookBanner from "./HandbookBanner";
import { careerPosts, interviewPosts } from "../../../Service/Data/ArticleCard";
import ArticleSection from "./ArticleSection";
import CtaBanners from "./CtaBanners";
const Handbook = () => {
  return (
    <div className={styles.handbookContainer}>
      <div className={styles.bannerHandbook}>
        <HandbookBanner />
      </div>
      <div className={styles.handbookContent}>
        <FeaturedPosts />
        <ArticleSection title="Lộ Trình Thăng Tiến" posts={careerPosts} />

        <div
          className={styles.interviewSection}
          style={{ background: "#f5f5f5", width: "100%", padding: "2px 0" }}
        >
          <ArticleSection title="Kỹ Năng Phỏng Vấn" posts={interviewPosts} />
        </div>
        <CtaBanners />
        <ArticleSection title="Trắc Nghiệm Tính Cách" posts={careerPosts} />
        <div
          className={styles.interviewSection}
          style={{
            background: "#f5f5f5",
            width: "100%",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <ArticleSection title="Văn Hoá Doanh Nghiệp" posts={careerPosts} />
        </div>
        <ArticleSection title="Hướng Nghiệp Fresher" posts={careerPosts} />
      </div>
    </div>
  );
};
export default Handbook;
