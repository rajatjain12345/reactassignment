import React, { useState } from "react";
import "./Todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

function Todo() {
  document.title = "Todo List";
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [flag, setFlag] = useState(false)
  const [completed, setCompleted] = useState([])

  //In react, events are passed to event handler functions implictly(automatically)

  function handleChange(e) {
    // console.log(e)
    setInputValue(e.target.value);
  }

  // console.log(inputValue)

  function handleSubmit(e) {
    e.preventDefault();
    
    if(flag === false)
      setTasks([...tasks, inputValue]);
    else{

      // ['Learn Express', 'Learn Node']

      tasks[flag] = inputValue; // We have created a copy of state variable tasks and modified that copy. 
      setTasks(tasks)
      setFlag(false)
    }
    setInputValue("");
  }

  function handleDelete(e, index) {
    e.preventDefault();
    setTasks(
      tasks.filter((value, ind) => {
        return ind !== index;
      })
    );
  }

  function handleEdit(e, index){
    e.preventDefault()
    setInputValue(tasks[index])
    setFlag(index)
  }

  function handleCompleted(e, index){
    e.preventDefault()
    setCompleted([...completed, index])
  }

  // console.log(tasks);

  return (
    <>
      <h1>TO DO LIST</h1>
      <div className="todo">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your task"
            value={inputValue}
            //onChange={handleChange}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>

        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={index} className={(completed.includes(index) ? "completed": "")}>
                <span>{task} </span>
                <p>
                  <a href="" onClick={(e) => handleDelete(e, index)}>
                    <DeleteIcon />
                  </a>
                  <a href="" onClick={(e) => handleEdit(e, index)}>
                    <EditIcon />
                  </a>
                  <a href="" onClick={(e) => handleCompleted(e, index)}>
                    <CheckIcon />
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
