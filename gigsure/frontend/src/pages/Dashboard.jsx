import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, Calendar, Shield, AlertTriangle, Zap, ChevronRight, 
  Activity, Award, DollarSign, Clock, MapPin, Briefcase, Wallet, 
  TrendingDown, Sun, CloudRain, Wind
} from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

const Dashboard = () => {
  const user = useStore((state) => state.user);
  const token = useStore((state) => state.token);
  const logout = useStore((state) => state.logout);
  const navigate = useNavigate();

  const [stats, setStats] = useState({ disruption_days: 0, payouts_received: 0, active_policy: null });
  const [triggering, setTriggering] = useState(false);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({ temp: 24, condition: 'sunny', humidity: 65 });

  useEffect(() => {
    if (token) {
      fetchStats();
    }
  }, [token]);

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
      console.error('Error fetching stats:', e);
    } finally {
      setLoading(false);
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
      alert('⚠️ Heavy Rain Event Simulated!\n\nCheck your Claims page for the generated claim.');
      fetchStats();
    } catch (e) {
      alert('Simulation failed. Please try again.');
      console.error(e);
    }
    setTriggering(false);
  };

  const statsCards = [
    { 
      label: 'Total Payouts', 
      value: `₹${stats.payouts_received}`, 
      icon: DollarSign, 
      color: 'from-emerald-500 to-teal-500', 
      bgColor: 'emerald',
      description: 'Total claims paid'
    },
    { 
      label: 'Disruption Days', 
      value: stats.disruption_days, 
      icon: Calendar, 
      color: 'from-orange-500 to-red-500', 
      bgColor: 'orange',
      description: 'Days with income loss'
    },
    { 
      label: 'Risk Score', 
      value: '78/100', 
      icon: Activity, 
      color: 'from-blue-500 to-cyan-500', 
      bgColor: 'blue',
      description: 'Current risk level'
    },
    { 
      label: 'Protection Status', 
      value: stats.active_policy ? 'Active' : 'Inactive', 
      icon: Shield, 
      color: stats.active_policy ? 'from-emerald-500 to-teal-500' : 'from-gray-500 to-gray-600', 
      bgColor: stats.active_policy ? 'emerald' : 'gray',
      description: stats.active_policy ? 'Your income is protected' : 'Get covered today'
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600/20 via-emerald-600/20 to-teal-600/20 rounded-2xl p-6 md:p-8 mb-8 border border-emerald-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="px-2 py-1 bg-emerald-500/20 rounded-lg">
                <span className="text-emerald-400 text-xs font-semibold">Welcome back</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {user?.name} <span className="gradient-text">👋</span>
            </h1>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 rounded-full">
                <MapPin size={14} className="text-blue-400" />
                <span className="text-sm text-gray-300">{user?.zone}, {user?.city}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 rounded-full">
                <Briefcase size={14} className="text-emerald-400" />
                <span className="text-sm text-gray-300">{user?.platform} Driver</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 rounded-full">
                <Wallet size={14} className="text-orange-400" />
                <span className="text-sm text-gray-300">₹{user?.daily_earnings}/day</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center min-w-[180px] border border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-2">
              {weatherData.condition === 'sunny' && <Sun size={24} className="text-yellow-500" />}
              {weatherData.condition === 'rainy' && <CloudRain size={24} className="text-blue-400" />}
              {weatherData.condition === 'windy' && <Wind size={24} className="text-gray-400" />}
              <span className="text-2xl font-bold text-white">{weatherData.temp}°C</span>
            </div>
            <p className="text-xs text-gray-400">Humidity: {weatherData.humidity}%</p>
            <p className="text-xs text-emerald-400 mt-1">{user?.zone}</p>
          </div>
        </div>
      </div>

      {/* Active Policy Status */}
      {stats.active_policy ? (
        <div className="bg-gradient-to-br from-emerald-900/30 to-gray-900/50 rounded-2xl p-6 md:p-8 mb-8 border border-emerald-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0">
            <div className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg flex items-center gap-1">
              <Shield size={12} />
              ACTIVE POLICY
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-3">
                <Shield size={28} />
                {stats.active_policy.plan} Protection Plan
              </h3>
              <p className="text-gray-300">Your gig income is fully protected against unexpected disruptions</p>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <Clock size={14} className="text-gray-400" />
                <span className="text-gray-400">Renews: {stats.active_policy.coverage_end ? new Date(stats.active_policy.coverage_end).toLocaleDateString() : 'N/A'}</span>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-5 text-center min-w-[180px]">
              <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">Weekly Premium</p>
              <p className="text-3xl font-bold text-white">₹{Number(stats.active_policy.weekly_premium).toFixed(2)}</p>
              <p className="text-xs text-gray-400 mt-2">Auto-debit every week</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 md:p-8 mb-8 border border-red-500/30 text-center">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle size={40} className="text-red-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">⚠️ You're Uninsured</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">Protect your income from weather disruptions, strikes, and unexpected events starting at just ₹199/week</p>
          <button 
            onClick={() => navigate('/policy')} 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:scale-105"
          >
            Get Covered Now
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all group cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{stat.label}</p>
                <div className={`p-2 rounded-lg bg-${stat.bgColor}-500/10 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className={`text-${stat.bgColor}-400`} />
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-6 border border-blue-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <TrendingUp size={20} className="text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Earnings Overview</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">This Week</span>
              <span className="text-white font-semibold">₹2,800</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Last Week</span>
              <span className="text-white font-semibold">₹2,400</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-700">
              <span className="text-gray-400">Growth</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <TrendingUp size={14} />
                +16.7%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-2xl p-6 border border-orange-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
              <Zap size={20} className="text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Simulation Engine</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">Test how the system responds to real-time disruptions</p>
          <button 
            onClick={handleSimulateTrigger}
            disabled={triggering}
            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
              triggering 
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105'
            }`}
          >
            <CloudRain size={18} />
            {triggering ? 'Simulating Event...' : 'Simulate Heavy Rain Event'}
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center">Demo: Creates a test claim in your history</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Recent Activity</h3>
          <button onClick={() => navigate('/claims')} className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            View All →
          </button>
        </div>
        {stats.disruption_days === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity size={24} className="text-gray-500" />
            </div>
            <p className="text-gray-400">No recent activity</p>
            <p className="text-xs text-gray-500 mt-1">Your claims will appear here</p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Calendar size={14} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-white text-sm">Weather Disruption</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
              <span className="text-emerald-400 font-semibold">₹600</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;