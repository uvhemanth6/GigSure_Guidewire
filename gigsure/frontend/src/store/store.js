import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      currentPolicy: null,
      isAuthenticated: false,

      login: (userData, jwtToken) => set({ 
        user: userData, 
        token: jwtToken, 
        isAuthenticated: true 
      }),

      logout: () => set({ 
        user: null, 
        token: null, 
        currentPolicy: null, 
        isAuthenticated: false 
      }),

      setPolicy: (policyData) => set({ 
        currentPolicy: policyData 
      }),
    }),
    {
      name: 'gigsure-storage',
    }
  )
);
