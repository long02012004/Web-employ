import React from "react";
import styles from "./FilterGroup.module.scss";

// 1. Nhận props từ CompanyFilter
const FilterGroup = ({ title, items, selectedItems, onFilterChange }) => {

  // 2. Hàm xử lý chung khi checkbox thay đổi
  const handleChange = (e) => {
    const itemName = e.target.name;
    const isChecked = e.target.checked;
    // Gọi hàm "mẹ" (vd: handleLocationChange)
    onFilterChange(itemName, isChecked);
  };

  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.filterList}>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              {/* 3. Kết nối state và sự kiện vào input */}
              <input 
                type="checkbox"
                name={item.name} // Dùng name để gửi lên
                // "checked" nếu item.name có trong Set "mẹ"
                checked={selectedItems.has(item.name)}
                onChange={handleChange} // Gọi hàm khi nhấn
              />
              <span>{item.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;
