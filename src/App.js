import './App.css';

function App() {
  const age = 16;
  const isGreen = false;

  return (
    <div className="App">
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>This Has Color!</h1>

      {isGreen && <button>This Is A Button!</button>}
    </div>
  );
};

export default App;
