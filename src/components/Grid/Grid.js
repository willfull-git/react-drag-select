import React, {
  useState
} from 'react';
import styles from './grid.css';
import Cell from '../Cell/Cell';
import {
  atom
} from 'recoil';

const modelSelectElements = [];

// |--- Generate ID
const generateId = (()=>{
  let id = 0;

  return ()=>id++;
})();

// |--- Build grid state model
for(let i=350; i>0; i--){
  const recoilState = atom({
    key: generateId(),
    default: {
      selected: false
    }
  });

  const el = {
    recoilState: recoilState
  }

  modelSelectElements.push(el);
}

// |---------------
// | COMPONENT
// |--------------- 
export default ()=>{
  const [selectElementsData, setSelectElementsData] = useState(modelSelectElements);

  // |--- generate children 
  const children = 
    selectElementsData.map((el, i) =>
      <Cell key={i} recoilState={el.recoilState}/>
    )

  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}
