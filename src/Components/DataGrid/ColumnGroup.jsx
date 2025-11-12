import React from 'react';
import styles from './DataGrid.module.scss';

const ColumnGroup = ({ title, items, isSidebar }) => {
  return (
    <div className={styles.categoryGroup}>
      {/* Dùng style H3 khác nhau 
        nếu đây là group của sidebar (to hơn, không gạch chân)
      */}
      <h3 className={isSidebar ? styles.sidebarTitle : styles.groupTitle}>
        {title}
      </h3>
      
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item.id}>
            <a href="#">
              {item.name} <span>({item.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColumnGroup;