import React, { useState } from 'react';

function TaskForm({ addTask, recordDailyTask }) {
  const [taskName, setTaskName] = useState('');
  const [timeSpent, setTimeSpent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '' && timeSpent > 0) {
      const task = { taskName, timeSpent: parseFloat(timeSpent) };
      addTask(task);
      recordDailyTask(new Date().toISOString().split('T')[0], taskName, parseFloat(timeSpent));
      setTaskName('');
      setTimeSpent('');
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Time Spent (hours)"
          value={timeSpent}
          onChange={(e) => setTimeSpent(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
