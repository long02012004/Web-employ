import React, { useState, useMemo } from "react";
import styles from "./CompaniesPage.module.scss";

// 1. IMPORT CÁC COMPONENT CON
import CompanyFilter from "./CompanyFilter";
import CompanyCard from "./CompanyCard";

// 2. IMPORT DỮ LIỆU GỐC
import { DUMMY_JOBS } from "../../../Service/Data/JobData"; // <-- Đổi tên file data
import { FiSearch } from "react-icons/fi";

const CompaniesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Thêm State để lưu các bộ lọc được chọn
  // Chúng ta dùng Set() vì nó thêm/xóa rất nhanh
  const [selectedLocations, setSelectedLocations] = useState(new Set());
  // (Bạn có thể thêm selectedSizes ở đây nếu có data)

  // 2. Thêm HÀM XỬ LÝ khi check/uncheck
  const handleLocationChange = (locationName, isChecked) => {
    // Cập nhật state một cách an toàn
    setSelectedLocations((prevSelected) => {
      const newSet = new Set(prevSelected);
      if (isChecked) {
        newSet.add(locationName); // Thêm vào Set
      } else {
        newSet.delete(locationName); // Xóa khỏi Set
      }
      return newSet;
    });
  };

  // (Bạn có thể thêm handleSizeChange ở đây)

  // 3. LOGIC GỘP CÁC VIỆC LÀM (Giữ nguyên)
  const companies = useMemo(() => {
    const companiesMap = new Map();
    DUMMY_JOBS.forEach((job) => {
      if (!companiesMap.has(job.company)) {
        companiesMap.set(job.company, {
          id: job.company,
          name: job.company,
          logo: job.logo,
          jobCount: 0,
          locations: new Set(),
        });
      }
      const company = companiesMap.get(job.company);
      company.jobCount++;
      company.locations.add(job.location);
    });

    return Array.from(companiesMap.values()).map((c) => ({
      ...c,
      // Chuyển Set locations thành mảng (dễ lọc hơn)
      locations: Array.from(c.locations), // ["Hồ Chí Minh", "Đà Nẵng"]
    }));
  }, []);

  // 4. CẬP NHẬT LOGIC LỌC
  const filteredCompanies = companies.filter((company) => {
    // Lọc theo Search Term (như cũ)
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Lọc theo Location
    const matchesLocation = () => {
      if (selectedLocations.size === 0) {
        return true; // Nếu không chọn filter nào, hiện tất cả
      }
      // Kiểm tra xem công ty có MỘT TRONG CÁC địa điểm đã chọn không
      // company.locations = ["Hồ Chí Minh", "Đà Nẵng"]
      // selectedLocations = Set {"Hà Nội", "Đà Nẵng"}
      // => some() sẽ tìm thấy "Đà Nẵng" và trả về true
      return company.locations.some((loc) => selectedLocations.has(loc));
    };

    // (Bạn có thể thêm matchesSize ở đây)

    // Công ty phải khớp VỚI TẤT CẢ bộ lọc
    return matchesSearch && matchesLocation();
  });

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Nhà tuyển dụng hàng đầu</h2>

      <div className={styles.mainLayout}>
        {/* 5. TRUYỀN state và hàm xử lý xuống */}
        <CompanyFilter
          selectedLocations={selectedLocations}
          onLocationChange={handleLocationChange}
          // (Truyền thêm filter cho Quy mô ở đây)
        />

        <main className={styles.mainContent}>
          {/* ... (phần search bar giữ nguyên) ... */}
          <div className={styles.searchBar}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Tìm công ty"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <p className={styles.resultCount}>
            {filteredCompanies.length} công ty được tìm thấy
          </p>
          <div className={styles.companyGrid}>
            {filteredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                logo={company.logo}
                name={company.name}
                jobCount={company.jobCount}
                // join() để hiển thị ra UI, nhưng vẫn giữ mảng để lọc
                locations={company.locations.join(", ")}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CompaniesPage;
