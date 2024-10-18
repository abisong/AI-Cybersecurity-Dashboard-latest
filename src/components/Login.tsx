import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the login data to your backend
    console.log('Login submitted:', formData);
    onLogin();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <button onClick={onRegister} className="text-blue-500 hover:text-blue-600">
            Register here
          </button>
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">AI Cybersecurity Dashboard</h2>
        <p className="text-gray-600 mb-4">
          Welcome to the AI Cybersecurity Dashboard, a comprehensive tool for monitoring and managing your organization's cybersecurity posture.
        </p>
        <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Real-time threat detection and prevention</li>
          <li>User behavior analytics</li>
          <li>AI-driven security measures</li>
          <li>Network and application security monitoring</li>
          <li>Vulnerability management</li>
          <li>Advanced analytics and reporting</li>
        </ul>
        <p className="text-gray-600">
          To get started, simply log in with your credentials or register for a new account. Once logged in, you'll have access to a wealth of cybersecurity insights and tools to protect your digital assets.
        </p>
      </div>
    </div>
  );
};

export default Login;