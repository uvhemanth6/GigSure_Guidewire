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
    <div className="p-4 fade-in space-y-6">
      
      {/* Profile Bar */}
      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-xl shadow">
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">Welcome back</p>
          <h2 className="text-xl font-bold text-white">{user?.name}</h2>
          <span className="inline-block px-2 py-1 mt-1 text-[10px] font-semibold bg-gray-700 text-gray-300 rounded">
            📍 {user?.zone}, {user?.city}
          </span>
        </div>
        <img 
          src={`https://ui-avatars.com/api/?name=${user?.name}&background=10b981&color=fff&rounded=true`} 
          alt="Avatar" 
          className="w-12 h-12 rounded-full border-2 border-emerald-500 shadow-lg" 
        />
      </div>

      {/* Active Policy Status */}
      {stats.active_policy ? (
         <div className="bg-gradient-to-br from-emerald-900 to-gray-800 p-5 rounded-xl border border-emerald-800 relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-emerald-500 text-white text-xs font-bold px-6 py-2 rotate-45">
              ACTIVE
            </div>
            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
              <span className="mr-2">🛡️</span> {stats.active_policy.plan} Coverage
            </h3>
            <p className="text-sm text-gray-300">Your gig income is protected against disruptions.</p>
            <div className="mt-4 flex justify-between items-end border-t border-emerald-800/50 pt-3">
              <div>
                <p className="text-[10px] text-emerald-500 uppercase tracking-widest">Weekly Auth</p>
                <p className="text-xl font-mono text-white">₹{Number(stats.active_policy.weekly_premium).toFixed(2)}</p>
              </div>
              <p className="text-xs text-gray-400">
                Renews {new Date(stats.active_policy.coverage_end).toLocaleDateString()}
              </p>
            </div>
         </div>
      ) : (
         <div className="bg-gray-800 p-6 rounded-xl border border-red-900/50 shadow flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-red-500/10 text-red-400 text-2xl rounded-full flex items-center justify-center mb-3">
              ⚠️
            </div>
            <h3 className="text-white font-bold mb-1">Uninsured</h3>
            <p className="text-xs text-gray-400 mb-4">You are vulnerable to income loss from bad weather or strikes.</p>
            <button 
              onClick={() => navigate('/policy')} 
              className="bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg shadow-emerald-500/20 text-sm">
              Get Covered Now
            </button>
         </div>
      )}

      {/* Summary Stats */}
      <h3 className="text-gray-400 text-sm font-semibold mt-6 mb-2">Performance Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
           <p className="text-[10px] text-gray-400 uppercase">Payouts Received</p>
           <p className="text-2xl font-bold text-emerald-400 mt-1">₹{stats.payouts_received}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
           <p className="text-[10px] text-gray-400 uppercase">Disruption Days</p>
           <p className="text-2xl font-bold text-orange-400 mt-1">{stats.disruption_days} Days</p>
        </div>
      </div>

      {/* Admin Demo trigger */}
      <div className="mt-8 border-t border-gray-800 pt-6">
        <div className="bg-red-900/20 border border-red-900/50 rounded-lg p-4">
          <p className="text-xs text-red-400 mb-3 pb-2 border-b border-red-900/50 font-mono">
            [HACKATHON DEMO] Simulation Engine
          </p>
          <button 
            onClick={handleSimulateTrigger}
            disabled={triggering}
            className={`w-full py-3 rounded font-bold text-sm text-center flex items-center justify-center
              ${triggering ? 'bg-gray-700 text-gray-400' : 'bg-red-600 hover:bg-red-700 text-white shadow-lg'}`}>
            <span className="mr-2">⛈️</span> {triggering ? 'Simulating Event...' : 'Simulate Heavy Rain Event'}
          </button>
        </div>
      </div>

      <button onClick={() => { logout(); navigate('/'); }} className="w-full mt-4 text-xs text-gray-500 underline text-center">
        Log Out
      </button>

    </div>
  );
};

export default Dashboard;
