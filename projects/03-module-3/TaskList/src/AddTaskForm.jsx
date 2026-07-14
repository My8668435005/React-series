import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) { // Receives onAddTask function as prop
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim()) { // Only add if text is not empty
      onAddTask(taskText);
      setTaskText(''); // Clear the input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
      <input 
        type='text' 
        placeholder='Add a new task...' 
        value={taskText} 
        onChange={handleInputChange} 
        style={{ flexGrow: 1, padding: '10px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '4px' }} 
      />
      <button type='submit' style={{ padding: '10px 15px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;