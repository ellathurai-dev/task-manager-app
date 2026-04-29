import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ tasks, onComplete, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty-msg">No tasks yet. Add one above!</p>
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TaskList
