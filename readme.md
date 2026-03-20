# 🛡️ GigSure
### *Because Rain Shouldn't Mean Zero Rupees*

> **Guidewire DEVTrails 2026 | University Hackathon**
> AI-Powered Parametric Income Insurance for India's Gig Economy

---

## 📌 Table of Contents

1. [The Problem](#-the-problem)
2. [The Reality in Numbers](#-the-reality-in-numbers)
3. [The Big Idea](#-the-big-idea)
4. [Why GigSure is Different](#-why-GigSure-is-different)
5. [Who This is For](#-who-this-is-for)
6. [How It Works](#-how-it-works)
7. [Disruption Triggers](#-disruption-triggers)
8. [Fraud Detection](#-fraud-detection--multi-layer-system)
9. [Adversarial Defense & Anti-Spoofing Strategy](#-adversarial-defense--anti-spoofing-strategy)
10. [Risk Scoring Engine](#-risk-scoring-engine)
11. [Weekly Premium Model](#-weekly-premium-model)
12. [AI and ML Integration](#-ai-and-ml-integration)
13. [Tech Stack](#️-tech-stack)
14. [System Architecture](#️-system-architecture)
15. [Dashboard](#-dashboard)
16. [Why This Works](#-why-this-works)
17. [Business Viability](#-business-viability)
18. [Deliverables Roadmap](#-deliverables-roadmap)
19. [Key Insight](#-key-insight)
20. [Team](#-team)

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

👉 **There is zero income protection for this. GigSure changes that.**

---

## 📊 The Reality in Numbers

| What | How Much |
|---|---|
| Food delivery workers in India | ~5 million |
| Monthly income lost to disruptions | ₹1,200 – ₹2,000 |
| Working days lost during monsoon alone | 4 – 6 days/month |
| Existing income protection solutions | **0** |

> That last number — zero — is the entire reason GigSure exists.

---

## 💡 The Big Idea

GigSure is a **parametric income insurance platform** built specifically for gig workers.

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

## ⚙️ Why GigSure is Different

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

## 🔐 Adversarial Defense & Anti-Spoofing Strategy

> **This section was added in response to a real threat scenario issued during Phase 1 —
> a coordinated syndicate of 500 delivery workers using fake GPS apps to drain the liquidity pool.**

Simple GPS verification is not enough. GigSure's defense goes far deeper.

---

### 🎯 The Attack We Are Defending Against

```
500 delivery workers
Organized via a Telegram group
Using fake GPS apps on Android
Sitting safely at home
Telling our system they are in a flood zone
Triggering mass false payouts
Draining the entire liquidity pool instantly
```

This is not individual fraud. This is a **coordinated syndicate attack.**
Here is exactly how GigSure defeats it — layer by layer.

---

### 1️⃣ THE DIFFERENTIATION
#### How We Tell a Real Stranded Worker from a GPS Spoofer

---

#### 🔵 Phase 1 — 7-Day Baseline Building (Starts When Policy Activates)

The moment a worker activates their weekly policy, GigSure silently starts capturing location every 5 minutes — all week long. Not just at claim time.

```
Policy activated: Sunday 8:00 PM

Monday:
08:05 AM → Miyapur (home area)
08:20 AM → Kondapur (on the way)
08:45 AM → Madhapur (delivery zone)
12:30 PM → Gachibowli (new zone)
07:00 PM → Miyapur (returning home)

This repeats across 7 days
→ Builds a natural movement baseline for that worker
```

**Why this matters:**

A fraudster sitting at home all week has a baseline like this:

```
Monday:    Miyapur all day
Tuesday:   Miyapur all day
Wednesday: Miyapur all day
Thursday rain starts:
Thursday:  FLOOD ZONE ← appeared instantly ❌

→ No path exists in the database to reach the flood zone
→ Was never in that direction all week
→ Flagged as IMPOSSIBLE
```

---

#### 🔵 Phase 2 — Catching the Fake GPS the Moment It Turns On

**Scenario A — Worker opens GigSure before turning on fake GPS:**

```
6:00 AM → GigSure captures real location: Miyapur
           Stored in database immediately

6:01 AM → Worker turns on fake GPS
           Fake location sent: Kukatpally flood zone

Distance between points: 12.3 km
Time between points: 60 seconds
Calculated speed: 738 km/h

→ Haversine check fires instantly
→ No delivery bike travels at 738 km/h
→ Flagged as IMPOSSIBLE ❌
```

**Scenario B — Worker turns on fake GPS before opening GigSure:**

```
6:00 AM → Fake GPS already running
6:01 AM → Opens GigSure
           First point received = Kukatpally (fake)
           Real location never seen

BUT — 7-day baseline exists:
Monday to Wednesday → Miyapur every single day
Thursday 6:01 AM   → Suddenly Kukatpally

→ No travel path exists in database to reach there
→ Worker was never in that direction all week
→ Flagged as IMPOSSIBLE ❌
```

**Both scenarios are caught.**

---

#### 🔵 Phase 3 — GPS Micro-Drift Analysis

Real GPS hardware — even when a person stands completely still — produces natural coordinate variation due to satellite interference, atmospheric conditions, and hardware noise.

```
Real GPS — person standing still:
Sample 1: 17.493512, 78.392641
Sample 2: 17.493489, 78.392658  ← drifted 2.6 meters naturally
Sample 3: 17.493521, 78.392629  ← drifted 3.1 meters naturally
Sample 4: 17.493498, 78.392671  ← drifted 4.2 meters naturally

Pattern: Random, unpredictable micro-variation ✅
```

```
Fake GPS app — person spoofing location:
Sample 1: 17.493500, 78.392650
Sample 2: 17.493500, 78.392650  ← perfectly identical ❌
Sample 3: 17.493500, 78.392650  ← perfectly identical ❌
Sample 4: 17.493500, 78.392650  ← perfectly identical ❌

Pattern: Perfectly static — this never happens in real hardware
```

Even advanced fake GPS apps that add artificial drift fail this check:

```
Artificial drift:
+0.000010 → +0.000010 → +0.000010
→ Regular, mathematical increment ❌
→ Real GPS drift is random, never uniform

Our system calculates standard deviation of coordinate samples:
Real GPS std deviation  → 0.000008 to 0.000025 (random spread) ✅
Fake GPS std deviation  → 0.000000 (perfect) or too uniform    ❌
```

---

### 2️⃣ THE DATA
#### Specific Data Points We Analyze Beyond Basic GPS

---

#### 📊 Data Layer 1 — Movement Vector Timeline

Every 5 minutes during the active policy week, we store:

```json
{
  "worker_id": "W001",
  "timestamp": "2026-03-20T08:05:00",
  "latitude": 17.493512,
  "longitude": 78.392641,
  "accuracy_meters": 12,
  "altitude": 542,
  "speed_reported": 23.4,
  "bearing": 142
}
```

**Why altitude and bearing matter:**

```
Fake GPS apps spoof only latitude and longitude
They rarely spoof altitude and bearing correctly

Real movement Miyapur → Kukatpally:
→ Bearing changes gradually as road curves
→ Altitude changes as terrain changes
→ Device-reported speed matches our calculated speed ✅

Fake GPS jump:
→ Bearing changes 180° instantly ❌
→ Altitude unchanged despite location change ❌
→ Device reports speed = 0, we calculate speed = 738 km/h ❌
```

---

#### 📊 Data Layer 2 — Speed and Acceleration Check

```
For every two consecutive location points:

calculated_speed = haversine_distance / time_delta

Then we compare:
device_reported_speed vs calculated_speed

Real worker on bike:
Device says: 28 km/h
We calculate: 26 km/h
Difference: 2 km/h ← acceptable ✅

Fake GPS fraudster:
Device says: 0 km/h (sitting at home)
We calculate: 738 km/h (jumped 12 km in 1 minute)
Difference: 738 km/h ← impossible ❌
```

---

#### 📊 Data Layer 3 — Delivery Activity Correlation

```
Real stranded worker:
08:00 → Accepted order, picked up from restaurant
08:47 → Delivered to customer
09:10 → Accepted next order
09:55 → Rain starts — no new orders
10:00 → Location: flood zone, activity: stopped ✅
         Was actively working. Got genuinely stranded.

Fraudster with perfect fake GPS:
08:00 → No orders
09:00 → No orders
09:55 → Rain starts
10:00 → Location: flood zone, activity: zero ❌
         Never worked. Only appeared during claim window.
```

**Key logic:**

```
IF location = disruption zone
AND zero delivery activity before disruption
AND no order history this week
THEN fraud_probability = HIGH ❌
```

A fraudster can fake a GPS location.
They cannot fake actual order pickups and deliveries on the platform.

---

#### 📊 Data Layer 4 — Network Behavior Signals

```
Collected passively at claim time:

Real delivery worker caught in flood:
→ Mobile data connection (outdoors on bike) ✅
→ Signal drops and reconnects (heavy rain interference) ✅
→ IP region matches Hyderabad ✅

Fraudster sitting at home:
→ Connected to stable home WiFi ❌
   (nobody uses WiFi while on delivery bike)
→ Perfectly stable connection despite "being in flood zone" ❌
→ No signal fluctuation at all ❌
```

---

#### 📊 Data Layer 5 — Coordinated Syndicate Detection

This directly addresses the 500-person Telegram group attack:

```
Real flood event — Zone B (natural):

Worker 1: entered zone at 09:23, location (17.4912, 78.3941)
Worker 2: entered zone at 09:31, location (17.4889, 78.3967)
Worker 3: entered zone at 09:45, location (17.4923, 78.3955)
Worker 4: entered zone at 09:52, location (17.4901, 78.3948)

Pattern:
→ Different entry times spread over 30+ minutes ✅
→ Different coordinates spread naturally across zone ✅
→ Different movement paths to reach zone ✅
→ VALID FLOOD EVENT ✅
```

```
Coordinated fraud ring — Zone B:

Worker 1: entered zone at 10:00:02, location (17.4935, 78.3996)
Worker 2: entered zone at 10:00:04, location (17.4935, 78.3996)
Worker 3: entered zone at 10:00:03, location (17.4934, 78.3997)
... 200 more workers, same pattern

Pattern:
→ All entered within a 10-second window ❌
→ Nearly identical coordinates ❌
→ No travel path in any of their 7-day histories ❌
→ SYNDICATE DETECTED
```

**The statistical test we run:**

```
IF claims_in_zone > 3x historical baseline for that zone
AND entry_time_standard_deviation < 60 seconds
AND 80% of coordinates cluster within 100 meters of each other
THEN syndicate_flag = TRUE

→ ALL claims in this cluster held immediately
→ Liquidity pool protected before a single payout is made
→ Manual review triggered for the entire cluster
```

---

#### 📊 Data Layer 6 — Long-Term Claim Rate Pattern

```
Real worker claim rate:
→ Claims 2–3 disruption events per month
→ Sometimes works through light rain
→ Misses some disruption windows naturally
→ Claim rate: 30–50% of all disruptions in zone ✅

Perfect fraudster claim rate:
→ Claims EVERY single disruption event
→ Never misses a single weather trigger
→ Claim rate: 100% of all disruptions in zone ❌

100% claim rate is statistically impossible
for a genuine delivery worker.
Flagged automatically after week 2.
```

---

### ⚠️ The Hardest Edge Case — Acknowledged Honestly

> *What if a fraudster runs fake GPS all 7 days, simulates gradual movement, uses mobile data, and manually mimics realistic delivery patterns?*

```
If someone does ALL of this perfectly:

GPS checks          → PASSES ✅
Movement checks     → PASSES ✅
Speed checks        → PASSES ✅
Micro-drift         → Might pass ⚠️
Network type        → PASSES ✅

BUT still fails:
Activity correlation → FAILS ❌ (cannot fake real order completions)
Claim rate over time → FAILS ❌ (100% claim rate detected by week 3)
Syndicate pattern    → FAILS ❌ (500 people following same Telegram
                                  instructions cluster unnaturally)
```

**The honest answer:**
A single perfectly patient fraudster might pass our system in week 1.
But they gain only ₹350 maximum for 7 days of constant manual effort.
The effort-to-reward ratio makes individual fraud not worth attempting.

At syndicate scale — 500 people cannot all fake 7 different realistic delivery routes, maintain different timing patterns, and produce zero order history simultaneously without our crowd analysis detecting the statistical impossibility.

---

### 3️⃣ THE UX BALANCE
#### Protecting Honest Workers With Genuine Network Drops

The hardest design problem: in a real flood, a worker's GPS signal weakens, mobile data drops intermittently, and location samples become irregular. This looks similar to fraud signals. We cannot penalize this.

---

#### How We Separate Genuine Network Drop from Fraud

```
Honest worker — network drop during flood:

7-day baseline     ✅ Natural movement history exists
Path to zone       ✅ Gradual travel history confirmed
Pre-disruption     ✅ Was actively taking orders before rain
GPS micro-drift    ✅ Natural variation before signal dropped
Network type       ✅ Mobile data (outdoors on bike)
Crowd validation   ✅ Others in same zone also affected
Signal drop        ✅ Expected — heavy rain blocks satellites

→ System recognizes: real worker, bad signal in bad weather
→ Claim approved under GRACE status
→ Worker receives payout with slight delay, not rejection
```

```
Fraudster — trying to mimic a network drop:

7-day baseline     ❌ Stayed home all week
Path to zone       ❌ No travel history to reach zone
Pre-disruption     ❌ Zero orders all day
GPS micro-drift    ❌ Perfectly static coordinates
Network type       ❌ Stable WiFi at home
Crowd              ❌ 200 others doing identical thing

→ System recognizes: coordinated fraud
→ Claim rejected with reason provided
```

---

#### Three-Tier Response System

**Tier 1 — Auto Approve (Risk Score 0–30):**
```
All signals clean and consistent
→ Payout sent within 60 minutes
→ Worker notified: "₹250 credited. Stay safe 🙏"
→ Zero friction for genuine workers
```

**Tier 2 — Grace Hold (Risk Score 30–60):**
```
Some signals uncertain — possible genuine network issue
→ Worker NOT rejected immediately
→ Notification: "Claim under quick review — 
   usually resolved within 2–4 hours"
→ System waits for:
   Signal to stabilize and last known location confirmed
   Crowd data from zone cross-checked
   Weather API intensity confirmed for that exact area
→ If confirmed real → Auto approved, payout sent
→ Worker experiences: slight delay, never rejection
```

**Tier 3 — Reject (Risk Score 60+):**
```
Multiple strong fraud signals present
→ Claim rejected with clear reason given to worker
→ First rejection in any 90-day window:
   Warning only — no account penalty applied
   Honest workers get full benefit of doubt
→ Third rejection within 90 days:
   Account flagged for manual review
   NOT banned — reviewed by human first
```

---

#### Grace Rules — Built to Protect Genuine Workers

```
Rule 1 — First Flag Benefit:
First anomaly flag in any 90-day window
→ Never causes rejection alone
→ Treated as possible genuine issue
→ Resolved through additional context checks only

Rule 2 — History Weighs Heavily:
Worker with 6+ months of clean claim history
gets flagged once
→ Long history weighted heavily in risk score
→ Clean long-term workers get automatic benefit of doubt

Rule 3 — Signal Loss Forgiveness:
GPS signal lost during active disruption window
→ System uses LAST KNOWN location before dropout
→ If last known location = disruption zone
→ Claim continues processing normally
→ Signal loss during flood = expected, not suspicious
```

---

#### Complete Anti-Spoofing System Flow

```
Policy Activated (Sunday)
         ↓
7-Day Passive Baseline Building (Every 5 Minutes)
         ↓
Disruption Event Detected via Weather API
         ↓
Claim Auto-Initiated
         ↓
┌─────────────────────────────────────────────┐
│          Anti-Spoofing Pipeline              │
│                                             │
│  Speed + Teleport Check (Haversine)         │
│               ↓                             │
│  GPS Micro-Drift Randomness Analysis        │
│               ↓                             │
│  7-Day Baseline Path Comparison             │
│               ↓                             │
│  Altitude + Bearing Consistency Check       │
│               ↓                             │
│  Pre-Disruption Activity Correlation        │
│               ↓                             │
│  Network Type + Stability Analysis          │
│               ↓                             │
│  Syndicate Cluster Detection                │
│               ↓                             │
│  Long-Term Claim Rate Pattern               │
│               ↓                             │
│  Isolation Forest Anomaly Score             │
└─────────────────────────────────────────────┘
         ↓
    Risk Score Calculated
         ↓
   0–30  → Auto Approve → Payout in 60 min
  30–60  → Grace Hold  → Re-evaluate in 2–4 hrs
   60+   → Reject      → Reason provided to worker
```

---

> 🧠 **The Core Principle of Our Defense:**
> *"A fraudster can fake a GPS coordinate. They cannot fake seven days of a delivery worker's life — the orders accepted, the routes taken, the signal drops in the rain, and the natural randomness of real movement. We don't check if GPS is real. We check if an entire week of human behavior is real."*

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
**GitHub Repository:** *https://github.com/uvhemanth6/GigSure_Guidewire*
**Phase 1 Demo Video:** *https://drive.google.com/file/d/1hcmnCD2SZFaCKOSlPEKu321WfvcF1b8d/view?usp=sharing*

---

## 🛡️ Final Thought

> *A delivery partner's income shouldn't disappear just because the weather changes.*

GigSure doesn't just sell insurance.
It gives a delivery partner the confidence to say —
**"Even if it rains tomorrow, my family will be okay."**

---

*Built with ❤️ by Team GigSure | SRM University AP | Guidewire DEVTrails 2026*