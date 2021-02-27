import './App.css';
import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';

//action
const increment = (value) => {
  return { type: 'INCREMENT', payload:value }
}
const decrement = () => {
  return { type: 'DECREMENT' }
}

//reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
      break;
    case 'DECREMENT':
      return state - 1
      break;

    default:
      return state;
      break;
  }
}

//create a store
let store = createStore(counterReducer)

//display
store.subscribe(()=>{
  console.log(store.getState());
})
//Dispatch the action
store.dispatch(increment(5))

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;


