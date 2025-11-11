// src/data/IndustryData.js

// 1. Import các icon từ 'react-icons'
// Bạn có thể tìm icon khác đẹp hơn trên web react-icons
import {
  FaCalculator,
  FaBullhorn,
  FaSeedling,
  FaPaintBrush,
  FaUniversity,
  FaUserTie,
  FaCode,
  FaHardHat,
  FaPlane,
  FaCar,
} from "react-icons/fa";

// 2. Export mảng dữ liệu
// 'Icon' là một component, chúng ta sẽ truyền nó qua prop
export const DUMMY_CATEGORIES = [
  {
    id: 1,
    Icon: FaCalculator,
    title: "Kế toán / Kiểm toán",
    count: "1837 việc làm",
  },
  {
    id: 2,
    Icon: FaBullhorn,
    title: "Quảng cáo / Sale",
    count: "1066 việc làm",
  },
  {
    id: 3,
    Icon: FaSeedling,
    title: "Nông nghiệp / Lâm nghiệp",
    count: "1407 việc làm",
  },
  {
    id: 4,
    Icon: FaPaintBrush,
    title: "Nghệ thuật / Thiết kế",
    count: "777 việc làm",
  },
  {
    id: 5,
    Icon: FaUniversity,
    title: "Ngân hàng / Tài chính",
    count: "1002 việc làm",
  },
  {
    id: 6,
    Icon: FaUserTie,
    title: "Thư ký / Hành chính",
    count: "1605 việc làm",
  },
  // Thêm dữ liệu cho trang 2
  {
    id: 7,
    Icon: FaCode,
    title: "IT - Phần mềm",
    count: "2050 việc làm",
  },
  {
    id: 8,
    Icon: FaHardHat,
    title: "Xây dựng / Kiến trúc",
    count: "950 việc làm",
  },
  {
    id: 9,
    Icon: FaPlane,
    title: "Du lịch / Hàng không",
    count: "420 việc làm",
  },
  {
    id: 10,
    Icon: FaCar,
    title: "Vận tải / Lái xe",
    count: "1120 việc làm",
  },
  // Bạn có thể thêm 2 cái nữa để lấp đầy trang 2
];