import React, {
  useEffect,
  createRef
} from 'react';
import styles from './cell.css';
import {
  useRecoilState
} from 'recoil';

export default ({recoilState})=>{
  const [ownData, setOwnData] = useRecoilState(recoilState);

  const refCell = createRef();

  const handleDragStart = (e)=>{
    e.preventDefault();
  }

  let classes = styles.cell +' '+ ((ownData.selected)? 'm-selected': '');


  // | Effect - Mount
  // |----------
  useEffect(()=>{
    refCell.current.addEventListener('select', handleSelect);
    
  // |--- Effect - Unmount
  return ()=>{
  }});


  // | Handle - Select
  // |----------
  const handleSelect = ()=>{
    console.log('--| event - select');
  }

  return (
    <div
      onDragStart={handleDragStart}
      onSelect={handleSelect}
      className={classes}
      draggable={"false"}
      ref={refCell}
    >
    </div>
  );
}
