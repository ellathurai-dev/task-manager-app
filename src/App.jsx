import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

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

  const getFilteredTasks = () => {
    if (filter === 'active') return tasks.filter((task) => !task.completed)
    if (filter === 'completed') return tasks.filter((task) => task.completed)
    return tasks
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <TaskFilter filter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={getFilteredTasks()}
        onComplete={completeTask}
        onDelete={deleteTask}
      />
      <p className="task-count">
        {tasks.filter(t => !t.completed).length} task(s) remaining
      </p>
    </div>
  )
}

export default App
