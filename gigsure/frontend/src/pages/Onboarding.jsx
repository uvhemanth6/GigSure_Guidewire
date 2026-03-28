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

  useEffect(() => {
    // Get real GPS location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => console.log("Location access denied/error: ", error)
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
    <div className="flex flex-col min-h-screen bg-gray-900 justify-center px-6 max-w-md mx-auto">
      <div className="text-center mb-8 fade-in">
        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
          Gig<span className="text-emerald-400">Sure</span>
        </h1>
        <p className="text-gray-400 text-sm">Income Protection for Gig Workers</p>
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700 fade-in transition-all">
        {step === 1 && (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Full Name</label>
              <input required className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 mt-1" type="text"
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>

            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Mobile Number</label>
              <input required className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 mt-1" type="tel"
                value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider">Platform</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white mt-1 outline-none" 
                  value={formData.platform} onChange={(e) => setFormData({...formData, platform: e.target.value})}>
                  <option>Zomato</option>
                  <option>Swiggy</option>
                  <option>Zepto</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider">City</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white mt-1 outline-none"
                   value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})}>
                  <option>Bangalore</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Delivery Zone</label>
              <input required className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:outline-none mt-1" type="text" placeholder="e.g. Koramangala / HSR"
                value={formData.zone} onChange={(e) => setFormData({...formData, zone: e.target.value})} />
            </div>

            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Avg Daily Earnings (₹)</label>
              <input required className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:outline-none mt-1" type="number"
                value={formData.dailyEarnings} onChange={(e) => setFormData({...formData, dailyEarnings: e.target.value})} />
            </div>

            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors">
              Continue
            </button>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-4 fade-in">
            <div className="text-center">
              <h2 className="text-lg font-bold text-white">Verification</h2>
              <p className="text-sm text-gray-400 mt-1">Enter 6-digit OTP sent to {formData.mobile}</p>
            </div>
            
            <input 
              autoFocus
              className="w-full bg-gray-900 border border-gray-700 rounded p-4 text-center text-2xl tracking-[0.5em] text-white focus:outline-none focus:border-emerald-500" 
              type="text" 
              maxLength="6"
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
            />

            <p className="text-xs text-emerald-400 text-center">(Mock Demo: Accept any 6 digits)</p>

            <button 
              onClick={handleRegister} 
              disabled={otp.length !== 6 || loading}
              className={`w-full font-bold py-3 px-4 rounded-lg mt-4 transition-colors ${otp.length === 6 ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}>
              {loading ? 'Verifying...' : 'Verify & Login'}
            </button>
            <button onClick={() => setStep(1)} className="w-full text-gray-400 text-sm mt-2 hover:text-white">
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
