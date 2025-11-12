import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo1 } from "../../assets/Image/img";
import styles from "./Header.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleClickLogin = () => navigate("/login");
  const handleClickSignUp = () => navigate("/sign-up");

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles["header-container"]}>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.header__logo}>
          <Link to="/">
            <img
              src={logo1}
              alt="Khách Sạn ABC"
              className={styles.header__logo}
            />
          </Link>
        </div>

        <nav className={styles.header__nav}>
          <ul className={styles.nav}>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/home">
                Việc làm
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/food">
                Công ty
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/blog">
                CV/Hồ Sơ
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/offers">
                Công cụ
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/viewroom">
                Cẩm nang
              </NavLink>
            </li>

            {/* Language */}
            <li className={`${styles.nav__item} ${styles.nav__lang}`}>
              <span className={styles.nav__link} tabIndex={0}>
                Tiếng Việt <i className="bx bx-chevron-down"></i>
                <ul className={styles.nav__subnav}>
                  <li>
                    <a href="#">Tiếng Anh</a>
                  </li>
                  <li>
                    <a href="#">Tiếng Hàn</a>
                  </li>
                  <li>
                    <a href="#">Tiếng Trung</a>
                  </li>
                </ul>
              </span>
            </li>
          </ul>
        </nav>
        <div className={styles.header__actions}>
          <li className={styles.nav__item}>
            <button
              className={styles.nav__btn}
              onClick={handleClickLogin}
              /*  style={{
                border: "2px solid #293ce3ff",
                backgroundColor: "#f7f3f3ff",
                color: "#293ce3ff",
              }} */
            >
              Đăng nhập
            </button>
          </li>
          <li className={styles.nav__item}>
            <button className={styles.nav__btn} onClick={handleClickSignUp}>
              Đăng ký
            </button>
          </li>
          <li className={styles.nav__item}>
            <button className={styles.nav__btn} >
              Nhà tuyển dụng
            </button>
          </li>
        </div>
      </header>
    </div>
  );
};

export default Header;
