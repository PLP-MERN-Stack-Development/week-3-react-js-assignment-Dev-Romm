import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from '../components/Button.jsx';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleComplete = id =>
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  const deleteTask = id => setTasks(tasks.filter(task => task.id !== id));

  const filteredTasks = {
    all: tasks,
    active: tasks.filter(t => !t.completed),
    completed: tasks.filter(t => t.completed),
  }[filter];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input value={input} onChange={e => setInput(e.target.value)} className="border p-2 flex-1" />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <Button key={f} variant={filter === f ? 'primary' : 'secondary'} onClick={() => setFilter(f)}>
            {f}
          </Button>
        ))}
      </div>
      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 p-2 rounded dark:bg-gray-700">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => toggleComplete(task.id)}>
                ✓
              </Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                🗑
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;