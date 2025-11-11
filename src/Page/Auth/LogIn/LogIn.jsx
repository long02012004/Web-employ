import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogIn = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading] = useState(false);
  const navigate = useNavigate();
  const validatePhone = (phone) => {
    return /^(0|\+84)[0-9]{9,10}$/.test(phone);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      toast.error("Phone Number không hợp lệ");
      return;
    }
    if (!password) {
      toast.error("Mật khẩu không hợp lệ");
      return;
    }
    toast.success("Đăng nhập thành công!");
    navigate("/");
  };
  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-box"]}>
        <h2>Login</h2>
        <form className={styles["login-form"]} onSubmit={handleSubmit}>
          <div className={styles["user-box"]}>
            <input
              id="phone"
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            type="submit"
            className={styles["login-btn"]}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Đăng nhập"}
          </button>
        </form>
        <div className={styles["forgot-password"]}>
          <Link
            to="/forgot-password"
            className={styles["forgot-password-link"]}
          >
            Quên mật khẩu
          </Link>
          <span>
            <Link to="/sign-up" className={styles["sign-up"]}>
              Đăng ký
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
