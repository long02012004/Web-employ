import React, { useState } from 'react';
import styles from './ExpandableContent.module.scss';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const ExpandableContent = ({ children, initialHeight = 500 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const contentStyle = {
    maxHeight: isExpanded ? 'none' : `${initialHeight}px`,
  };

  return (
    <div className={styles.container}>
      {/* 1. Wrapper chứa nội dung */}
      <div 
        className={styles.contentWrapper}
        style={contentStyle}
      >
        {children} {/* Nội dung của bạn (JobDescription) sẽ vào đây */}
      </div>

      {/* 2. Lớp mờ (fade overlay) chỉ hiển thị khi thu gọn */}
      {!isExpanded && <div className={styles.fadeOverlay}></div>}

      {/* 3. Nút bấm */}
      <div className={styles.buttonContainer}>
        <button onClick={toggleExpand} className={styles.toggleButton}>
          {isExpanded ? 'Thu gọn' : 'Xem thêm'}
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
    </div>
  );
};

export default ExpandableContent;