import { useState, useMemo } from 'react';
import './App.css';
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

function App() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  const incrementA = () => {
    setCountA(countA + 1)
  };
  const incrementB = () => {
    setCountB(countB + 1)
  };
//
  const memoComponentA = useMemo(() => {
    return <ComponentA count={countA} />
  },[countA])

  return (
    <div className="App">
      App js count A : {countA}
      <p>
        <button onClick={incrementA} >Increment A</button>
      </p>
      <p>
        <button onClick={incrementB} >Increment B</button>
      </p>
      {memoComponentA}
      <ComponentB count={countB} />
    </div>
  );
}

export default App;
