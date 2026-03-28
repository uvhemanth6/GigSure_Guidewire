import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:5000/api';

const Policy = () => {
  const user = useStore((state) => state.user);
  const token = useStore((state) => state.token);
  const navigate = useNavigate();

  const [premiumData, setPremiumData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('Standard');
  const [processingState, setProcessingState] = useState(null);

  useEffect(() => {
    fetchPremiums();
  }, []);

  const fetchPremiums = async () => {
    try {
      // Mock payload calling ML model
      const res = await axios.post(`${API_BASE_URL}/policy/calculate`, {
        zone: user.zone,
        zone_risk_score: 0.8, // Mocked 80/100 risk for demo
        seasonal_index: 1.1,  // Mocked slight monsoon risk
        tenure_months: 6,     // user has been on platform for 6 months
        daily_earnings: user.daily_earnings,
        historical_claims: 0
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPremiumData(res.data);
    } catch (e) {
      console.error(e);
      alert('Failed to connect to ML risk engine.');
    }
    setLoading(false);
  };

  const handleMigatePayment = async () => {
    setProcessingState('Initializing Razorpay...');
    
    setTimeout(async () => {
      setProcessingState('Payment Success. Activating...');
      
      try {
        await axios.post(`${API_BASE_URL}/policy/purchase`, {
          plan: selectedPlan,
          weeklyPremium: premiumData.plans[selectedPlan],
          razorpayPaymentId: `rzp_test_${Date.now()}`
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } catch (e) {
        alert('Failed to save policy');
        setProcessingState(null);
      }
    }, 1500);
  };

  if (loading) return <div className="mt-20 text-center text-emerald-400 animate-pulse">Running XGBoost Risk Engine...</div>;

  return (
    <div className="p-4 fade-in pb-20">
      <h2 className="text-2xl font-bold text-white mb-2">Choose Protection</h2>
      <p className="text-xs text-gray-400 mb-6 border-b border-gray-800 pb-4">
        Dynamic weekly plans generated specifically for {user.zone}.
      </p>

      {premiumData && premiumData.breakdown && (
        <div className="bg-gray-800 p-4 rounded-xl shadow border border-gray-700 mb-6 text-sm">
          <p className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wide">Risk Assessment Breakdown</p>
          <div className="space-y-1 font-mono text-xs text-gray-300">
            <div className="flex justify-between"><span>Base</span><span>₹{premiumData.breakdown.base}</span></div>
            <div className="flex justify-between text-orange-400"><span>Risk (Zone)</span><span>+₹{premiumData.breakdown.zone_risk_adjustment}</span></div>
            <div className="flex justify-between text-yellow-500"><span>Monsoon</span><span>+₹{premiumData.breakdown.seasonal_adjustment}</span></div>
            <div className="flex justify-between text-emerald-400"><span>Loyalty Discount</span><span>₹{premiumData.breakdown.tenure_discount}</span></div>
          </div>
        </div>
      )}

      {premiumData && (
        <div className="space-y-4">
          {['Basic', 'Standard', 'Premium'].map((plan) => {
            const isSelected = selectedPlan === plan;
            const price = premiumData.plans[plan];
            
            return (
              <div 
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`p-4 rounded-xl cursor-pointer border-2 transition-all ${
                  isSelected 
                    ? 'border-blue-500 bg-gray-800 shadow-lg shadow-blue-900/20' 
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-500'
                }`}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className={`font-bold ${isSelected ? 'text-blue-400' : 'text-gray-300'}`}>{plan} Plan</h3>
                  <p className="font-mono text-lg font-bold text-white">₹{price}<span className="text-[10px] text-gray-500 font-sans">/wk</span></p>
                </div>
                <p className="text-xs text-gray-400">
                  {plan === 'Basic' && 'Covers up to ₹300 per outage day.'}
                  {plan === 'Standard' && 'Covers up to ₹600 per outage day.'}
                  {plan === 'Premium' && 'Covers up to ₹1000 per outage day.'}
                </p>
              </div>
            )
          })}

          <button 
            onClick={handleMigatePayment}
            disabled={!!processingState}
            className={`w-full font-bold py-4 rounded-xl mt-4 text-white shadow-xl flex justify-center items-center
              ${processingState ? 'bg-gray-600' : 'bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400'}
            `}>
            {processingState || `Pay ₹${premiumData.plans[selectedPlan]} (Razorpay Demo)`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Policy;
