import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);

  const icreaseAge = () => {
    setAge(age - 1);
  };

  return (
    <div className="App">
      {age}
      <button onClick={icreaseAge}> Increase Age</button>
    </div>
  );
};

export default App;
