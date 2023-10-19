import './App.css';
import { useState } from "react";

function App() {
  const[todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };

    // const newToDoList = [...todoList, newTask];
    // setTodoList(newToDoList); ---this 2 lines can be like next line

    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    // const newToDoList = todoList.filter((task) => {
      // if (task === taskName) {
      //   return false;
      // } else {
      //   return true;
      // } --- this lines can be write like below...

      // return task.id !== id; 
      // return if the task is not equal to the task name---how you read the code from up

      // all this can be write like ...

      
    // });
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <div className='task'> 
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}> X </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
