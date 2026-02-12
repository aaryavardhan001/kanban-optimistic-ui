import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const login = () => {
    if (name.trim()) {
      localStorage.setItem('username', name);
      navigate('/board'); // Redirect to board [cite: 17]
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Regrip Kanban</h1>
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <input 
          className="border p-2 w-64 mb-4 block rounded"
          placeholder="Enter Username"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={login} className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </div>
    </div>
  );
}