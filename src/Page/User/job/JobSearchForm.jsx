import React, { useState } from "react";
import styles from "./JobSearchForm.module.scss";
import { FiChevronDown } from "react-icons/fi";
import { filterButtonsData } from "../../../Service/Data/jobSearchData";
// (Nhớ kiểm tra lại đường dẫn import data của bạn)

// 1. Import Dropdown từ react-bootstrap
import Dropdown from "react-bootstrap/Dropdown";

const JobSearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Đang tìm kiếm với:", { keyword, location });
  };

  return (
    <div className={styles.searchContainer}>
      {/* PHẦN 1: FORM TÌM KIẾM (Giữ nguyên) */}
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputField}>
            <strong>Từ khóa:</strong>
            <input
              type="text"
              placeholder="Việc, công ty, ngành nghề..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <span className={styles.separator}></span>

          <div className={styles.inputField}>
            <strong>Địa điểm:</strong>
            <input
              type="text"
              placeholder="Tỉnh, thành, quận..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className={styles.searchButton}>
          TÌM VIỆC
        </button>
      </form>

      {/* PHẦN 2: CÁC NÚT FILTER (ĐÃ THAY ĐỔI) */}
      <div className={styles.filterButtons}>
        {/* Lặp qua mảng data */}
        {filterButtonsData.map((btn) => (
          // 2. Thay vì <button>, giờ chúng ta dùng <Dropdown>
          <Dropdown key={btn.id}>
            {/* 3. Nút của bạn trở thành <Dropdown.Toggle> */}
            {/* Chúng ta dùng lại class SCSS cũ của bạn */}
            <Dropdown.Toggle
              id={`dropdown-${btn.id}`}
              className={styles.filterButton} // Dùng style cũ
            >
              {btn.icon}
              <span>{btn.text}</span>
              <FiChevronDown className={styles.dropdownIcon} />
            </Dropdown.Toggle>

            {/* 4. Đây là menu sổ xuống */}
            <Dropdown.Menu>
              {/* Kiểm tra xem nút có menuItems không.
                Nếu không có (mảng rỗng) thì hiển thị 1 mục "Đang cập nhật"
              */}
              {btn.menuItems.length > 0 ? (
                // Lặp qua mảng menuItems
                btn.menuItems.map((item) => (
                  <Dropdown.Item
                    key={item.id}
                    href="#"
                    className={styles.dropdownItem}
                  >
                    {` + ${item.text}`}
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item disabled>Đang cập nhật...</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </div>
    </div>
  );
};

export default JobSearchForm;
