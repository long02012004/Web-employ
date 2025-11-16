import React from "react";
import styles from "./UploadCVPage.module.scss";

// Import icon bóng đèn
import { FiZap } from "react-icons/fi";

// Bạn hãy import các hình ảnh của bạn ở đây
import { cv, robot, robot1 } from "../../../assets/Image/img";


const UploadCVPage = () => {
  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileInput = e.target.elements.cvFile;

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Vui lòng chọn một file CV!");
      return;
    }

    const file = fileInput.files[0];
    console.log("File đã chọn:", file.name);
    //... (Logic của bạn để gửi file này lên server)
    alert("Đã tải file thành công (giả lập)!");
  };

  return (
    // 1. Nền xanh full-page
    // Bạn có thể set background-image ở đây hoặc trong SCSS
    <div
      className={styles.pageWrapper}
      style={{ backgroundImage: `url(${cv})` }}
    >
      {/* 2. Thẻ nội dung màu trắng */}
      <div className={styles.contentCard}>
        <h1 className={styles.title}>BẠN ĐÃ CÓ CV ?</h1>
        <p className={styles.subtitle}>
          TẢI CV LÊN ĐỂ NHẬN PHÂN TÍCH & GỢI Ý VIỆC LÀM TỪ JOBSGO AI
        </p>

        {/* 3. Icon robot và CV */}
        <div className={styles.iconContainer}>
          {/* Thay thế bằng thẻ <img> của bạn */}
          <img
            src={robot1}
            alt="robot"
            style={{
              width: "130px",
              height: "100px",
            }}
          />
        </div>

        {/* 4. Form upload */}
        <form className={styles.uploadForm} onSubmit={handleSubmit}>
          {/* Input chọn file */}
          <div className={styles.formGroup}>
            <label htmlFor="cvFile">
              Upload CV của bạn (vui lòng tải lên định dạng pdf, doc, docx)
              <span className={styles.required}>*</span>
            </label>
            <input
              type="file"
              id="cvFile"
              name="cvFile" // Thêm name để form có thể truy cập
              className={styles.fileInput}
              accept=".pdf,.doc,.docx" // Chỉ cho phép các định dạng này
            />
          </div>

          {/* Hộp gợi ý */}
          <div className={styles.noteBox}>
            <FiZap className={styles.noteIcon} />
            <p>
              <strong>Gợi ý:</strong> Sau khi tải CV lên, bạn có thể chuyển
              thông tin từ CV cũ sang các mẫu CV mới chuyên nghiệp và hấp dẫn
              trên JobsGO
            </p>
          </div>

          {/* Nút Submit */}
          <button type="submit" className={styles.submitButton}>
            TIẾP TỤC
          </button>
        </form>
      </div>

      {/* 5. Mascot ở góc */}
      <div className={styles.mascot}>
        {/* Thay thế bằng thẻ <img> của bạn */}
        <img
          src={robot}
          alt="robot"
          style={{
            backgroundImage: `url(${robot})`,
            width: "110px",
            height: "130px",
          }}
        />
        <div className={styles.speechBubble}>
          Hãy upload CV để nhận phân tích từ JobsGO nhé !!!
        </div>
      </div>
    </div>
  );
};

export default UploadCVPage;
