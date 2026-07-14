import React, { useState } from 'react';
import TaskItem from './TaskItem'; 
import AddTaskForm from './AddTaskForm'; 

function TaskListContainer() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Build a component', completed: false },
    { id: 3, text: 'Understand state and props', completed: false },
  ]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(), // unique ID
      text: taskText, // ✅ use the input text
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div style={{ border: '1px solid #8a6d6d', margin: '10px', padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>My Tasks</h2>
      
      <AddTaskForm onAddTask={addTask} /> 

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggleComplete={toggleTaskCompletion} 
          /> 
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks yet! Add one above.</p>}
    </div>
  );
}

export default TaskListContainer;
