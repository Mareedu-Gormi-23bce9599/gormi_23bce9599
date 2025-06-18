// src/Task.js

import React from 'react';

const Task = ({ task, handleDelete, handleUpdate }) => {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => handleUpdate(task._id)}>Update</button>
      <button onClick={() => handleDelete(task._id)}>Delete</button>
    </div>
  );
};

export default Task;
