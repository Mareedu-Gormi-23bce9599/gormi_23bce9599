// src/CreateTask.js

import React, { useState } from 'react';
import { createTask } from './api';

const CreateTask = ({ token, setTasks }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const newTask = { name, description };
      const response = await createTask(token, newTask);

      // Add the new task to the task list
      setTasks((prevTasks) => [...prevTasks, response.data]);

      // Reset the form
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
