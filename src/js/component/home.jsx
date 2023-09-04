import React, { useState } from "react";

const Home = () => {
  const [task, setTask] = useState([]);   							// to save new task
  const [newTask, setNewTask] = useState(""); 						// saving all tasks

  const listNewTask = (event) => {
    setNewTask(event.target.value); 								// to update state of new task
	console.log(listNewTask)       									// event.target.value gets active value of input field and saves input in list 
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);  								// to make sure there is always an input
      setNewTask("");                  								// adding task to list
	  console.log(addTask)
    }
  };

  const deleteTask = (directory) => {
    const updatedTasks = task.filter((_, i) => i !== directory);
    setTask(updatedTasks);       									// delete option
	console.log(deleteTask)
  };

  return (
    <div className="container">
    <div className="text-center w-50 mx-auto mt-5">
	<h1 className="h1 text-center text-secondary p-4"> <strong><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-card-checklist me-3 mb-2" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg>Sophia's Task List</strong>
		</h1>
	   <input
        type="text"
        value={newTask}
        onChange={listNewTask}
        onKeyDown={(event) => event.key === "Enter" && addTask()}  					//  add.task function will be called by pressing "enter"
        placeholder="Add a new Task to your list!"
        className="form-control"
      />
      <ul className="list-group">
        {task.length === 0 ? (
         
<div className="border border-secondary bg-secondary text-light w-50 m-3 p-2 mb-4 mx-auto">
	<p>Don't be a lazy ass!</p> 
	<p>Add tasks to your to-do list!</p>
</div>
        ) : (
          task.map((task, directory) => (
            <li className="list-group-item list-group-item-secondary pt-2 mt-2" key={directory}> <strong> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right me-3" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg></strong> 
              { task }
        <button className="btn btn-danger float-end" onClick={() => deleteTask(directory)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
  			<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
			</svg>
		</button>
            </li>
          ))
        )}
      </ul>
     
    </div>
   
    </div>
  );
};

export default Home;