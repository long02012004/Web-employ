import React from "react";
import styles from "./HandbookBanner.module.scss";
import { bannerRobot } from "../../../assets/Image/img";

const HandbookBanner = () => {
  return (
    <section className={styles.bannerContainer}>
      {/* Hình nền */}
      <div
        className={styles.bannerBackground}
        style={{ backgroundImage: `url(${bannerRobot})` }}
      >
        {/* Nội dung văn bản */}
        <div className={styles.content}>
          <h2 className={styles.title}>CẨM NANG NGHỀ NGHIỆP</h2>
          <p className={styles.description}>
            Mang đến những kinh nghiệm, kiến thức hữu ích về cuộc sống công sở
            và hành trình nghề nghiệp.
          </p>
        </div>

        {/* Hình ảnh Robot */}
        {/*         <img 
          src={RobotImage} 
          alt="Robot character with magnifying glass" 
          className={styles.robotImage} 
        /> */}
      </div>
    </section>
  );
};

export default HandbookBanner;
