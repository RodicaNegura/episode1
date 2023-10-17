import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={75000} position="Senior SDE" company="Google"/>
      <br></br>
      <Job salary={85000} position="Junior SDE" company="Netflix"/>
      <br></br>
      <Job salary={95000} position="Project Manger" company="Amazon"/>
      <br></br>
      <br></br>
      <AboutMe name="Rodica" nationality="romanian" age={32}/>
      <br></br>
      <AboutMe name="Mona" nationality="english" age={38}/>
      <br></br>
      <AboutMe name="dora" nationality="bulgarian" age={22}/>
    </div>
  );
};

const AboutMe = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.nationality}</h1>
      <h1>{props.age}</h1>
    </div>
  );
};

const Job  = (props) => {
  return (
    <div>
      <h1>{props.company}</h1>
      <h2>{props.position}</h2>
      <h3>{props.salary}</h3>
    </div>
  );
};

export default App;
