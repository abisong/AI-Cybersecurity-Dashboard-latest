import React, { useState } from 'react';
import { Bell, Settings, ToggleLeft, ToggleRight, Eye, EyeOff, Moon, Sun, Menu, LogOut, AlertTriangle } from 'lucide-react';
import Modal from './Modal';

interface HeaderProps {
  toggleSidebar: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, onLogout }) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showAlertsModal, setShowAlertsModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [dataPrivacy, setDataPrivacy] = useState(true);

  const alerts = [
    { id: 1, severity: 'Critical', message: 'Unauthorized access attempt detected from IP 192.168.1.100', time: '2 minutes ago' },
    { id: 2, severity: 'High', message: 'Unusual data exfiltration activity observed in Marketing department', time: '15 minutes ago' },
    { id: 3, severity: 'Medium', message: 'Failed login attempts exceeded threshold for user admin@example.com', time: '1 hour ago' },
    { id: 4, severity: 'Low', message: 'Software update available for Firewall System', time: '3 hours ago' },
    { id: 5, severity: 'Info', message: 'Routine security scan completed successfully', time: '5 hours ago' },
  ];

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="text-gray-600 hover:text-gray-800 mr-4 md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 truncate">AI Cybersecurity</h1>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            className="text-gray-600 hover:text-gray-800 relative"
            onClick={() => setShowAlertsModal(true)}
          >
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {alerts.length}
            </span>
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setShowSettingsModal(true)}
          >
            <Settings className="h-6 w-6" />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onLogout}
          >
            <LogOut className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      <Modal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        title="Dashboard Settings"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Dark Mode</span>
            <button
              className="p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-500" />}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Notifications</span>
            <button
              className="p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setNotifications(!notifications)}
            >
              {notifications ? <ToggleRight className="h-5 w-5 text-green-500" /> : <ToggleLeft className="h-5 w-5 text-gray-500" />}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Data Privacy Mode</span>
            <button
              className="p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setDataPrivacy(!dataPrivacy)}
            >
              {dataPrivacy ? <EyeOff className="h-5 w-5 text-blue-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
            </button>
          </div>
        </div>
      </Modal>

      {/* Alerts Modal */}
      <Modal
        isOpen={showAlertsModal}
        onClose={() => setShowAlertsModal(false)}
        title="Security Alerts"
      >
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {alerts.map((alert) => (
            <div key={alert.id} className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <span className="font-medium">{alert.severity}: </span>
                    {alert.message}
                  </p>
                  <p className="mt-2 text-xs text-yellow-500">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </header>
  );
};

export default Header;