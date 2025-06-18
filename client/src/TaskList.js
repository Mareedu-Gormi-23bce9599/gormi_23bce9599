// src/TaskList.js

import React, { useState, useEffect } from 'react';
import Task from './Task';
import CreateTask from './CreateTask'; // Import the CreateTask component
import { getTasks, deleteTask, updateTask } from './api';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(token);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [token]);

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(token, taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdate = async (taskId) => {
    const updatedTaskData = { name: 'Updated Task', description: 'Updated description' };
    try {
      await updateTask(token, taskId, updatedTaskData);
      setTasks(tasks.map((task) =>
        task._id === taskId ? { ...task, ...updatedTaskData } : task
      ));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <CreateTask token={token} setTasks={setTasks} />  {/* Add CreateTask component here */}
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task 
          key={task._id}
          task={task}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate} 
        />
      ))}
    </div>
  );
};

export default TaskList;
