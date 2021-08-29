import React, {
  useState
} from 'react';
import ReactDOM  from 'react-dom';
import styles    from './app.css';
import Grid      from './components/Grid/Grid';
import Select    from './components/Select/Select';
import {
  RecoilRoot
} from 'recoil';

const App = ()=>{
  // |--- Log
  // console.log('--| render');


  // | Render
  // |----------
  return (
    <div
      className={styles.container}
    >
      <RecoilRoot>
        <Select/>
        <Grid></Grid>
      </RecoilRoot>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
