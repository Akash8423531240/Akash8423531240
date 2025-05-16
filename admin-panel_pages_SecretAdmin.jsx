import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewsForm from '../components/NewsForm';
import BookUploader from '../components/BookUploader';
import LiveTickerControl from '../components/LiveTickerControl';
import DashboardStats from '../components/DashboardStats';

const SecretAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/admin/login', { email, password });
      localStorage.setItem('adminToken', res.data.token);
      setIsAuthenticated(true);
      toast.success('Logged in successfully!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    toast.success('Logged out successfully!');
    navigate('/admin-super-secret-786');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Login
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Shivexa Admin</h2>
        <nav>
          <ul>
            <li className="mb-2"><a href="/admin-super-secret-786/dashboard" className="hover:text-gray-300">Dashboard</a></li>
            <li className="mb-2"><a href="/admin-super-secret-786/news" className="hover:text-gray-300">Add News</a></li>
            <li className="mb-2"><a href="/admin-super-secret-786/books" className="hover:text-gray-300">Upload Books</a></li>
            <li className="mb-2"><a href="/admin-super-secret-786/ticker" className="hover:text-gray-300">Live Ticker</a></li>
            <li className="mb-2"><button onClick={handleLogout} className="text-left hover:text-gray-300">Logout</button></li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        <Routes>
          <Route path="/dashboard" element={<DashboardStats />} />
          <Route path="/news" element={<NewsForm />} />
          <Route path="/books" element={<BookUploader />} />
          <Route path="/ticker" element={<LiveTickerControl />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SecretAdmin;