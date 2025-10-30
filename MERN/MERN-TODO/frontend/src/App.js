import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks")
      .then(res => setTasks(res.data));
  }, []);

  const addTask = () => {
    if(!title) return;
    axios.post("http://localhost:5000/api/tasks", { title })
      .then(res => setTasks([...tasks, res.data]));
    setTitle("");
  };

  const toggleComplete = (id) => {
    axios.put(`http://localhost:5000/api/tasks/${id}`)
      .then(res => setTasks(tasks.map(t => t._id === id ? res.data : t)));
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter(t => t._id !== id)));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>To-Do List</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Add Task"/>
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }} onClick={() => toggleComplete(task._id)}>
              {task.title}
            </span>
            <button onClick={() => deleteTask(task._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
