import React, {
  useState,
  useReducer,
  useEffect,
  useRef
} from 'react';
import styles from './select.css';
import stylesCell from  '../Cell/cell.css';


const selection = {
  startPoint: {
    x: 0,
    y: 0
  },
  endPoint: {
    x: 0,
    y: 0
  },
  delta: {
    x: 0,
    y: 0
  }
}


// |---------------
// | COMPONENT
// |--------------- 
export default ()=>{
  console.log('--| SELECTION render');

  let isDrag = false,
      $cells = null;

  const refSelectBox = useRef();

  // | On Mount
  // |----------
  useEffect(()=>{
    console.log('--| mount');

    refSelectBox.current.parentNode.addEventListener('mousedown', handleMouseDown);
    refSelectBox.current.parentNode.addEventListener('mouseup', handleMouseUp);
    refSelectBox.current.parentNode.addEventListener('mousemove', handleMouseMove);
    refSelectBox.current.parentNode.addEventListener('mouseleave', handlerMouseLeave);

  // |--- On Unmount - Unset event handlers
  return ()=>{
    console.log('--| unmount');

    refSelectBox.current.parentNode.removeEventListener('mousedown', handleMouseDown);
    refSelectBox.current.parentNode.removeEventListener('mouseup', handleMouseUp);
    refSelectBox.current.parentNode.removeEventListener('mousemove', handleMouseMove);
    refSelectBox.current.parentNode.removeEventListener('mouseleave', handlerMouseLeave);
  }});


  // | Handler - Mouse Down
  // |----------
  const handleMouseDown = (e)=>{
    let $container = refSelectBox.current.parentNode;

    $cells = document.querySelectorAll('.cell_cell');

    console.log('--| mouse down');

    refSelectBox.current.style.left = e.clientX+'px';
    refSelectBox.current.style.top  = e.clientY+'px';

    isDrag = true;
    selection.startPoint = {
      x: e.clientX,
      y: e.clientY
    };
  }


  // | Handler - Mouse Move
  // |----------
  const handleMouseMove = (e)=>{
    if(!isDrag) return;

    selection.delta.x = Math.abs(selection.startPoint.x - e.clientX);
    selection.delta.y = Math.abs(selection.startPoint.y - e.clientY);

    refSelectBox.current.style.top    = Math.min(selection.startPoint.y, e.clientY)+'px';
    refSelectBox.current.style.left   = Math.min(selection.startPoint.x, e.clientX)+'px';
    refSelectBox.current.style.height = selection.delta.y+'px';
    refSelectBox.current.style.width  = selection.delta.x+'px';

    $cells.forEach((v, i)=>{
      let pos = v.getBoundingClientRect();

      if((
        Math.min(selection.startPoint.x, e.clientX) < pos.x
        &&
        Math.min(selection.startPoint.y, e.clientY) < pos.y
      ) && (
        Math.max(selection.startPoint.x, e.clientX) > pos.x+pos.width
        &&
        Math.max(selection.startPoint.y, e.clientY) > pos.y+pos.width
      )){
        v.classList.add(stylesCell['m-active']);
      } else {
        v.classList.remove(stylesCell['m-active']);
      }
    });
  }


  // | Handler - Mouse Up
  // |----------
  const handleMouseUp = (e)=>{
    console.log('--| mouse up');

    isDrag = false

    const $cellsActive = document.querySelectorAll('.'+stylesCell['m-active']);

    $cellsActive.forEach((el, i)=>{
      el.dispatchEvent(new Event('select'));
    });

    refSelectBox.current.style.top    = 'unset';
    refSelectBox.current.style.left   = 'unset';
    refSelectBox.current.style.height = 'unset';
    refSelectBox.current.style.width  = 'unset';
    selection.delta.x = 0;
    selection.delta.y = 0;
  }


  // | Handler - Mouse Leave
  // |----------
  const handlerMouseLeave = (e)=>{
    let $container = refSelectBox.current.parentNode;

    console.log('--| mouse leave');

    if(!(e.target===$container)) return;

    isDrag = false

    refSelectBox.current.style.top    = 'unset';
    refSelectBox.current.style.left   = 'unset';
    refSelectBox.current.style.height = 'unset';
    refSelectBox.current.style.width  = 'unset';
    selection.delta.x = 0;
    selection.delta.y = 0;
  }


  // | Render
  // |----------
  return (
    <div
      ref={refSelectBox}
      className={styles.select}
    >
    </div>
  );
}
