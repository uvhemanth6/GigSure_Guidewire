import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';

const API_BASE_URL = 'http://localhost:5000/api';

const Claims = () => {
  const token = useStore((state) => state.token);
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClaims();
  }, []);

  const fetchClaims = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/claims`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setClaims(res.data);
    } catch (e) {
      console.error('Failed to fetch claims');
    }
    setLoading(false);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'APPROVED': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'GRACE_HOLD': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'REJECTED': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400';
    }
  };

  if (loading) return <div className="mt-20 text-center text-gray-500">Loading history...</div>;

  return (
    <div className="p-4 fade-in">
      <h2 className="text-2xl font-bold text-white mb-6">Claim History</h2>

      {claims.length === 0 ? (
        <div className="text-center py-10 bg-gray-800 rounded-xl border border-gray-700">
          <span className="text-4xl mb-3 block">📜</span>
          <p className="text-gray-400 text-sm">No claims generated yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {claims.map((claim) => (
            <div key={claim.id} className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-sm font-bold text-white">{claim.trigger_type}</h3>
                  <p className="text-[10px] text-gray-500 mt-1">
                    {new Date(claim.created_at).toLocaleString()}
                  </p>
                </div>
                <div className={`text-[10px] font-bold px-2 py-1 rounded border ${getStatusColor(claim.status)}`}>
                  {claim.status}
                </div>
              </div>

              <div className="bg-gray-900 rounded p-3 mt-3 flex justify-between items-center border border-gray-800">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Risk Score</p>
                  <p className="text-sm font-mono text-white">{claim.risk_score}/100</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Payout</p>
                  <p className={`text-lg font-mono font-bold ${claim.payout_amount > 0 ? 'text-emerald-400' : 'text-gray-500'}`}>
                    ₹{claim.payout_amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Claims;
