import React, { useState } from 'react'
import TaskInput from './components/TaskInput'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <p>Total Tasks: {tasks.length}</p>
    </div>
  )
}

export default App
