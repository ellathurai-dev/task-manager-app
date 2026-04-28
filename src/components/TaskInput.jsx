import React, { useState } from 'react'

function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  const handleAdd = () => {
    if (taskText.trim() === '') return
    onAddTask(taskText.trim())
    setTaskText('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default TaskInput
