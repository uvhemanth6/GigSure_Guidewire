import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { Shield, TrendingUp, CreditCard, Check, AlertCircle, Award, Sparkles, Zap, Heart } from 'lucide-react';

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
    if (token && user) {
      fetchPremiums();
    }
  }, [token, user]);

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
      // Fallback demo data
      setPremiumData({
        plans: { Basic: 199, Standard: 399, Premium: 599 },
        breakdown: {
          base: 200,
          zone_risk_adjustment: 50,
          seasonal_adjustment: 30,
          tenure_discount: 20
        }
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async () => {
    setProcessingState('Initializing secure payment...');
    
    setTimeout(async () => {
      setProcessingState('Payment successful! Activating policy...');
      
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
        alert('Failed to save policy. Please try again.');
        setProcessingState(null);
      }
    }, 1500);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <TrendingUp size={20} className="text-emerald-500" />
          </div>
        </div>
        <p className="mt-4 text-gray-400">Analyzing your risk profile...</p>
      </div>
    );
  }

  const plans = [
    { 
      name: 'Basic', 
      icon: Shield, 
      price: premiumData?.plans?.Basic || 199, 
      features: [
        '✅ ₹300 per outage day',
        '✅ Weather protection',
        '✅ Basic support',
        '❌ Strike protection',
        '❌ Priority payout'
      ],
      color: 'blue',
      recommended: false
    },
    { 
      name: 'Standard', 
      icon: Zap, 
      price: premiumData?.plans?.Standard || 399, 
      features: [
        '✅ ₹600 per outage day',
        '✅ Weather + Strike protection',
        '✅ Priority support',
        '✅ Quick payout (24hrs)',
        '❌ Accident coverage'
      ],
      color: 'emerald',
      recommended: true
    },
    { 
      name: 'Premium', 
      icon: Award, 
      price: premiumData?.plans?.Premium || 599, 
      features: [
        '✅ ₹1000 per outage day',
        '✅ Full coverage',
        '✅ 24/7 dedicated support',
        '✅ Instant payout',
        '✅ Accident coverage'
      ],
      color: 'purple',
      recommended: false
    },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full mb-4">
          <Sparkles size={14} className="text-emerald-400" />
          <span className="text-xs text-emerald-400 font-semibold">AI-Powered Pricing</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Choose Your Protection
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Personalized plans based on your delivery zone in <span className="text-emerald-400 font-semibold">{user?.zone}</span>
        </p>
      </div>

      {/* Risk Assessment Card */}
      {premiumData && premiumData.breakdown && (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 mb-10 border border-gray-700">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <TrendingUp size={24} className="text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Risk Assessment Breakdown</h3>
              <p className="text-xs text-gray-500">How your premium is calculated</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Base Premium</span>
                <span className="text-white font-mono font-semibold">₹{premiumData.breakdown.base}</span>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.name;
          const Icon = plan.icon;
          
          return (
            <div 
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                isSelected ? 'scale-105' : ''
              }`}
            >
              <div className={`rounded-2xl p-6 h-full backdrop-blur-sm border-2 relative ${
                isSelected 
                  ? `bg-gradient-to-br from-${plan.color}-900/30 to-emerald-900/30 border-${plan.color}-500 shadow-2xl shadow-${plan.color}-500/20` 
                  : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
              }`}>
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-5">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${plan.color}-500/10 flex items-center justify-center`}>
                    <Icon size={32} className={`text-${plan.color}-400`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${isSelected ? `text-${plan.color}-400` : 'text-white'}`}>{plan.name}</h3>
                  <div className="mt-3">
                    <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                    <span className="text-gray-400 text-sm">/week</span>
                  </div>
                </div>
                
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className={feature.includes('✅') ? 'text-emerald-400' : 'text-gray-600'}>
                        {feature.includes('✅') ? '✓' : '○'}
                      </span>
                      {feature.replace('✅', '').replace('❌', '')}
                    </li>
                  ))}
                </ul>
                
                {isSelected && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Payment Section */}
      {premiumData && (
        <div className="text-center">
          <button 
            onClick={handlePurchase}
            disabled={!!processingState}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              processingState 
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white hover:shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-105'
            }`}
          >
            {processingState ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {processingState}
              </>
            ) : (
              <>
                <CreditCard size={22} />
                Pay ₹{premiumData.plans[selectedPlan]} & Activate Policy
              </>
            )}
          </button>
          
          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Heart size={12} className="text-red-400" />
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield size={12} className="text-emerald-400" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-1">
              <AlertCircle size={12} className="text-yellow-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Policy;