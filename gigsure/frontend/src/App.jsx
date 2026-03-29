import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store/store';

// Pages
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Policy from './pages/Policy';
import Claims from './pages/Claims';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return children;
};

// Responsive Layout with Bottom Navigation
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              GigSure
            </h1>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xs md:text-sm font-bold text-white">GS</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8 pb-24 md:pb-8">
        {children}
      </main>

      {/* Bottom Navigation - Responsive */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50 z-50 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center py-2">
            <a href="/dashboard" className="flex flex-col items-center py-2 px-4 rounded-lg transition-all hover:bg-gray-800">
              <span className="text-xl mb-1">📊</span>
              <span className="text-xs font-medium text-blue-400">Home</span>
            </a>
            <a href="/policy" className="flex flex-col items-center py-2 px-4 rounded-lg transition-all hover:bg-gray-800">
              <span className="text-xl mb-1">🛡️</span>
              <span className="text-xs font-medium text-emerald-400">Shield</span>
            </a>
            <a href="/claims" className="flex flex-col items-center py-2 px-4 rounded-lg transition-all hover:bg-gray-800">
              <span className="text-xl mb-1">💰</span>
              <span className="text-xs font-medium text-orange-400">Claims</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar Navigation */}
      <div className="hidden md:block fixed left-0 top-20 h-screen w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-700/50">
        <div className="p-6 space-y-4">
          <a href="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all group">
            <span className="text-2xl">📊</span>
            <span className="text-gray-300 group-hover:text-blue-400">Dashboard</span>
          </a>
          <a href="/policy" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all group">
            <span className="text-2xl">🛡️</span>
            <span className="text-gray-300 group-hover:text-emerald-400">Policy</span>
          </a>
          <a href="/claims" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all group">
            <span className="text-2xl">💰</span>
            <span className="text-gray-300 group-hover:text-orange-400">Claims</span>
          </a>
        </div>
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