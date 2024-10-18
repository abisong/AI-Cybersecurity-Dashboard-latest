import React, { useState } from 'react';
import { Shield, Users, Bot, Network, Lock, Mail, FileCode, Search, Target, BarChart2, Menu } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const menuItems = [
    { id: 'overview', icon: Shield, label: 'Overview' },
    { id: 'threats', icon: Shield, label: 'Threat Detection' },
    { id: 'user-behavior', icon: Users, label: 'User Behavior' },
    { id: 'ai-agents', icon: Bot, label: 'AI Agents' },
    { id: 'network', icon: Network, label: 'Network Security' },
    { id: 'data-protection', icon: Lock, label: 'Data Protection' },
    { id: 'email-security', icon: Mail, label: 'Email Security' },
    { id: 'application-security', icon: FileCode, label: 'Application Security' },
    { id: 'vulnerability', icon: Search, label: 'Vulnerability Management' },
    { id: 'red-blue-team', icon: Target, label: 'Red & Blue Team' },
    { id: 'advanced-analytics', icon: BarChart2, label: 'Advanced Analytics' },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'login':
        return <Login onLogin={handleLogin} onRegister={() => setCurrentPage('register')} />;
      case 'register':
        return <Register onRegister={handleLogin} onLogin={() => setCurrentPage('login')} />;
      case 'dashboard':
        return (
          <div className="flex flex-col h-screen bg-gray-100">
            <Header toggleSidebar={toggleSidebar} onLogout={handleLogout} />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar
                menuItems={menuItems}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
                <Dashboard activeTab={activeTab} />
              </main>
            </div>
          </div>
        );
      default:
        return <Login onLogin={handleLogin} onRegister={() => setCurrentPage('register')} />;
    }
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
};

export default App;