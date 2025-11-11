import React from "react";
import styles from "./Footer.module.scss";
import { logo1, googlePlay, appStore, subscribe } from "../../assets/Image/img";

// Import các icon từ thư viện react-icons
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerMain}>
        {/* === CỘT 1: Về CareerLink === */}
        <div className={styles.footerColumn}>
          <h3>Về CareerLink</h3>
          <ul>
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Quy chế hoạt động</a>
            </li>
            <li>
              <a href="#">Quy định bảo mật</a>
            </li>
            <li>
              <a href="#">Thoả thuận sử dụng</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
            <li>
              <a href="#">Sơ đồ trang web</a>
            </li>
            <li>
              <a href="#">CareerLink.asia</a>
            </li>
          </ul>
        </div>

        {/* === CỘT 2: Ứng viên & Tuyển dụng === */}
        <div className={styles.footerColumn}>
          <h3>Dành cho ứng viên</h3>
          <ul>
            <li>
              <a href="#">Việc làm</a>
            </li>
            <li>
              <a href="#">Tìm việc làm nhanh</a>
            </li>
            <li>
              <a href="#">Công ty</a>
            </li>
            <li>
              <a href="#">Cẩm Nang Việc Làm</a>
            </li>
            <li>
              <a href="#">Mẫu CV Xin Việc</a>
            </li>
            <li>
              <a href="#">Tư Vấn Du Học Nhật Bản</a>
            </li>
          </ul>
          <h3 className={styles.columnSubtitle}>Dành cho nhà tuyển dụng</h3>
          <ul>
            <li>
              <a href="#">Dịch vụ nhân sự cao cấp</a>
            </li>
            <li>
              <a href="#">Cẩm nang tuyển dụng</a>
            </li>
          </ul>
        </div>

        {/* === CỘT 3: Khu vực & Ngành nghề === */}
        <div className={styles.footerColumn}>
          <h3>Việc làm theo khu vực</h3>
          <ul>
            <li>
              <a href="#">Hồ Chí Minh</a>
            </li>
            <li>
              <a href="#">Hà Nội</a>
            </li>
            <li>
              <a href="#">Đà Nẵng</a>
            </li>
            <li>
              <a href="#">Hải Phòng</a>
            </li>
            <li>
              <a href="#">Cần Thơ</a>
            </li>
          </ul>
          <h3 className={styles.columnSubtitle}>Việc làm theo ngành nghề</h3>
          <ul>
            <li>
              <a href="#">Kế toán</a>
            </li>
            <li>
              <a href="#">Tiếng Nhật</a>
            </li>
            <li>
              <a href="#">Ngân hàng</a>
            </li>
            <li>
              <a href="#">IT - Phần mềm</a>
            </li>
            <li>
              <a href="#">IT - Phần cứng / Mạng</a>
            </li>
          </ul>
        </div>

        {/* === CỘT 4: Tải ứng dụng & Chứng nhận === */}
        <div className={styles.footerColumn}>
          <h3>Tải ứng dụng</h3>
          <div className={styles.appBadges}>
            {/* !!! THAY THẾ ĐƯỜNG DẪN ẢNH Ở ĐÂY */}
            <a href="#">
              <img src={googlePlay} alt="Google Play" />
            </a>
            <a href="#">
              <img src={appStore} alt="App Store" />
            </a>
          </div>
          <h3>Chứng nhận</h3>
          <div className={styles.certification}>
            {/* !!! THAY THẾ ĐƯỜNG DẪN ẢNH Ở ĐÂY */}
            <a href="#">
              <img src={subscribe} alt="Đã thông báo Bộ Công Thương" />
            </a>
            <p>GPKD TP.HCM SỐ: 0400539269</p>
            <p>VPĐD TP.HÀ NỘI SỐ: 0400539269-001</p>
            <p>VPĐD TP.ĐN SỐ: 0400539269-003</p>
            <p>GPXVVL SỐ: 31.116/SLĐTBXH-GPQH</p>
          </div>
          <h3>Kết nối với CareerLink</h3>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Youtube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Tiktok">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* === PHẦN BOTTOM: Copyright === */}
      <div className={styles.footerBottom}>
        {/* !!! THAY THẾ ĐƯỜNG DẪN ẢNH Ở ĐÂY */}
        <img src={logo1} alt="CareerLink Logo" className={styles.footerLogo} />
        <p>
          Tuyển dụng, tìm kiếm việc làm trực tuyến tại CareerLink.vn | Customer
          Care:(028) 3813 0501 / contact@careerlink.vn
        </p>
        <p>
          CTY TNHH CAREERLINK | GPĐKKD số 0400539269 do Sở KHĐT TP.HCM cấp ngày
          05/04/2006
        </p>
        <p>
          270 - 272 Cộng Hòa, Phường Tân Bình, TP.HCM Copyright © 2007-2020 by
          https://www.careerlink.vn All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
