import React, {
  useState
} from 'react';

export default ()=>{
  const [drag, setDrag]           = useState();
  const [selection, setSelection] = useState({
    startPoint: '',
    endPoint:   '',
    height:     '',
    width:      '',
  });

  function dragStart(){
    console.log('--| drag start');

    setDrag(true);
  }

  function dragMove(){
    if(!drag) return;

    console.log('--| drag move');
  }

  function dragEnd(){
    console.log('--| drag end');

    setDrag(false);
  }

  return [selection, setSelection, dragStart, dragMove, dragEnd];
}
