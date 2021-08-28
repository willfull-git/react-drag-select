import React, {
  useState
} from 'react';
import styles from './grid.css';
import Cell from '../Cell/Cell';

const modelSelectElements = [];

for(let i=350; i>0; i--){
  const el = {
    selected: false,
  }

  modelSelectElements.push(el);
}

export default ()=>{
  const [selectElementsData, setSelectElementsData] = useState(modelSelectElements);

  // |--- generate children 
  const children = 
    selectElementsData.map((el, i) =>
      <Cell key={i} selected={el.selected}/>
    )

  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}
