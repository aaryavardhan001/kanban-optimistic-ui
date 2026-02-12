import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { apiRequest } from '../services/mockApi';

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const updateLocalStorage = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleAction = async (actionType, optimisticData, originalData) => {
    // 1. Snapshot original state [cite: 37]
    const backup = [...tasks];

    // 2. Update UI instantly (Optimistic) [cite: 31]
    updateLocalStorage(optimisticData);

    try {
      await apiRequest(optimisticData);
      toast.success(`${actionType} successful!`);
    } catch (err) {
      // 3. Rollback on failure [cite: 37]
      updateLocalStorage(backup);
      toast.error(`Failed to ${actionType.toLowerCase()}. Reverting... [cite: 36]`);
    }
  };

  return (
    <BoardContext.Provider value={{ tasks, handleAction }}>
      {children}
    </BoardContext.Provider>
  );
};

// This is the core "Optimistic" logic
const handleAction = async (actionName, newTasks) => {
  const previousTasks = [...tasks]; // 1. Take a snapshot
  setTasks(newTasks);              // 2. Update UI instantly

  try {
    await apiRequest();            // 3. Try to "sync" with server
  } catch (err) {
    setTasks(previousTasks);       // 4. ROLLBACK if it fails!
    toast.error("Sync Failed - Reverting changes");
  }
};

export const useBoard = () => useContext(BoardContext);