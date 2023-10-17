import './App.css';

function App() {
  const age = 16;

  return (
    <div className="App">
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
    </div>
  );
};

export default App;
