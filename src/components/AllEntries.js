import React from 'react';

function AllEntries({ dailyTasks }) {
  return (
    <div>
      <h2>Daily Time Entries</h2>
      {Object.keys(dailyTasks).map((date) => (
        <div key={date}>
          <p>Date: {date}</p>
          <p>Project: {dailyTasks[date].projectName}</p>
          <p>Total Hours: {dailyTasks[date].totalHours}</p>
        </div>
      ))}
    </div>
  );
}

export default AllEntries;
