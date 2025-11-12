import React from "react";
import styles from "./CompanyFilter.module.scss";
// 1. Import dữ liệu
import { filterLocations, filterSizes } from "../../../Service/Data/filterData";
// 2. Import component "con" vừa tách
import FilterGroup from "./FilterGroup";

const CompanyFilter = ({ selectedLocations, onLocationChange }) => {
  // (Bạn cũng sẽ nhận selectedSizes, onSizeChange ở đây)

  return (
    <aside className={styles.sidebar}>
      {/* 2. Truyền props cho nhóm Nơi làm việc */}
      <FilterGroup
        title="Nơi làm việc"
        items={filterLocations}
        selectedItems={selectedLocations}
        onFilterChange={onLocationChange}
      />

      <a href="#" className={styles.allLink}>
        Tất cả
      </a>

      {/* 3. Truyền props cho nhóm Quy mô */}
      {/* *** LƯU Ý QUAN TRỌNG ***
        Dữ liệu DUMMY_JOBS của bạn KHÔNG CÓ "Quy mô". 
        Vì vậy, bộ lọc này sẽ hiển thị nhưng KHÔNG CÓ TÁC DỤNG.
        Bạn cần thêm data "Quy mô" vào DUMMY_JOBS để nó hoạt động.
      */}
      <FilterGroup
        title="Quy mô"
        items={filterSizes}
        selectedItems={new Set()} // Truyền 1 Set rỗng
        onFilterChange={() => {}} // Truyền 1 hàm rỗng
      />
    </aside>
  );
};

export default CompanyFilter; 
