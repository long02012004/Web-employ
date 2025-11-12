// --- Dữ liệu 3 cột chính ---
const mainColumns = [
  // ======== CỘT 1 ========
  {
    id: 'col1',
    groups: [
      {
        id: 'bo-phan-ho-tro',
        title: 'BỘ PHẬN HỖ TRỢ',
        items: [
          { id: 'bp-1', name: 'Biên phiên dịch / Thông dịch viên', count: 2076 },
          { id: 'bp-2', name: 'Tiếng Nhật', count: 373 },
          { id: 'bp-3', name: 'Nhân sự', count: 940 },
          { id: 'bp-4', name: 'Pháp lý / Luật', count: 239 },
          { id: 'bp-5', name: 'Thư ký / Hành chính', count: 1620 },
        ]
      },
      {
        id: 'dich-vu',
        title: 'DỊCH VỤ',
        items: [
          { id: 'dv-1', name: 'An ninh / Bảo vệ', count: 93 },
          { id: 'dv-2', name: 'Bán lẻ / Bán sỉ', count: 2723 },
          { id: 'dv-3', name: 'Chăm sóc sức khỏe / Y tế', count: 1408 },
          { id: 'dv-4', name: 'Dịch vụ khách hàng', count: 5919 },
          { id: 'dv-5', name: 'Giáo dục / Đào tạo / Thư viện', count: 2090 },
          { id: 'dv-6', name: 'Phi chính phủ / Phi lợi nhuận', count: 0 },
        ]
      },
      // (Bạn tự thêm DỊCH VỤ TÀI CHÍNH và GIAO DỊCH KHÁCH HÀNG ở đây nhé)
    ]
  },
  
  // ======== CỘT 2 ========
  {
    id: 'col2',
    groups: [
      {
        id: 'ho-tro-san-xuat',
        title: 'HỖ TRỢ SẢN XUẤT',
        items: [
          { id: 'ht-1', name: 'Quản lý chất lượng (QA / QC)', count: 1110 },
          { id: 'ht-2', name: 'Vận chuyển / Giao thông / Kho bãi', count: 1103 },
          { id: 'ht-3', name: 'Vật tư / Thu mua', count: 603 },
          { id: 'ht-4', name: 'Xuất nhập khẩu / Ngoại thương', count: 538 },
        ]
      },
      {
        id: 'it',
        title: 'IT - CÔNG NGHỆ THÔNG TIN',
        items: [
          { id: 'it-1', name: 'CNTT - Phần cứng / Mạng', count: 243 },
          { id: 'it-2', name: 'CNTT - Phần mềm', count: 633 },
        ]
      },
      // (Bạn tự thêm KHÁCH SẠN, KỸ THUẬT, SẢN XUẤT ở đây)
    ]
  },

  // ======== CỘT 3 ========
  {
    id: 'col3',
    groups: [
      {
        id: 'xay-dung',
        title: 'XÂY DỰNG / BẤT ĐỘNG SẢN',
        items: [
          { id: 'xd-1', name: 'Bất động sản', count: 644 },
          { id: 'xd-2', name: 'Kiến trúc', count: 1005 },
          { id: 'xd-3', name: 'Nội thất / Ngoại thất', count: 377 },
          { id: 'xd-4', name: 'Xây dựng', count: 2393 },
        ]
      },
      {
        id: 'truyen-thong',
        title: 'TRUYỀN THÔNG',
        items: [
          { id: 'tt-1', name: 'Báo chí / Biên tập viên / Xuất bản', count: 281 },
          { id: 'tt-2', name: 'Nghệ thuật / Thiết kế / Giải trí', count: 780 },
          { id: 'tt-3', name: 'Viễn thông', count: 119 },
        ]
      },
      // (Bạn tự thêm TƯ VẤN, THEO DÕI, KHÁC ở đây)
    ]
  }
];

// --- Dữ liệu cột sidebar ---
const sidebarColumn = {
  id: 'sidebar',
  isSidebar: true, // Đánh dấu đây là sidebar
  groups: [
    {
      id: 'dia-diem',
      title: 'Địa điểm phổ biến', // Tiêu đề sidebar
      items: [
        { id: 'hcm', name: 'Hồ Chí Minh', count: 8129 },
        { id: 'hn', name: 'Hà Nội', count: 6023 },
        { id: 'dn', name: 'Đà Nẵng', count: 1790 },
        { id: 'bd', name: 'Bình Dương', count: 1742 },
        { id: 'dong-nai', name: 'Đồng Nai', count: 1449 },
        { id: 'bac-ninh', name: 'Bắc Ninh', count: 1115 },
        { id: 'hp', name: 'Hải Phòng', count: 1063 },
        { id: 'brvt', name: 'Bà Rịa - Vũng Tàu', count: 825 },
        { id: 'la', name: 'Long An', count: 798 },
        { id: 'hy', name: 'Hưng Yên', count: 750 },
      ]
    }
  ]
};

// Gộp 3 cột chính và 1 cột sidebar lại
export const jobCategoriesColumns = [...mainColumns, sidebarColumn];