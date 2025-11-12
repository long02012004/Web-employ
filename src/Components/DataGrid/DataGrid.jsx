import React from 'react';
import styles from './DataGrid.module.scss';
import ColumnGroup from './ColumnGroup';

/**
 * Component Grid linh hoạt
 * @param {string} mainTitle - Tiêu đề chính H2 của cả khối
 * @param {Array} columns - Mảng dữ liệu các cột
 */
const DataGrid = ({ mainTitle, columns }) => {
  
  // Tự động tạo style cho grid dựa trên số cột
  const gridStyle = {
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
  };

  return (
    <div className={styles.pageContainer}>
      {/* Chỉ hiển thị H2 nếu có mainTitle */}
      {mainTitle && <h2 className={styles.mainTitle}>{mainTitle}</h2>}
      
      <div style={gridStyle}>
        
        {/* Lặp qua các CỘT */}
        {columns.map(column => (
          <div 
            key={column.id} 
            // Thêm class .sidebar nếu cột này là sidebar
            className={`${styles.categoryColumn} ${column.isSidebar ? styles.sidebar : ''}`}
          >
            {/* Lặp qua các NHÓM trong 1 cột */}
            {column.groups.map(group => (
              <ColumnGroup 
                key={group.id} 
                title={group.title} 
                items={group.items} 
                isSidebar={column.isSidebar} // Truyền cờ này xuống
              />
            ))}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default DataGrid;