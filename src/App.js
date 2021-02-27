import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={()=>dispatch(increment())} >+</button>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <p> { login ? <h1>Logined</h1> : <h1>Not yet Logined</h1> } </p>
    </div>
  );
}

export default App;


