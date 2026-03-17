# 🛡️ GigSure
### *Because Rain Shouldn't Mean Zero Rupees*

> **Guidewire DEVTrails 2026 | University Hackathon**
> AI-Powered Parametric Income Insurance for India's Gig Economy

---

## 📌 Table of Contents

1. [The Problem](#-the-problem)
2. [The Reality in Numbers](#-the-reality-in-numbers)
3. [The Big Idea](#-the-big-idea)
4. [Why GigSure is Different](#-why-gigsure-is-different)
5. [Who This is For](#-who-this-is-for)
6. [How It Works](#-how-it-works)
7. [Disruption Triggers](#-disruption-triggers)
8. [Fraud Detection](#-fraud-detection--multi-layer-system)
9. [Risk Scoring Engine](#-risk-scoring-engine)
10. [Weekly Premium Model](#-weekly-premium-model)
11. [AI and ML Integration](#-ai-and-ml-integration)
12. [Tech Stack](#️-tech-stack)
13. [System Architecture](#️-system-architecture)
14. [Dashboard](#-dashboard)
15. [Why This Works](#-why-this-works)
16. [Business Viability](#-business-viability)
17. [Deliverables Roadmap](#-deliverables-roadmap)
18. [Key Insight](#-key-insight)
19. [Team](#-team)

---

## 📌 The Problem

Every morning, millions of delivery partners across India get on their bikes hoping for a good day.

But the moment it starts raining heavily — orders stop.
A local strike is called — roads are blocked.
The heat becomes unbearable — no one orders food.

Their income simply **disappears**.

This is not a rare situation. It happens every monsoon, every heatwave, every bandh. And today there is absolutely **zero protection** for these workers.

```
No orders.
No work.
No earnings.
No safety net.
```

👉 **There is zero income protection for this. gigsure changes that.**

---

## 📊 The Reality in Numbers

| What | How Much |
|---|---|
| Food delivery workers in India | ~5 million |
| Monthly income lost to disruptions | ₹1,200 – ₹2,000 |
| Working days lost during monsoon alone | 4 – 6 days/month |
| Existing income protection solutions | **0** |

> That last number — zero — is the entire reason gigsure exists.

---

## 💡 The Big Idea

gigsure is a **parametric income insurance platform** built specifically for gig workers.

Here is the simplest way to understand what we do:

> **Disruption happens → system detects it → payout sent automatically.**

```
No forms.
No waiting.
No arguments.
```

The worker doesn't need to do a single thing. If it rains heavily in their zone today, money reaches their UPI account within 60 minutes. That is the entire experience from their side.

> 💬 **What is Parametric Insurance?**
> Normal insurance makes you file a claim and wait weeks for approval.
> Parametric insurance pays automatically the moment a verified event occurs — like rainfall crossing a set threshold. The event itself is the proof. No paperwork. No human judgment needed.

---

## ⚙️ Why gigsure is Different

| Feature | Traditional Insurance | 🛡️ GigSure |
|---|---|---|
| Claim Process | Manual — forms and documents | Fully Automatic |
| Time to Payout | 15 to 45 days | Under 60 minutes |
| Proof Required | Heavy documentation | None — system driven |
| Fraud Risk | High | Low — data based |
| Pricing | Monthly | Weekly — fits gig earnings |

---

## 👤 Who This is For

**Persona: Food Delivery Partner (Swiggy / Zomato)**

| Attribute | Detail |
|---|---|
| Platform | Swiggy / Zomato |
| Daily Earnings | ₹600 – ₹900 |
| Weekly Earnings | ₹3,500 – ₹5,500 |
| Device | Low-end Android smartphone |
| City | Hyderabad (launch city) |
| Biggest Risk | Fully dependent on showing up every day |

> 👉 Even **one bad weather day** creates real financial stress for this person.
> GigSure absorbs that shock before it becomes a crisis.

---

## 🔄 How It Works

Here is the full journey — from signing up to receiving money — explained simply:

### 1️⃣ Onboarding — Takes 5 Minutes
```
Open GigSure on phone (no app download needed — it's a PWA)
→ Sign up with mobile number
→ Verify with OTP
→ Enter your zone, platform (Zomato/Swiggy), average daily earnings
→ AI calculates your personalized weekly premium instantly
→ Pay via UPI to activate coverage
→ Done. You are protected.
```

### 2️⃣ Passive Monitoring — Worker Does Nothing
```
System runs quietly in the background
→ Watches weather data for your zone every 30 minutes
→ Monitors AQI levels every 2 hours
→ Tracks news and traffic for social disruptions
→ You just go about your day normally
```

### 3️⃣ Disruption Detected — Automatic
```
Example: Rainfall crosses 35mm/hr in worker's zone
→ System detects it via OpenWeatherMap API
→ Claim process starts immediately
→ Worker receives a notification: "Disruption detected in your zone"
```

### 4️⃣ Fraud Check — Fully Automated
```
System silently verifies:
→ Was the worker in the affected zone? (GPS check)
→ Was delivery activity zero during that window? (activity check)
→ Does behavior match the disruption pattern? (ML check)
All checks happen in seconds. No human involved.
```

### 5️⃣ Instant Payout — Money in 60 Minutes
```
Risk score calculated
→ Claim approved automatically
→ Money sent directly to worker's UPI
→ Notification: "₹250 credited to your account. Stay safe 🙏"
```

### 6️⃣ Weekly Renewal — One Tap
```
Every Sunday evening
→ Renewal reminder via SMS / WhatsApp
→ Premium updated based on next week's risk forecast
→ Worker renews with one tap via UPI AutoPay
```

---

## ⚡ Disruption Triggers

We use **parametric triggers** — objective, third-party verified data — so no human judgment is ever needed to approve a claim.

| Trigger | Threshold Condition | Data Source | Payout |
|---|---|---|---|
| 🌧️ Heavy Rain | Rainfall > 35 mm/hr | OpenWeatherMap API | 100% |
| 🌡️ Extreme Heat | Temperature > 44°C | OpenWeatherMap API | 75% |
| 🌫️ Severe Pollution | AQI > 300 (Hazardous) | CPCB AQI API | 75% |
| 🚫 Curfew / Strike | Verified advisory issued | News API + Traffic data | 100% |
| ⚙️ Platform Outage | App down > 2 hours | Platform Status Mock | 60% |

**What is strictly NOT covered:**
- ❌ Vehicle breakdown or repair
- ❌ Health issues or accidents
- ❌ Personal choice not to work
- ❌ Planned events or holidays

---

## 🧠 Fraud Detection — Multi-Layer System

We do **not** rely on screenshots or manual proof.
Everything is data-driven and automated across 7 layers.

---

### 🛡️ Layer 1 — Disruption Validation
> *Is the event even real?*

- Cross-check weather APIs and news sources
- Confirm disruption actually occurred in claimed zone and time
- If event is not verified by external data → claim rejected immediately

---

### 📍 Layer 2 — Location and Time Validation
> *Was the worker actually there?*

- Was the worker's GPS in the affected zone during the disruption window?
- Workers claiming from a different city or area are flagged instantly

---

### 📊 Layer 3 — Activity Validation
> *Were they actually not working?*

- Check delivery activity during the disruption window using simulated platform data
- `Deliveries > 0 during disruption → Reject ❌`
- `No delivery activity → Continue ✅`
- This is the core validation layer

---

### 📍 Layer 4 — GPS and Mobility Analysis
> *Does their movement pattern make sense?*

- Analyze movement patterns during disruption window
- Normal delivery behavior = stop-start movement across multiple locations
- Stationary or unusual patterns cross-checked against claimed disruption
- Detects GPS spoofing attempts

---

### 🤖 Layer 5 — Behavioral AI
> *Is this person's overall claim pattern suspicious?*

- Uses **Isolation Forest** machine learning model
- Tracks claim frequency, timing patterns, edge-case behavior
- Flags workers who claim at statistically unusual rates compared to their zone peers

---

### 🌐 Layer 6 — Crowd Validation
> *Are multiple workers in the same zone affected?*

- If many workers in the same pincode are all affected simultaneously → strong signal that disruption is real (valid for bandhs, curfews, floods)
- If only one isolated worker claims while neighbors don't → flagged for review

---

### 📄 Layer 7 — Optional Proof (Edge Cases Only)
> *Last resort — never mandatory*

- Triggered only when system confidence score is in the uncertain range
- Worker may be asked for a supporting screenshot
- This is never the default — only a fallback for truly ambiguous cases

---

## 🧮 Risk Scoring Engine

Every claim goes through a scoring system built from all 7 layers:

```
Risk Score =
  Trigger Confidence     (Is the event verified?)
+ Location Match         (Was worker in zone?)
+ Activity Check         (Were they not working?)
+ GPS Behavior           (Does movement make sense?)
+ Behavioral Pattern     (Is claim history clean?)
+ Crowd Validation       (Are others affected too?)
```

**Decision Logic:**

| Score Range | Action |
|---|---|
| 0 – 30 | ✅ Auto Approve — payout sent immediately |
| 30 – 60 | ⚠️ Review — optional proof may be requested |
| 60+ | ❌ Reject — claim denied with reason |

---

## 💰 Weekly Premium Model

Designed around how gig workers actually earn — **week to week**.

A monthly premium of ₹200 feels like a big commitment.
The same ₹200 split into ₹50 per week feels completely manageable.
Same cost. Much better fit for the worker's life.

### Plans

| Plan | Weekly Premium | Daily Payout on Claim |
|---|---|---|
| 🥉 Basic | ₹25 | ₹150/day |
| 🥈 Standard | ₹40 | ₹250/day |
| 🥇 Premium | ₹60 | ₹400/day |

### AI Personalization
Your premium is not a flat rate — it adjusts based on:

- **Zone risk** — is your area historically flood-prone or heat-affected?
- **Weather history** — how often has your zone been disrupted in the past 3 months?
- **Your behavior** — long-term users with clean claim history get loyalty discounts
- **Seasonal index** — premiums adjust slightly during monsoon vs. winter

**Example:**
```
Base Premium (Standard): ₹40
+ Zone Risk (Kukatpally, flood-prone): +₹8
+ Monsoon Season Modifier: +₹5
- Tenure Discount (1.5 years active): -₹3
─────────────────────────────────
Final Weekly Premium: ₹50
```

---

## 🤖 AI and ML Integration

AI is not a feature we added on top — it is the foundation of how GigSure works.

| What | Algorithm | Purpose |
|---|---|---|
| Premium Calculation | XGBoost (Gradient Boosting) | Predict weekly risk score per worker per zone |
| Fraud Detection | Isolation Forest | Detect anomalous claim behavior |
| Disruption Forecasting | LSTM (Time Series) | Predict likely disruptions 3–5 days ahead |
| Payout Calculation | Linear Regression | Estimate fair income replacement amount |

> All models start rule-based in Phase 1 and transition to trained ML models in Phase 3 as data grows.

---

## 🛠️ Tech Stack

### Frontend
| What | Technology |
|---|---|
| Web App | React.js |
| Offline Support | PWA with Service Workers |
| Styling | Tailwind CSS |
| State Management | Zustand |

### Backend
| What | Technology |
|---|---|
| API Server | Node.js + Express.js |
| Database | PostgreSQL |
| Caching + Sessions | Redis |
| Background Jobs | BullMQ |

### AI Layer
| What | Technology |
|---|---|
| ML Framework | Python + scikit-learn |
| Pricing Model | XGBoost |
| Fraud Detection | Isolation Forest |
| Forecasting | LSTM (TensorFlow Lite) |
| Model Serving | FastAPI microservice |

### Integrations
| Service | Provider | Mode |
|---|---|---|
| Weather | OpenWeatherMap | Live (free tier) |
| AQI | CPCB AQI API | Live + Mock |
| News / Alerts | NewsData.io | Mock |
| Payments | Razorpay | Test / Sandbox |
| Platform Activity | Zomato / Swiggy | Simulated Mock |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────┐
│           Worker PWA  |  Admin Dashboard         │
│              (React.js + Tailwind)               │
└─────────────────────┬───────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│              Backend API (Node.js)               │
│   Auth  |  Policy Service  |  Claims Service     │
└──────┬──────────────┬──────────────┬────────────┘
       │              │              │
       ▼              ▼              ▼
┌────────────┐  ┌──────────────┐  ┌─────────────────────┐
│ PostgreSQL │  │ ML Service   │  │ External APIs        │
│ + Redis    │  │ (FastAPI /   │  │ OpenWeatherMap       │
│            │  │  Python)     │  │ CPCB AQI             │
└────────────┘  └──────────────┘  │ NewsData (mock)      │
                                   │ Razorpay (sandbox)   │
                                   └─────────────────────┘
```

---

## 📊 Dashboard

### Worker View
What the delivery partner sees in their app:

```
🛡️ Your GigSure Coverage
─────────────────────────────────────
Status          : ACTIVE ✅
This Week       : March 10 – 16
Plan            : Standard (₹50/week)
─────────────────────────────────────
💰 Income Protected This Week : ₹750
📦 Payouts Received           : ₹250
🌧️ Disruption Days            : 1
🔄 Next Renewal               : Sunday
─────────────────────────────────────
```

### Admin / Insurer View
What the insurer sees in their dashboard:

- 📍 **Zone Heatmap** — live map showing active disruption zones
- 📉 **Loss Ratio** — claims paid vs premiums collected per city
- 🚨 **Fraud Alerts** — workers flagged for review
- 📈 **Predictive Claims Forecast** — expected payouts for next 7 days
- 📊 **Claim Analytics** — breakdown by trigger type, zone, and time

---

## 🚀 Why This Works

- ✅ No dependency on real platform APIs — mocks are sufficient for full demo
- ✅ Fully automated parametric system — zero manual intervention in claim flow
- ✅ Multi-layer fraud detection — not relying on a single check
- ✅ PWA means no app store, no installation, works on cheap Android phones
- ✅ Weekly pricing model fits naturally into how gig workers think about money
- ✅ Scalable across cities with no change to core system

---

## 💼 Business Viability

| Metric | Value |
|---|---|
| Average Weekly Premium | ₹45 |
| Expected Payout per Worker per Week | ₹18 |
| Operating Cost per Worker per Week | ₹5 |
| **Net Margin per Worker per Week** | **~₹22 (49%)** |

**Scale Potential:**
- India has ~5 million food delivery workers
- At just 1% penetration = 50,000 workers
- Weekly revenue = ₹22.5 lakh
- Fully digital distribution = near-zero agent cost

> 👉 Sustainable. Scalable. And solves a real problem for real people.

---

## 📅 Deliverables Roadmap

### Phase 1 — Ideation and Foundation (March 4 – 20)
**Theme: Know Your Delivery Worker**

- [ ] Finalize persona and disruption triggers
- [ ] Design weekly premium logic
- [ ] Create README with full project strategy
- [ ] Set up GitHub repository
- [ ] Build wireframes for onboarding and dashboard
- [ ] Record 2-minute strategy video

---

### Phase 2 — Automation and Protection (March 21 – April 4)
**Theme: Protect Your Worker**

- [ ] Build worker registration and onboarding UI
- [ ] Implement insurance policy creation flow
- [ ] Integrate OpenWeatherMap and AQI APIs
- [ ] Build dynamic premium calculator
- [ ] Implement 5 automated parametric triggers
- [ ] Build claims management with auto-trigger and payout simulation
- [ ] Integrate Razorpay test mode
- [ ] Record 2-minute demo video

---

### Phase 3 — Scale and Optimise (April 5 – 17)
**Theme: Perfect for Your Worker**

- [ ] Deploy ML fraud detection (Isolation Forest)
- [ ] Add GPS location validation
- [ ] Build worker dashboard (earnings, coverage, payouts)
- [ ] Build admin dashboard (loss ratios, heatmap, predictions)
- [ ] Add multilingual support (Telugu + Hindi)
- [ ] Record 5-minute final demo video with simulated disruption walkthrough
- [ ] Prepare and submit final pitch deck (PDF)

---

## 🧠 Key Insight

> **We don't verify claims — we verify conditions.**

This is what makes GigSure fundamentally different.
We never ask the worker to prove they didn't work.
We verify the world they were working in.
If conditions made work impossible — they get paid. Simple.

---

## 👥 Team

| Name |
|---|
| Neeraj Kumar | 
| Gnanadeep Venkat |
| Venkata Hemanth |
| M Nikhil | 
| M Pravallika |

**University:** SRM University AP
**GitHub Repository:** *(https://github.com/uvhemanth6/GigSure_Guidewire/)*
**Phase 1 Demo Video:** *(https://drive.google.com/file/d/1hcmnCD2SZFaCKOSlPEKu321WfvcF1b8d/view?usp=sharing)*

---

## 🛡️ Final Thought

> *A delivery partner's income shouldn't disappear just because the weather changes.*

GigSure doesn't just sell insurance.
It gives a delivery partner the confidence to say —
**"Even if it rains tomorrow, my family will be okay."**

---

*Built with ❤️ by Team GigSure | SRM University AP | Guidewire DEVTrails 2026*