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

// Simple Layout with Bottom Nav for MVP
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen pb-16 fade-in max-w-md mx-auto relative border-x border-gray-800 shadow-2xl">
      <header className="p-4 border-b border-gray-800 bg-gray-900 sticky top-0 z-10 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">GigSure</h1>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <span className="text-xs text-gray-400">GS</span>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* Mock Bottom Navigation (visible only when logged in) */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gray-900 border-t border-gray-800 grid grid-cols-3 z-10">
        <a href="/dashboard" className="p-3 text-center text-xs text-blue-400 flex flex-col items-center">
          <span className="block text-lg mb-1">📊</span> Home
        </a>
        <a href="/policy" className="p-3 text-center text-xs text-emerald-400 flex flex-col items-center">
          <span className="block text-lg mb-1">🛡️</span> Shield
        </a>
        <a href="/claims" className="p-3 text-center text-xs text-orange-400 flex flex-col items-center">
          <span className="block text-lg mb-1">💰</span> Claims
        </a>
      </nav>
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
