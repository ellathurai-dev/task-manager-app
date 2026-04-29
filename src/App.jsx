import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

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

  const completeTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onComplete={completeTask}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default App
