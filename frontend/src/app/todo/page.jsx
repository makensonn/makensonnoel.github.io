'use clint'
import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-4">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div className="flex mb-2">
          <input
            type="text"
            className="border p-2 flex-grow mr-2"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="px-4 py-2 rounded"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <span>{task}</span>
              <button
                className="text-red-500"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
