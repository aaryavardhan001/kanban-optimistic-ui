import { useBoard } from '../context/BoardContext';

export default function BoardPage() {
  const { tasks, handleAction } = useBoard();
  const columns = ['To Do', 'In Progress', 'Done'];

  const moveTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map(t => t.id === taskId ? {...t, status: newStatus} : t);
    handleAction('Move', updatedTasks);
  };

  const addTask = () => {
    const title = prompt("Task Name:");
    if (!title) return;
    const newTask = { id: Date.now(), title, status: 'To Do' };
    handleAction('Add', [...tasks, newTask]);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <button onClick={addTask} className="mb-6 bg-green-600 text-white px-4 py-2 rounded">Add New Task [cite: 22]</button>
      <div className="flex gap-6">
        {columns.map(col => (
          <div key={col} className="bg-gray-200 p-4 w-1/3 rounded-lg min-h-[300px]">
            <h2 className="font-bold mb-4">{col}</h2>
            {tasks.filter(t => t.status === col).map(task => (
              <div key={task.id} className="bg-white p-3 mb-2 rounded shadow flex justify-between">
                <span>{task.title}</span>
                <div className="flex gap-1">
                   {col !== 'Done' && <button onClick={() => moveTask(task.id, 'Done')} className="text-xs bg-blue-100 px-1">Done</button>}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}