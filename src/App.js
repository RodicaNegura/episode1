import './App.css';
import { User } from './User';

function App() {
  const users = [
    { name: "Diego", age: 21},
    { name: "Karla", age: 41},
    { name: "Jake", age: 31}
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age}/>;
      })}
    </div>
  );
};
export default App;
