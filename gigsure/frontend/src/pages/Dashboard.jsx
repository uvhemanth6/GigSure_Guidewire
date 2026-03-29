import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:5000/api';

const Dashboard = () => {
  const user = useStore((state) => state.user);
  const token = useStore((state) => state.token);
  const logout = useStore((state) => state.logout);
  const navigate = useNavigate();

  const [stats, setStats] = useState({ disruption_days: 0, payouts_received: 0, active_policy: null });
  const [triggering, setTriggering] = useState(false);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/claims/stats`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(res.data);
    } catch (e) {
      if (e.response && e.response.status === 401) {
        logout();
        navigate('/');
      }
    }
  };

  const handleSimulateTrigger = async () => {
    setTriggering(true);
    try {
      await axios.post(`${API_BASE_URL}/triggers/simulate`, {
        triggerType: 'Heavy Rain > 35mm/hr',
        triggerValue: '45mm/hr detected by OPW',
        zone: user.zone
      });
      alert('Event Simulated! BullMQ job is crunching data. Check Claims page soon.');
      fetchStats();
    } catch (e) {
      alert('Simulation failed.');
    }
    setTriggering(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm border border-gray-700/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-emerald-400 text-sm font-semibold mb-2">Welcome back,</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{user?.name}</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                📍 {user?.zone}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                🏙️ {user?.city}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                💰 ₹{user?.daily_earnings}/day
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-lg opacity-50"></div>
            <img 
              src={`https://ui-avatars.com/api/?name=${user?.name}&background=10b981&color=fff&rounded=true&size=80`} 
              alt="Avatar" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-emerald-500 shadow-xl relative z-10" 
            />
          </div>
        </div>
      </div>

      {/* Active Policy Status */}
      {stats.active_policy ? (
        <div className="bg-gradient-to-br from-emerald-900/30 to-gray-900/50 rounded-2xl p-6 md:p-8 mb-8 border border-emerald-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0">
            <div className="bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg">
              ACTIVE
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-3">
                <span>🛡️</span> {stats.active_policy.plan} Protection
              </h3>
              <p className="text-gray-300">Your gig income is fully protected against unexpected disruptions</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center min-w-[150px]">
              <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Weekly Premium</p>
              <p className="text-2xl font-bold text-white mt-1">₹{Number(stats.active_policy.weekly_premium).toFixed(2)}</p>
              <p className="text-xs text-gray-400 mt-1">
                Renews {new Date(stats.active_policy.coverage_end).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-red-900/20 to-gray-900/50 rounded-2xl p-6 md:p-8 mb-8 border border-red-500/30 text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">You're Uninsured</h3>
          <p className="text-gray-400 mb-6">Protect your income from weather disruptions, strikes, and unexpected events</p>
          <button 
            onClick={() => navigate('/policy')} 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:scale-105">
            <span>Get Covered Now</span>
            <span>→</span>
          </button>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-400 text-sm uppercase tracking-wider">Total Payouts</p>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-3xl font-bold text-emerald-400">₹{stats.payouts_received}</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-400 text-sm uppercase tracking-wider">Disruption Days</p>
            <span className="text-2xl">📅</span>
          </div>
          <p className="text-3xl font-bold text-orange-400">{stats.disruption_days}</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-400 text-sm uppercase tracking-wider">Risk Score</p>
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-3xl font-bold text-blue-400">78<span className="text-lg">/100</span></p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-400 text-sm uppercase tracking-wider">Coverage Days</p>
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-3xl font-bold text-purple-400">30<span className="text-lg">/365</span></p>
        </div>
      </div>

      {/* Simulation Card */}
      <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 md:p-8 border border-red-500/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">🚀 Simulation Engine</h3>
            <p className="text-sm text-gray-400">Test how the system responds to real-time disruptions</p>
          </div>
          <button 
            onClick={handleSimulateTrigger}
            disabled={triggering}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              triggering 
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105'
            }`}>
            <span>⛈️</span> 
            {triggering ? 'Simulating...' : 'Simulate Heavy Rain Event'}
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center md:text-left">
          This is a demo feature. Simulating an event will automatically trigger the claim assessment pipeline.
        </p>
      </div>

      {/* Logout Button */}
      <div className="mt-8 text-center">
        <button 
          onClick={() => { logout(); navigate('/'); }} 
          className="text-sm text-gray-500 hover:text-gray-400 transition-colors underline underline-offset-4">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;