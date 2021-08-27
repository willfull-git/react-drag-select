import React, {
  useState
} from 'react';
import ReactDOM  from 'react-dom';
import styles    from './app.css';
import Grid      from './components/Grid/Grid';
import Select    from './components/Select/Select';

const App = ()=>{
  // |--- Log
  // console.log('--| render');


  // | Render
  // |----------
  return (
    <div
      className={styles.container}
    >
      <Select/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
