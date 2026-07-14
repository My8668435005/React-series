// src/components/TaskItem.js

import React from 'react';

function TaskItem({ task, onToggleComplete }) { // Destructure props
const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
    textDecoration: task.completed ? 'line-through' : 'none',
    color: task.completed ? '#888' : '#333',
};

const checkboxStyle = {
    marginRight: '10px',
    cursor: 'pointer',
};

return (
    <li style={itemStyle}>
    <input 
        type='checkbox' 
        checked={task.completed} 
        onChange={() => onToggleComplete(task.id)} 
        style={checkboxStyle}
    
    />
    <span>{task.text}</span>
    </li>
);
}

export default TaskItem;