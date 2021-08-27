import React from 'react';
import styles from './cell.css';

export default ()=>{

  const handleDragStart = (e)=>{
    e.preventDefault();
  }

  return (
    <div
      onDragStart={handleDragStart}
      className={styles.cell}
      draggable={"false"}
    >

    </div>
  );
}
