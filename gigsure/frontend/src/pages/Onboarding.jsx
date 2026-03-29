import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:5000/api';

const Onboarding = () => {
  const login = useStore((state) => state.login);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', mobile: '', platform: 'Zomato', zone: '', city: 'Bangalore', dailyEarnings: 400
  });
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.log("Location access denied/error: ", error);
          setLocationError("Location access needed for accurate risk assessment");
        }
      );
    }
  }, []);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const payload = { ...formData, ...location };
      const res = await axios.post(`${API_BASE_URL}/auth/register`, payload);
      
      login(res.data.worker, res.data.token);
      navigate('/dashboard');
    } catch (e) {
      alert('Registration failed!');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">
            GigSure
          </h1>
          <p className="text-gray-400 text-sm">Income Protection for Gig Workers</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 shadow-2xl">
          {step === 1 && (
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  required 
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500 transition-all" 
                  type="text"
                  placeholder="John Doe"
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Mobile Number</label>
                <input 
                  required 
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500 transition-all" 
                  type="tel"
                  placeholder="9876543210"
                  value={formData.mobile} 
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})} 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Platform</label>
                  <select 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500" 
                    value={formData.platform} 
                    onChange={(e) => setFormData({...formData, platform: e.target.value})}>
                    <option>Zomato</option>
                    <option>Swiggy</option>
                    <option>Zepto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">City</label>
                  <select
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500"
                    value={formData.city} 
                    onChange={(e) => setFormData({...formData, city: e.target.value})}>
                    <option>Bangalore</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Chennai</option>
                    <option>Kolkata</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Delivery Zone</label>
                <input 
                  required 
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500" 
                  type="text" 
                  placeholder="e.g., Koramangala, HSR Layout"
                  value={formData.zone} 
                  onChange={(e) => setFormData({...formData, zone: e.target.value})} 
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Avg Daily Earnings (₹)</label>
                <input 
                  required 
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500" 
                  type="number"
                  placeholder="400"
                  value={formData.dailyEarnings} 
                  onChange={(e) => setFormData({...formData, dailyEarnings: e.target.value})} 
                />
              </div>

              {locationError && (
                <div className="text-xs text-yellow-500 text-center">
                  ⚠️ {locationError}
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-105">
                Continue →
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h2 className="text-xl font-bold text-white">Verification</h2>
                <p className="text-sm text-gray-400 mt-2">
                  Enter 6-digit OTP sent to <span className="text-emerald-400">{formData.mobile}</span>
                </p>
              </div>
              
              <input 
                autoFocus
                className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-center text-2xl tracking-[0.5em] text-white focus:outline-none focus:border-emerald-500" 
                type="text" 
                maxLength="6"
                placeholder="000000"
                value={otp} 
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} 
              />

              <p className="text-xs text-center text-emerald-400 animate-pulse">
                ✨ Demo Mode: Enter any 6 digits ✨
              </p>

              <button 
                onClick={handleRegister} 
                disabled={otp.length !== 6 || loading}
                className={`w-full font-bold py-3 px-4 rounded-xl transition-all transform ${
                  otp.length === 6 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:scale-105' 
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}>
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Verifying...
                  </span>
                ) : (
                  'Verify & Get Started'
                )}
              </button>
              
              <button 
                onClick={() => setStep(1)} 
                className="w-full text-gray-400 text-sm mt-2 hover:text-white transition-colors">
                ← Back to Registration
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Onboarding;