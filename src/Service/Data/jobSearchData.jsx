/* import React from "react";
import { BsGrid3X3Gap, BsListCheck } from "react-icons/bs";
import { FiDollarSign, FiUser, FiStar, FiBook } from "react-icons/fi";

export const filterButtonsData = [
  { id: 1, text: "Ngành nghề", icon: <BsGrid3X3Gap /> }, // 👈 sửa ở đây
  { id: 2, text: "Loại hình", icon: <BsListCheck /> },
  { id: 3, text: "Mức lương", icon: <FiDollarSign /> },
  { id: 4, text: "Chức vụ", icon: <FiUser /> },
  { id: 5, text: "Kinh nghiệm", icon: <FiStar /> },
  { id: 6, text: "Học vấn", icon: <FiBook /> },
  
];
 */
import React from "react";
import { BsGrid, BsListCheck } from "react-icons/bs";
import { FiDollarSign, FiUser, FiStar, FiBook } from "react-icons/fi";

export const filterButtonsData = [
  { 
    id: 1, 
    text: "Ngành nghề", 
    icon: <BsGrid />,
    menuItems: [
      { id: "nganh-1", text: "Công nghệ thông tin" },
      { id: "nganh-2", text: "Marketing" },
      { id: "nganh-3", text: "Kế toán - Kiểm toán" },
      { id: "nganh-4", text: "Hành chính - Nhân sự" },
      { id: "nganh-5", text: "Thiết kế đồ họa" },
      { id: "nganh-6", text: "Kinh doanh - Bán hàng" },
      { id: "nganh-7", text: "Giáo dục - Đào tạo" },
      { id: "nganh-8", text: "Du lịch - Nhà hàng - Khách sạn" },
    ],
  },
  { 
    id: 2, 
    text: "Loại hình", 
    icon: <BsListCheck />,
    menuItems: [
      { id: "loai-1", text: "Toàn thời gian (Full-time)" },
      { id: "loai-2", text: "Bán thời gian (Part-time)" },
      { id: "loai-3", text: "Thực tập (Internship)" },
      { id: "loai-4", text: "Làm việc từ xa (Remote)" },
      { id: "loai-5", text: "Theo dự án (Freelance)" },
    ],
  },
  { 
    id: 3, 
    text: "Mức lương", 
    icon: <FiDollarSign />,
    menuItems: [
      { id: "luong-1", text: "Dưới 10 triệu" },
      { id: "luong-2", text: "10 - 15 triệu" },
      { id: "luong-3", text: "15 - 20 triệu" },
      { id: "luong-4", text: "20 - 30 triệu" },
      { id: "luong-5", text: "Trên 30 triệu" },
      { id: "luong-6", text: "Thỏa thuận" },
    ],
  },
  { 
    id: 4, 
    text: "Chức vụ", 
    icon: <FiUser />, 
    menuItems: [
      { id: "chucvu-1", text: "Nhân viên" },
      { id: "chucvu-2", text: "Trưởng nhóm" },
      { id: "chucvu-3", text: "Trưởng phòng" },
      { id: "chucvu-4", text: "Phó giám đốc" },
      { id: "chucvu-5", text: "Giám đốc" },
    ],
  },
  { 
    id: 5, 
    text: "Kinh nghiệm", 
    icon: <FiStar />, 
    menuItems: [
      { id: "kn-1", text: "Chưa có kinh nghiệm" },
      { id: "kn-2", text: "Dưới 1 năm" },
      { id: "kn-3", text: "1 - 3 năm" },
      { id: "kn-4", text: "3 - 5 năm" },
      { id: "kn-5", text: "Trên 5 năm" },
    ],
  },
  { 
    id: 6, 
    text: "Học vấn", 
    icon: <FiBook />, 
    menuItems: [
      { id: "hv-1", text: "Trung học phổ thông" },
      { id: "hv-2", text: "Cao đẳng" },
      { id: "hv-3", text: "Đại học" },
      { id: "hv-4", text: "Thạc sĩ" },
      { id: "hv-5", text: "Tiến sĩ" },
    ],
  },
];
