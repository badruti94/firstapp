import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, auth } from './action';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  const authText = login? 'logout' : 'login'
  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={()=>dispatch(increment())} >+</button>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <p> { login ? <h1>Logined</h1> : <h1>Not yet Logined</h1> } </p>
      <button onClick={()=>dispatch(auth())} > {authText} </button>
    </div>
  );
}

export default App;


