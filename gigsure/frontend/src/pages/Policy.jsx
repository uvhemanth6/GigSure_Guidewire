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
      const res = await axios.post(`${API_BASE_URL}/policy/calculate`, {
        zone: user.zone,
        zone_risk_score: 0.8,
        seasonal_index: 1.1,
        tenure_months: 6,
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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-emerald-500 font-mono">ML</span>
          </div>
        </div>
        <p className="mt-4 text-gray-400">Analyzing risk profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Choose Your Protection</h1>
        <p className="text-gray-400">Personalized plans based on your delivery zone in {user?.zone}</p>
      </div>

      {/* Risk Assessment Card */}
      {premiumData && premiumData.breakdown && (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 mb-8 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <span className="text-xl">📊</span>
            </div>
            <h3 className="text-lg font-bold text-white">Risk Assessment Breakdown</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Base Premium</span>
                <span className="text-white font-mono">₹{premiumData.breakdown.base}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Zone Risk Adjustment</span>
                <span className="text-orange-400 font-mono">+₹{premiumData.breakdown.zone_risk_adjustment}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Seasonal Adjustment</span>
                <span className="text-yellow-500 font-mono">+₹{premiumData.breakdown.seasonal_adjustment}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Tenure Discount</span>
                <span className="text-emerald-400 font-mono">-₹{premiumData.breakdown.tenure_discount}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plans Grid */}
      {premiumData && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {['Basic', 'Standard', 'Premium'].map((plan) => {
            const isSelected = selectedPlan === plan;
            const price = premiumData.plans[plan];
            const features = {
              Basic: ['₹300 per outage day', 'Weather protection', 'Basic support'],
              Standard: ['₹600 per outage day', 'Weather + Strike protection', 'Priority support', 'Quick payout'],
              Premium: ['₹1000 per outage day', 'Full coverage', '24/7 dedicated support', 'Instant payout', 'Accident coverage']
            };
            
            return (
              <div 
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`cursor-pointer transition-all transform hover:scale-105 ${
                  isSelected 
                    ? 'scale-105' 
                    : ''
                }`}>
                <div className={`rounded-2xl p-6 h-full backdrop-blur-sm border-2 ${
                  isSelected 
                    ? 'bg-gradient-to-br from-blue-900/30 to-emerald-900/30 border-blue-500 shadow-xl shadow-blue-500/20' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                }`}>
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">
                      {plan === 'Basic' && '🌤️'}
                      {plan === 'Standard' && '🛡️'}
                      {plan === 'Premium' && '💎'}
                    </div>
                    <h3 className={`text-xl font-bold ${isSelected ? 'text-blue-400' : 'text-white'}`}>{plan}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-white">₹{price}</span>
                      <span className="text-gray-400 text-sm">/week</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {features[plan].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-emerald-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {isSelected && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Payment Button */}
      {premiumData && (
        <div className="text-center">
          <button 
            onClick={handleMigatePayment}
            disabled={!!processingState}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              processingState 
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white hover:shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105'
            }`}>
            {processingState ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {processingState}
              </>
            ) : (
              <>
                <span>💳</span>
                Pay ₹{premiumData.plans[selectedPlan]} via Razorpay
                <span>→</span>
              </>
            )}
          </button>
          <p className="text-xs text-gray-500 mt-4">Secure payment • No hidden fees • Cancel anytime</p>
        </div>
      )}
    </div>
  );
};

export default Policy;