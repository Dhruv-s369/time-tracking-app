import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import AllEntries from './components/AllEntries';

function App() {
  const [tasks, setTasks] = useState([]);
  const [dailyTasks, setDailyTasks] = useState({});

  useEffect(() => {
    const allTasks = JSON.parse(localStorage.getItem('dailyTasks'));
    if (allTasks) {
      setDailyTasks(allTasks);
    }
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const recordDailyTask = (date, projectName, totalHours) => {
    setDailyTasks((prevTasks) => ({
      ...prevTasks,
      [date]: { projectName, totalHours },
    }));
  };

  useEffect(() => {
    localStorage.setItem('dailyTasks', JSON.stringify(dailyTasks));
  }, [dailyTasks]);

  return (
    <div>
      <h1>Time Tracking App</h1>
      <TaskForm addTask={addTask} recordDailyTask={recordDailyTask} />
      <AllEntries dailyTasks={dailyTasks} />
    </div>
  );
}

export default App;
