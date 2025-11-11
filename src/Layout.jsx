import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Page/Auth/SignUp/SignUp";
import Login from "./Page/Auth/LogIn/LogIn";
import ForgotPassword from "./Page/Auth/ForgotPassword/ForgotPassword";
// Toast
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const NotFound = () => {
  return (
    <div className="alert alert-danger">
      404.Not found data with your current URL
    </div>
  );
};
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};
export default Layout;
