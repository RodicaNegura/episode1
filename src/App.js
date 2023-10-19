import './App.css';
import { useState } from 'react';

function App() {
  const [ count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1); 
  };

  const decreseCount = () => {
    setCount(count - 1); 
  };

  const setToZero = () => {
    setCount (0);
  };
 
  return (
    <div className="App">
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreseCount}>Decrease</button>
      <button onClick={setToZero}>Set To Zero</button>

      {count}
    </div>
  );
};

export default App;
