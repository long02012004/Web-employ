import Video from "../../../assets/Video/video.mp4";
import styles from "./Home.module.scss";
import HotJobs from "./HotJobs";
import IndustryJobs from "./IndustryJobs";
import { Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home__container}>
      {/* --- PHẦN VIDEO HERO --- */}
      <div className={styles.video_section}>
        <video autoPlay loop muted className={styles.video}>
          <source src={Video} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ thẻ video.
        </video>
      </div>
      <div className={styles.home_content}>
        <div className={styles.intro_text}>
          <Breadcrumb className="quiz-detail-new-header">
            <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/" }}>
              JobSGo
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/users" }}>
              Công Ty
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Công ty đang tuyển dụng</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <HotJobs />
        <IndustryJobs />
      </div>
    </div>
  );
};

export default Home;
