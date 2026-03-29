import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { User, Phone, MapPin, Building, DollarSign, Smartphone, ArrowRight, Shield, AlertCircle } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

const Onboarding = () => {
  const login = useStore((state) => state.login);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    platform: 'Zomato',
    zone: '',
    city: 'Bangalore',
    dailyEarnings: 400
  });
  const [location, setLocation] = useState({ lat: 12.9716, lon: 77.5946 });
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
          console.log("Location access denied, using default");
          setLocationError("Using default location for demo");
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
      alert('Registration failed! Please try again.');
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-2xl mb-4">
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-extrabold gradient-text mb-2">
            GigSure
          </h1>
          <p className="text-gray-400 text-sm">Income Protection for Gig Workers</p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 shadow-2xl">
          {step === 1 ? (
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                <div className="relative group">
                  <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" />
                  <input 
                    required 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-3 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    type="text"
                    placeholder="John Doe"
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Mobile Number</label>
                <div className="relative group">
                  <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" />
                  <input 
                    required 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-3 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    type="tel"
                    placeholder="9876543210"
                    value={formData.mobile} 
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Platform</label>
                  <div className="relative group">
                    <Building size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <select 
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-3 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" 
                      value={formData.platform} 
                      onChange={(e) => setFormData({...formData, platform: e.target.value})}>
                      <option>Zomato</option>
                      <option>Swiggy</option>
                      <option>Zepto</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">City</label>
                  <div className="relative group">
                    <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <select
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-3 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
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
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Delivery Zone</label>
                <div className="relative group">
                  <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" />
                  <input 
                    required 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-3 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" 
                    type="text" 
                    placeholder="e.g., Koramangala, HSR Layout"
                    value={formData.zone} 
                    onChange={(e) => setFormData({...formData, zone: e.target.value})} 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Avg Daily Earnings (₹)</label>
                <div className="relative group">
                  <DollarSign size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" />
                  <input 
                    required 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-3 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" 
                    type="number"
                    placeholder="400"
                    value={formData.dailyEarnings} 
                    onChange={(e) => setFormData({...formData, dailyEarnings: e.target.value})} 
                  />
                </div>
              </div>

              {locationError && (
                <div className="flex items-center gap-2 text-xs text-yellow-500 bg-yellow-500/10 p-2 rounded-lg">
                  <AlertCircle size={14} />
                  {locationError}
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                Continue
                <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone size={40} className="text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Verify Your Number</h2>
                <p className="text-sm text-gray-400">
                  Enter the 6-digit OTP sent to <span className="text-emerald-400 font-semibold">{formData.mobile}</span>
                </p>
              </div>
              
              <input 
                autoFocus
                className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-center text-2xl tracking-[0.5em] text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" 
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
                className={`w-full font-bold py-3.5 px-4 rounded-xl transition-all transform ${
                  otp.length === 6 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:scale-[1.02] shadow-lg shadow-emerald-500/20' 
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                } flex items-center justify-center gap-2`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    <Smartphone size={18} />
                    Verify & Get Started
                  </>
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