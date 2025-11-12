import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Page/Auth/SignUp/SignUp";
import Login from "./Page/Auth/LogIn/LogIn";
import ForgotPassword from "./Page/Auth/ForgotPassword/ForgotPassword";
import HomePage from "./Page/User/Home/Home";
// Toast
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Job from "./Page/User/job/Job";
import CompaniesPage from "./Page/User/Company/CompaniesPage";

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
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="job" element={<Job />} />
          <Route path="company" element={<CompaniesPage />} />
        </Route>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
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
