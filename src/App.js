import {useRef, useState  } from "react";
import Component from "./components/Component";
import './App.css';


function App() {
  const inputRef = useRef()
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <h1>Focus on input field</h1>
      <input ref={inputRef} type="text"/>
      <input type="text"/>
      <input type="text"/>
      <button onClick={()=>{
        inputRef.current.focus()
      }} >focus</button>
      <p></p>
      <button onClick={() => setShow(!show)} >Toggle Components</button>
      <h1>Unmount Component</h1>
      { show && <Component /> }
    </div>
  );
}

export default App;
