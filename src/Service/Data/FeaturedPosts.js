// Dữ liệu mẫu, bạn có thể đặt ở đầu tệp .jsx hoặc import từ file khác
import {
  handbook1,
  handbook2,
  handbook3,
  handbook4,
  handbook5,
} from "../../assets/Image/img";
const postsData = [
  {
    id: 1,
    type: "large",
    imageUrl: handbook1, // Đường dẫn tới ảnh của bạn
    title: "CIT là thuế gì? Đặc điểm, cách tính và quy định về thuế CIT",
    date: "14/11/2025",
    author: "Hồ Anh Thư",
    description:
      "Khi tìm hiểu về các loại thuế doanh nghiệp, chắc hẳn bạn sẽ bắt gặp cụm từ CIT. Vậy CIT là thuế gì? Đây là một trong những loại thuế quan trọng mà bất kỳ doanh...",
  },
  {
    id: 2,
    type: "small",
    imageUrl: handbook2,
    title: "Lương cứng là gì? Tìm hiểu ý nghĩa và cách tính lương cứng",
    date: "14/11/2025",
    description:
      '"Lương cứng là gì?" luôn là câu hỏi được nhiều người quan tâm khi tìm hiểu về chế độ đãi ngộ trong doanh...',
  },
  {
    id: 3,
    type: "small",
    imageUrl: handbook3,
    title:
      "Bảo hiểm full lương là gì? Lợi ích và quy định về bảo hiểm full lương",
    date: "14/11/2025",
    description:
      "Bảo hiểm full lương là một trong những quyền lợi được người lao động đặc biệt quan tâm hiện nay bởi những...",
  },
  // Thêm 2 bài viết nhỏ còn lại
  {
    id: 4,
    type: "small",
    imageUrl: handbook4,
    title: "Lời chúc khai trương: Hơn cả may mắn, là cả tấm lòng gửi trao!",
    date: "14/11/2025",
    description:
      "Ngày khai trương không chỉ đánh dấu sự khởi đầu của một hành trình kinh doanh mới mà còn là thời điểm để...",
  },
  {
    id: 5,
    type: "small",
    imageUrl: handbook5,
    title: "Bonus là gì? Các loại tiền bonus phổ biến hiện nay",
    date: "14/11/2025",
    description:
      "Hiện nay, hầu hết người lao động khi tìm việc làm ngoài tiền lương cơ bản thì còn quan tâm đến tiền bonus. Cà...",
  },
];

// Tách bài viết lớn và các bài viết nhỏ
const largePost = postsData.find((post) => post.type === "large");
const smallPosts = postsData.filter((post) => post.type === "small");
export { largePost, smallPosts };
