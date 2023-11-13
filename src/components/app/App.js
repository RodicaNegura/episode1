import '../../App.css';
import { useState } from "react";
import { AppAddTaskButtonStyle, AppAddTaskInputStyle, AppAddTaskStyle, AppStyleList, MainAppStyle } from "../app.style"


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
      completed: false,
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

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <MainAppStyle>
      <AppAddTaskStyle>
        <AppAddTaskInputStyle onChange={handleChange}/>
        <AppAddTaskButtonStyle onClick={addTask}> Add Task</AppAddTaskButtonStyle>
      </AppAddTaskStyle>
      <AppStyleList>
        {
          todoList.map((task) => {
            return (
              <div className='task' style={{ backgroundColor: task.completed ? "green" : "white"}}>
                <button>dawda</button>
                <button onClick={() => {completeTask(task.id)} }>Verde</button>
                <button onClick={() => {deleteTask(task.id)}}>Sterge</button>
              </div>
            )
          })
        }
        
      </AppStyleList>
    </MainAppStyle>
  );
};

export default App;
