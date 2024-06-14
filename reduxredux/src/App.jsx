import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import {selectCount, selectState, increase, decrease} from './slices/counterSlice';
import { useDispatch } from 'react-redux';


function App() {
  const [inputValue, setInputValue] = useState(1);
  const count = useSelector(selectCount);
  console.log(count);

  //dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux</h1>
      <div>
        <h2>Counter: {count}</h2>
        <div>
          <button onClick={() => dispatch(increase(inputValue))}>Increase</button>
          <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} min="1"  />
          <button onClick={() => dispatch(decrease(inputValue))}>Decrease</button>
        </div>
      </div>
    </>
  )
}

export default App
