// Simple registration form using Zustand for state
import { create } from 'zustand'

const useWorkerStore = create((set) => ({
  worker: null,
  token: null,
  setWorker: (worker) => set({ worker }),
  setToken: (token) => set({ token }),
}))
```

Form collects:
```

// Just check if 6 digits entered — no real SMS needed for demo
const verifyOTP = (otp) => otp.length === 6
// Capture real location on registration
useEffect(() => {
  navigator.geolocation.getCurrentPosition((pos) => {
    setLocation({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    })
  })
}, [])