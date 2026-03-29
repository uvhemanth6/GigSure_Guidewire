import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';
import { FileText, CheckCircle, Clock, XCircle, TrendingUp, DollarSign, AlertCircle, Calendar, Filter, Search } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

const Claims = () => {
  const token = useStore((state) => state.token);
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (token) {
      fetchClaims();
    }
  }, [token]);

  const fetchClaims = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/claims`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setClaims(res.data);
    } catch (e) {
      console.error('Failed to fetch claims');
    } finally {
      setLoading(false);
    }
  };

  const getStatusConfig = (status) => {
    switch(status) {
      case 'APPROVED': 
        return { color: 'emerald', icon: CheckCircle, label: 'Approved', bgColor: 'bg-emerald-500/10', textColor: 'text-emerald-400', borderColor: 'border-emerald-500/20' };
      case 'GRACE_HOLD': 
        return { color: 'yellow', icon: Clock, label: 'Grace Hold', bgColor: 'bg-yellow-500/10', textColor: 'text-yellow-400', borderColor: 'border-yellow-500/20' };
      case 'REJECTED': 
        return { color: 'red', icon: XCircle, label: 'Rejected', bgColor: 'bg-red-500/10', textColor: 'text-red-400', borderColor: 'border-red-500/20' };
      default: 
        return { color: 'gray', icon: FileText, label: 'Pending', bgColor: 'bg-gray-500/10', textColor: 'text-gray-400', borderColor: 'border-gray-500/20' };
    }
  };

  const filteredClaims = claims
    .filter(claim => filter === 'all' || claim.status.toLowerCase() === filter.toLowerCase())
    .filter(claim => claim.trigger_type?.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-400">Loading claim history...</p>
      </div>
    );
  }

  const filters = [
    { value: 'all', label: 'All Claims', icon: FileText, count: claims.length },
    { value: 'approved', label: 'Approved', icon: CheckCircle, count: claims.filter(c => c.status === 'APPROVED').length },
    { value: 'grace_hold', label: 'Grace Hold', icon: Clock, count: claims.filter(c => c.status === 'GRACE_HOLD').length },
    { value: 'rejected', label: 'Rejected', icon: XCircle, count: claims.filter(c => c.status === 'REJECTED').length },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3">Claim History</h1>
        <p className="text-gray-400 text-lg">Track all your insurance claims and payouts</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
          <p className="text-2xl font-bold text-white">{claims.length}</p>
          <p className="text-xs text-gray-400">Total Claims</p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
          <p className="text-2xl font-bold text-emerald-400">{claims.filter(c => c.status === 'APPROVED').length}</p>
          <p className="text-xs text-gray-400">Approved</p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
          <p className="text-2xl font-bold text-yellow-400">{claims.filter(c => c.status === 'GRACE_HOLD').length}</p>
          <p className="text-xs text-gray-400">Grace Hold</p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
          <p className="text-2xl font-bold text-red-400">{claims.filter(c => c.status === 'REJECTED').length}</p>
          <p className="text-xs text-gray-400">Rejected</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search claims..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {filters.map((tab) => {
            const Icon = tab.icon;
            const isActive = filter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Icon size={16} />
                {tab.label}
                <span className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>({tab.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Claims List */}
      {filteredClaims.length === 0 ? (
        <div className="text-center py-16 bg-gray-800/50 rounded-2xl border border-gray-700">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
            <FileText size={40} className="text-gray-500" />
          </div>
          <p className="text-gray-400 text-xl mb-2">No claims found</p>
          <p className="text-sm text-gray-500">When you experience a disruption, claims will appear here</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <AlertCircle size={12} />
            Claims are automatically generated from simulated events
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredClaims.map((claim, index) => {
            const statusConfig = getStatusConfig(claim.status);
            const StatusIcon = statusConfig.icon;
            
            return (
              <div key={claim.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/30 transition-all animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${statusConfig.bgColor} rounded-xl flex items-center justify-center`}>
                      <StatusIcon size={24} className={statusConfig.textColor} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{claim.trigger_type}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar size={12} className="text-gray-500" />
                        <p className="text-xs text-gray-500">
                          {new Date(claim.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}`}>
                    {statusConfig.label}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-700">
                  <div className="bg-gray-900/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp size={16} className="text-blue-400" />
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Risk Score</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-red-500 to-emerald-500 rounded-full h-2 transition-all" 
                          style={{ width: `${claim.risk_score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-mono font-bold text-white">{claim.risk_score}/100</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-xl p-4 text-center md:text-right">
                    <div className="flex items-center gap-2 justify-end mb-3">
                      <DollarSign size={16} className="text-emerald-400" />
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Payout Amount</p>
                    </div>
                    <p className={`text-3xl font-bold font-mono ${claim.payout_amount > 0 ? 'text-emerald-400' : 'text-gray-500'}`}>
                      ₹{claim.payout_amount}
                    </p>
                    {claim.payout_amount > 0 && (
                      <p className="text-xs text-emerald-500 mt-2 flex items-center justify-end gap-1">
                        <CheckCircle size={12} />
                        Paid to your account
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Claims;