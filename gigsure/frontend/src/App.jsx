import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useStore } from './store/store';
import { Menu, X, LayoutDashboard, Shield, FileText, LogOut, User, ChevronDown } from 'lucide-react';

import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Policy from './pages/Policy';
import Claims from './pages/Claims';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return children;
};

// User Profile Dropdown Component
const UserProfile = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 focus:outline-none group px-3 py-2 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition-all">
          <span className="text-white font-bold text-sm">
            {user.name?.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="hidden md:block text-left">
          <p className="text-white text-sm font-semibold">{user.name}</p>
          <p className="text-gray-400 text-xs">{user.zone}, {user.city}</p>
        </div>
        <ChevronDown size={16} className="text-gray-400 hidden md:block group-hover:text-white transition-colors" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 z-50 overflow-hidden animate-fade-in">
            <div className="p-5 border-b border-gray-700 bg-gradient-to-r from-blue-500/10 to-emerald-500/10">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">
                    {user.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg">{user.name}</h4>
                  <p className="text-gray-400 text-sm">{user.mobile}</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-400 text-sm">Delivery Zone</span>
                <span className="text-white font-medium">{user.zone}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-gray-700">
                <span className="text-gray-400 text-sm">City</span>
                <span className="text-white font-medium">{user.city}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-gray-700">
                <span className="text-gray-400 text-sm">Platform</span>
                <span className="text-white font-medium">{user.platform}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-gray-700">
                <span className="text-gray-400 text-sm">Daily Earnings</span>
                <span className="text-emerald-400 font-bold">₹{user.daily_earnings}</span>
              </div>
            </div>
            
            <button
              onClick={() => { onLogout(); setIsOpen(false); }}
              className="w-full p-4 text-left text-red-400 hover:bg-red-500/10 transition-all duration-200 flex items-center gap-3 border-t border-gray-700 font-medium"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Collapsible Sidebar Component
const Sidebar = ({ isOpen, onClose, currentPath }) => {
  const navigate = useNavigate();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-400', activeColor: 'from-blue-500/20' },
    { path: '/policy', label: 'Policy', icon: Shield, color: 'text-emerald-400', activeColor: 'from-emerald-500/20' },
    { path: '/claims', label: 'Claims', icon: FileText, color: 'text-orange-400', activeColor: 'from-orange-500/20' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 z-50
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-72' : '-translate-x-full md:translate-x-0 md:w-20'}
        overflow-hidden
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="p-6 border-b border-gray-800">
            <div className={`${!isOpen && 'md:hidden'} transition-all duration-300`}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                GigSure
              </h1>
              <p className="text-xs text-gray-500 mt-1">Income Protection</p>
            </div>
            <div className={`${isOpen ? 'hidden' : 'hidden md:block'} text-center`}>
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Shield size={24} className="text-white" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    w-full flex items-center gap-4 px-6 py-3.5 transition-all duration-200
                    ${isActive 
                      ? `bg-gradient-to-r ${item.activeColor} to-transparent border-r-2 border-${item.color.split('-')[1]}-500` 
                      : 'hover:bg-gray-800/50'
                    }
                    group
                  `}
                >
                  <Icon size={22} className={`${item.color} ${isActive ? 'scale-110' : 'group-hover:scale-105'} transition-transform`} />
                  <span className={`${!isOpen && 'md:hidden'} text-gray-300 font-medium group-hover:text-white transition-colors`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Close Button for Mobile */}
          {isOpen && (
            <button
              onClick={onClose}
              className="md:hidden p-4 border-t border-gray-800 text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <X size={18} />
              Close Menu
            </button>
          )}
        </div>
      </div>
    </>
  );
};

// Main Layout Component
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  const location = window.location.pathname;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentPath={location}
      />

      {/* Main Content */}
      <div className="md:ml-20 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group"
              >
                <Menu size={24} className="text-gray-400 group-hover:text-white transition-colors" />
              </button>
              
              <UserProfile user={user} onLogout={logout} />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="container mx-auto px-4 py-8 md:py-10">
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Onboarding />} 
        />
        
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        } />

        <Route path="/policy" element={
          <ProtectedRoute>
            <Layout>
              <Policy />
            </Layout>
          </ProtectedRoute>
        } />

        <Route path="/claims" element={
          <ProtectedRoute>
            <Layout>
              <Claims />
            </Layout>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;