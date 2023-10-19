import './App.css';
import { useState } from 'react';

function App() {
  const [ textColor, setTextColor] = useState("green");

 
  return (
    <div className="App">
      <button 
        onClick={() => {
          setTextColor(textColor === "green" ? "red" : "green");
        }}
      >
        Show/Hide
      </button>
      <h1 style={{color: textColor}}> Hi My Name is Rodica!</h1>
    </div>
  );
};

export default App;
