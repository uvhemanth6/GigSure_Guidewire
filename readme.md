# 🛡️ GigShield — Because Rain Shouldn't Mean Zero Rupees

> **Guidewire DEVTrails 2026 | University Hackathon**
> India's first AI-powered parametric income insurance built exclusively for food delivery partners.

---

## 📌 Table of Contents

1. [The Real Problem — In Plain Numbers](#the-real-problem--in-plain-numbers)
2. [A Week in Ravi's Life](#a-week-in-ravis-life)
3. [Why Existing Solutions Fail Him](#why-existing-solutions-fail-him)
4. [Traditional Insurance vs GigShield — What's the Difference?](#traditional-insurance-vs-gigshield--whats-the-difference)
5. [The Big Idea](#the-big-idea)
6. [Who We're Building For](#who-were-building-for)
7. [How It Actually Works — Step by Step](#how-it-actually-works--step-by-step)
8. [Weekly Premium Model — Keeping It Simple](#weekly-premium-model--keeping-it-simple)
9. [What Triggers a Payout — Our 5 Disruption Triggers](#what-triggers-a-payout--our-5-disruption-triggers)
10. [How AI Powers Every Decision](#how-ai-powers-every-decision)
11. [How We Catch Fraud — 3 Layer Protection](#how-we-catch-fraud--3-layer-protection)
12. [How We Built the Magic — Tech Stack](#how-we-built-the-magic--tech-stack)
13. [Why a Web App and Not a Native App](#why-a-web-app-and-not-a-native-app)
14. [System Architecture — How Everything Connects](#system-architecture--how-everything-connects)
15. [6-Week Build Plan](#6-week-build-plan)
16. [The Dashboard — What Workers and Insurers See](#the-dashboard--what-workers-and-insurers-see)
17. [API Integrations](#api-integrations)
18. [Can This Be a Real Business?](#can-this-be-a-real-business)
19. [Glossary — No Jargon Left Behind](#glossary--no-jargon-left-behind)
20. [Team](#team)

---

## 📊 The Real Problem — In Plain Numbers

We're not guessing at the problem. These numbers tell the story:

| Fact | Number |
|---|---|
| Active food delivery workers in India | ~5 million |
| Workers with ANY form of income insurance | ~0 |
| Average income lost per worker per month due to weather/disruptions | ₹1,200 – ₹2,000 |
| Days per month a Hyderabad delivery partner can't work due to rain (monsoon months) | 4 – 6 days |
| Time it takes traditional insurance to pay a claim | 15 – 45 days |
| Time GigShield takes to pay after a disruption is detected | Under 60 minutes |
| Workers who said they'd pay ₹50/week for income protection (informal survey data) | 7 in 10 |

> **The bottom line:** 5 million workers. Zero protection. We're fixing that.

---

## 📅 A Week in Ravi's Life

Meet **Ravi Kumar**, 28, Swiggy delivery partner, Hyderabad. He earns ₹700 on a good day.

```
Monday    ☀️  8 hrs work → ₹780 earned       → Good day
Tuesday   🌧️  Heavy rain → 0 deliveries       → ₹0 earned. Bills don't pause.
Wednesday ☀️  7 hrs work → ₹710 earned       → Recovering
Thursday  🌫️  AQI 320 (Hazardous) → sent home → ₹0 earned. Again.
Friday    ☀️  8 hrs work → ₹790 earned       → Back on track
Saturday  ☀️  9 hrs work → ₹880 earned       → Best day
Sunday    🌧️  Rain again → 3 hrs only        → ₹260 earned

Weekly Total Without GigShield:  ₹3,420  (lost ₹1,400 to disruptions)
Weekly Total With GigShield:     ₹3,420 + ₹900 payout = ₹4,320  ✅

```

**That ₹900 difference** is whether Ravi pays his rent on time or not. That's what GigShield does.

---

## ❌ Why Existing Solutions Fail Him

You might ask — doesn't the government or Zomato/Swiggy already help?

| Solution | What It Covers | Why It Fails Ravi |
|---|---|---|
| **PMSBY (Govt Scheme)** | Accidental death only | Doesn't cover income loss from rain or curfew |
| **Swiggy/Zomato Welfare Fund** | Medical emergencies, death | No income replacement for weather disruptions |
| **Traditional Health Insurance** | Medical bills | Nothing to do with lost delivery income |
| **Personal Savings** | Whatever he has | Average delivery worker has < ₹2,000 in savings |
| **Moneylenders / Family Loans** | Short-term cash | High interest, creates debt spiral |

**The gap is clear.** Nobody is protecting the income Ravi loses when it rains. GigShield is built exactly for this gap — nothing more, nothing less.

---

## ⚖️ Traditional Insurance vs GigShield — What's the Difference?

Most people think insurance means: *something bad happens → you file a claim → you wait → maybe you get money.*

**GigShield works completely differently.** Here's the comparison:

| | Traditional Insurance | GigShield (Parametric) |
|---|---|---|
| **How claims work** | You file a claim manually, submit documents, wait for approval | Automatic — the weather data itself triggers the payout |
| **Time to get paid** | 15 to 45 days | Under 60 minutes |
| **Who decides your claim** | A human claims adjuster | Real-time data from verified APIs |
| **Can claims be disputed?** | Yes — very often | Rarely — the data is objective |
| **Paperwork needed** | Lots | Zero |
| **Fraud risk** | High (fake receipts, exaggerated claims) | Low (data-driven, not human-reported) |
| **Pricing** | Monthly, complex | Weekly, transparent |

> **In simple words:** In parametric insurance, we don't ask "did you lose money?" — we check "did it rain heavily in your zone today?" If yes, you get paid. No questions. No forms. No waiting.

---

## 💡 The Big Idea

**GigShield** is a parametric income insurance platform for food delivery partners on Zomato and Swiggy.

Here's the one-sentence version of how it works:

> *"If the weather data says it rained heavily in your zone, you automatically receive money in your UPI account within the hour — no claim needed, no forms, no waiting."*

Three things make GigShield special:

**1. It's automatic.**
Workers don't need to do anything when a disruption hits. Our system watches the weather, the AQI, and local alerts 24/7. When a threshold is crossed, the payout process starts on its own.

**2. It fits how gig workers actually live.**
They earn weekly. They spend weekly. So we price weekly — starting at just ₹25 per week. No monthly commitments, no annual premiums.

**3. It's smart about fraud.**
Because payouts are triggered by verified third-party data (not worker reports), it's very hard to fake a claim. Our AI adds another layer on top to catch the rare edge cases.

---

## 👤 Who We're Building For

### Persona: Food Delivery Partner (Zomato / Swiggy)

| Attribute | Details |
|---|---|
| **Representative Name** | Ravi Kumar |
| **Age** | 28 |
| **City** | Hyderabad, Telangana |
| **Platform** | Swiggy (primary), Zomato (secondary) |
| **Daily Earnings (good day)** | ₹600 – ₹900 |
| **Weekly Earnings** | ₹3,500 – ₹5,500 |
| **Phone** | Android, budget device (₹6,000–₹10,000 range) |
| **Language** | Telugu / Hindi |
| **Disruption Days per Month** | 3–6 days (higher during monsoon: June–September) |
| **Monthly Income Lost to Disruptions** | ₹1,200 – ₹2,000 |
| **Savings Buffer** | Less than ₹2,000 typically |

### Why Food Delivery Specifically?

Food delivery is the most disruption-sensitive segment:
- Unlike e-commerce (Amazon/Flipkart), food is **time-critical** — a delayed food order in rain just doesn't happen
- Unlike grocery delivery, food orders **drop to near-zero during heavy rain** (restaurants close, customers don't order)
- The income impact is **sharp, fast, and measurable** — perfect for parametric insurance
- Hyderabad gets **600–700mm of rainfall** during monsoon months, making this a real and recurring problem

---

## 🔄 How It Actually Works — Step by Step

### Step 1: Sign Up (Takes 5 Minutes)

```
Worker opens GigShield on their phone browser (no app download needed)
↓
Enters mobile number → OTP verification
↓
Fills in: Name, City, Delivery Zone, Platform (Zomato/Swiggy), Average daily earnings
↓
Uploads: Platform ID screenshot (for verification)
↓
Our AI Risk Engine runs silently in the background
↓
Worker sees their personalised weekly premium (e.g., ₹50/week)
↓
Pays via UPI / PhonePe → Coverage starts immediately
```

### Step 2: Coverage is Running (Worker Does Nothing)

```
GigShield monitors weather, AQI, and local alerts for worker's zone every 30 minutes
↓
Worker just goes about their day normally
↓
No app interaction needed during the week
```

### Step 3: Disruption Detected → Automatic Payout

```
Weather API detects: Rainfall > 35mm/hr in Kukatpally zone (Ravi's area)
↓
Parametric Engine confirms: This crosses our trigger threshold ✅
↓
Fraud Engine checks:
   - Was Ravi in his zone? (GPS check) ✅
   - Did Ravi make deliveries during this window? (if yes → claim paused) ✅
   - Is this claim pattern suspicious? ✅
↓
Claim APPROVED automatically — no human needed
↓
Payout calculated: Disruption hours × Ravi's hourly rate × coverage factor = ₹250
↓
₹250 sent to Ravi's UPI within 60 minutes
↓
Ravi gets WhatsApp message: "₹250 credited to your account. Stay safe today 🙏"
```

### Step 4: Weekly Renewal (One Tap)

```
Every Sunday evening → Renewal reminder on WhatsApp + SMS
↓
Worker taps "Renew" → One-tap UPI payment
↓
Premium may adjust slightly based on next week's weather risk forecast for their zone
↓
Coverage continues seamlessly
```

---

## 💰 Weekly Premium Model — Keeping It Simple

We price weekly because **gig workers earn weekly and think weekly**. A monthly premium of ₹200 feels like a big commitment to someone who isn't sure what next week holds. A weekly premium of ₹50 is a cup of chai per day — and that mindset shift matters.

### The Three Plans

| Plan | Weekly Premium | Payout Per Disruption Day | Max Payout Per Week | Best For |
|---|---|---|---|---|
| 🥉 Basic Shield | ₹25 | ₹150 | ₹450 | Part-time workers, beginners |
| 🥈 Standard Shield | ₹40 | ₹250 | ₹750 | Most full-time delivery partners |
| 🥇 Full Shield | ₹60 | ₹400 | ₹1,200 | High earners, peak season coverage |

### How AI Personalises Your Premium

The base price of each plan is adjusted by our AI based on factors specific to the worker:

| Factor | Effect on Premium | Example |
|---|---|---|
| Zone's historical flood/rain risk | +₹5 to +₹15 | Kukatpally (flood-prone) = +₹10 |
| Monsoon / peak disruption season | +₹5 | June–September = +₹5 |
| Worker's tenure on platform | Discount -₹3 to -₹5 | 2+ years on Swiggy = -₹5 |
| Zone's disruption frequency last 3 months | +₹3 to +₹8 | High-disruption zone = +₹6 |
| Worker's claim history (valid claims) | No penalty | Valid claims don't raise your premium |

**A Real Example:**
```
Base Premium (Standard Shield):           ₹40
+ Zone Risk (Kukatpally, flood-prone):   +₹10
+ Monsoon Season Modifier (July):        + ₹5
- Tenure Discount (Ravi, 2 yrs Swiggy): - ₹5
────────────────────────────────────────────
Ravi's Personalised Weekly Premium:       ₹50
```

---

## ⚡ What Triggers a Payout — Our 5 Disruption Triggers

A "trigger" is simply the event that causes GigShield to automatically start a payout. We use verified, third-party data so the system is objective and fraud-resistant.

| # | Trigger | What We Check | Threshold | Data Source | Payout % of Daily Coverage |
|---|---|---|---|---|---|
| 1 | **Heavy Rain** | Rainfall intensity | > 35 mm/hr | OpenWeatherMap API | 100% |
| 2 | **Flooding / Disaster Alert** | Government flood advisory | Official IMD / NDMA alert | IMD Public API | 100% |
| 3 | **Extreme Heat** | Peak temperature | > 44°C between 11am–4pm | OpenWeatherMap API | 75% |
| 4 | **Hazardous Air Quality** | AQI Index reading | AQI > 300 (Hazardous level) | CPCB AQI API | 75% |
| 5 | **Curfew / City Shutdown** | Government order or Bandh | Section 144 or shutdown declared | News API / verified alert | 100% |
| 6 | **Platform Outage** *(Bonus)* | Zomato/Swiggy app downtime | > 2 continuous hours | Platform Status Mock | 60% |

### What Is NOT Covered — Ever

These are hard exclusions built into the system at the code level, not just policy words:

- ❌ Vehicle breakdown or repair
- ❌ Health issues, illness, or accidents
- ❌ Personal decision not to work
- ❌ Bad phone or internet connection
- ❌ Scheduled public holidays (known in advance)

---

## 🤖 How AI Powers Every Decision

GigShield isn't just calling a weather API and sending money. AI is embedded in every critical decision the platform makes. Here's how, explained simply:

### 1. Smart Premium Calculation
**What it does:** Figures out the right weekly price for each worker based on their specific zone and situation — not a one-size-fits-all number.

**How it works technically:** We use a machine learning model called **XGBoost** (a type of smart calculator that learns patterns from historical data). It's trained on 3 years of weather data, historical disruption events, and zone-level risk information.

**Simple analogy:** Like how your car insurance is cheaper if you live in a safe neighbourhood — GigShield charges less if your zone historically has fewer disruptions.

---

### 2. Fraud Detection
**What it does:** Catches people trying to fake claims or game the system.

**How it works technically:** We use a model called **Isolation Forest** — it learns what "normal" claim patterns look like, and automatically flags anything that looks unusual.

**Simple analogy:** Like a bank flagging an unusual transaction in a foreign country — our system flags claims that don't fit the expected pattern.

---

### 3. Predicting Next Week's Risk
**What it does:** Predicts how risky the coming week is likely to be, so we can warn workers in advance and adjust premiums proactively.

**How it works technically:** An **LSTM model** (a type of AI that's good at understanding sequences over time, like weather patterns) processes forecast data to predict disruption probability for each zone.

**Simple analogy:** Like a weather app showing you a 7-day forecast — except ours tells workers "next week looks risky, consider upgrading your coverage."

---

### 4. Fair Payout Calculation
**What it does:** Figures out exactly how much to pay — enough to replace lost income, but not more.

**How it works technically:** A simple **linear regression model** takes the worker's average earnings, the duration of the disruption, and the severity level to calculate a fair payout.

**Simple analogy:** Like how a salary continuation policy replaces your pay proportionally to how many days you missed.

---

## 🕵️ How We Catch Fraud — 3 Layer Protection

Since money is being sent automatically, fraud prevention is our most important feature. We have three independent layers:

### Layer 1 — Before Coverage Starts (Onboarding)
- Verify the worker's platform ID is real (OCR scan of Swiggy/Zomato earnings screenshot)
- One mobile number = one account (OTP-linked, no duplicates)
- Bank account / UPI must be verified before any payout can happen

### Layer 2 — At the Moment of Claim
- **Location check:** Worker's last known GPS location must be within their registered delivery zone
- **Activity check:** If the worker actually made deliveries during the "disruption window," the claim is automatically paused and flagged
- **Duplicate check:** Same worker can't claim two overlapping disruptions simultaneously

### Layer 3 — After the Claim (AI Review)
- Our Isolation Forest model checks if this claim's pattern is statistically normal
- Mass fraud detection: If 200 workers from the same small pincode all claim the same hour — we verify against official weather data. If the rain was real, all 200 are paid. If not, all 200 are flagged.
- Workers with 3 or more suspicious patterns in 90 days are moved to manual review — they don't lose coverage, just that specific claim is human-reviewed

---

## 🛠️ How We Built the Magic — Tech Stack

We chose technologies that are **production-grade but free/open-source**, so GigShield can scale without massive infrastructure cost.

### What the Worker Sees (Frontend)
| Part | Technology | Why We Chose It |
|---|---|---|
| Web App + PWA | React.js | Fast, works offline, installable without app store |
| Design System | Tailwind CSS + shadcn/ui | Clean, professional UI out of the box |
| Multiple Languages | i18next | Telugu, Hindi, English support with one setup |
| App State | Zustand | Lightweight, easy to manage |

### The Engine Room (Backend)
| Part | Technology | Why We Chose It |
|---|---|---|
| API Server | Node.js + Express.js | Fast, handles many simultaneous requests |
| Main Database | PostgreSQL | Reliable, handles financial data safely |
| Fast Cache | Redis | Stores weather alerts and session data instantly |
| Login / OTP | Firebase Auth | Battle-tested phone number OTP, free tier |
| Background Jobs | BullMQ | Runs trigger monitoring every 30 mins automatically |

### The Brain (AI/ML)
| Part | Technology | Why We Chose It |
|---|---|---|
| ML Models | Python + XGBoost + scikit-learn | Industry-standard for structured data |
| Time Series | TensorFlow Lite (LSTM) | Lightweight weather prediction model |
| Model API | FastAPI (Python) | Serves ML predictions to the main backend fast |

### The Connections (Integrations)
| Service | Provider | Mode |
|---|---|---|
| Weather Data | OpenWeatherMap (free tier) | Live |
| Air Quality (AQI) | CPCB AQI API | Live + Mock fallback |
| Payments | Razorpay (test mode) | Sandbox |
| News / Shutdown Alerts | NewsData.io | Mock |
| Platform Activity (Zomato/Swiggy) | Simulated JSON | Mock |
| Maps | Leaflet.js + OpenStreetMap | Live (free) |

### Where It Lives (Infrastructure)
| Part | Platform |
|---|---|
| Frontend | Vercel (free tier) |
| Backend + ML Service | Railway / Render (free tier) |
| CI/CD (auto-deploy) | GitHub Actions |
| Error Monitoring | Sentry |

---

## 📱 Why a Web App and Not a Native App

This was a deliberate decision, not a shortcut. Here's our thinking:

**Ravi has a ₹7,000 Android phone.** It has 16GB storage, half of which is used by WhatsApp photos. He's not going to download another app unless he absolutely has to.

| Reason | Explanation |
|---|---|
| **No download needed** | Ravi visits a URL and taps "Add to Home Screen" — it works like an app but installs in 3 seconds |
| **Works on low-end phones** | PWAs are lighter and faster than native apps on budget devices |
| **Offline support** | Service workers cache his dashboard — he can check coverage status even on 2G |
| **No app store approval needed** | We can push updates instantly without waiting for Play Store review |
| **SMS/WhatsApp as backup** | Even if he never opens the app, critical alerts (payouts, renewals) reach him via SMS |

---

## 🏗️ System Architecture — How Everything Connects

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      GIGSHIELD PLATFORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 ┌──────────────┐   ┌──────────────────┐   ┌────────────────┐
 │  WORKER PWA  │   │ ADMIN DASHBOARD  │   │ INSURER PORTAL │
 │  (React PWA) │   │ (Analytics View) │   │ (Risk & Loss)  │
 └──────┬───────┘   └────────┬─────────┘   └───────┬────────┘
        │                    │                      │
        └────────────────────┼──────────────────────┘
                             ▼
               ┌─────────────────────────┐
               │    API GATEWAY          │
               │    (Express.js)         │
               └──────────┬──────────────┘
                          │
        ┌─────────────────┼──────────────────┐
        ▼                 ▼                  ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐
│ AUTH SERVICE │  │POLICY SERVICE│  │   CLAIMS ENGINE       │
│ (Firebase    │  │(Premium Calc │  │ (Trigger Monitor +    │
│  OTP Login)  │  │ via ML)      │  │  Auto Payout Logic)   │
└──────────────┘  └──────┬───────┘  └──────────┬───────────┘
                         │                      │
                         ▼                      ▼
               ┌──────────────────┐   ┌─────────────────────┐
               │  ML MICROSERVICE │   │  EXTERNAL APIs       │
               │  (FastAPI Python)│   │  ┌─────────────────┐ │
               │  - XGBoost       │   │  │ OpenWeatherMap  │ │
               │  - IsolationForst│   │  │ CPCB AQI        │ │
               │  - LSTM Forecast │   │  │ Razorpay        │ │
               └──────────────────┘   │  │ NewsData.io     │ │
                                       │  │ Platform Mocks  │ │
               ┌──────────────────┐   └─────────────────────┘
               │  DATABASE LAYER  │
               │  PostgreSQL      │
               │  + Redis Cache   │
               └──────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
             TRIGGER MONITORING LOOP (Every 30 mins)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  BullMQ Job → Fetch Weather/AQI for all active zones
      ↓
  Check against trigger thresholds
      ↓
  If threshold crossed → Run Fraud Engine → If clean → Payout
      ↓
  Log event → Update Dashboard → Notify Worker via SMS/WhatsApp
```

---

## 📅 6-Week Build Plan

### Phase 1 — Ideation & Foundation (March 4–20)
**Goal: Know exactly what we're building and why**

- [ ] Finalise persona, city, triggers and premium model
- [ ] Write complete README strategy document
- [ ] Design wireframes for Worker Onboarding + Dashboard (Figma)
- [ ] Set up GitHub repository with project folder structure
- [ ] Set up basic React frontend and Node.js backend scaffolding
- [ ] Record 2-minute strategy video

**Deliverable:** README + repo link + 2-min video

---

### Phase 2 — Build the Core (March 21 – April 4)
**Goal: A working platform end-to-end**

- [ ] Build Worker Registration and Onboarding screens
- [ ] Build Insurance Policy Creation and management
- [ ] Integrate OpenWeatherMap and AQI APIs
- [ ] Build Dynamic Premium Calculator (rule-based first, then ML)
- [ ] Implement all 5 parametric triggers with threshold checks
- [ ] Build Claims Management module (auto-trigger + Razorpay sandbox payout)
- [ ] Build basic Worker Dashboard (coverage status, payout history)
- [ ] Record 2-minute demo video

**Deliverable:** Working prototype + 2-min demo video

---

### Phase 3 — Make It Smart and Complete (April 5–17)
**Goal: Production-ready, polished, and impressive**

- [ ] Deploy ML fraud detection (Isolation Forest)
- [ ] Add GPS location validation for claims
- [ ] Complete Worker Dashboard (earnings protected, active coverage, payout history)
- [ ] Build Admin/Insurer Dashboard (loss ratios, zone heatmap, predictive claims)
- [ ] Add Telugu and Hindi language support
- [ ] Polish UI and mobile responsiveness
- [ ] Record 5-minute final demo (with simulated rainstorm triggering auto-payout)
- [ ] Prepare Final Pitch Deck (PDF)

**Deliverable:** Full platform + 5-min demo video + pitch deck PDF

---

## 📊 The Dashboard — What Workers and Insurers See

### Worker Dashboard
```
┌───────────────────────────────────────────┐
│  🛡️ GigShield — Your Coverage            │
│  Week: March 10–16, 2026  |  ACTIVE ✅    │
├───────────────────────────────────────────┤
│  💰 Income Protected This Week:  ₹750    │
│  📦 Payouts Received:  ₹250 (Mon rain)   │
│  🌧️  Disruption Events This Week:  1     │
│  🔄 Next Renewal:  Sunday                │
│  📋 Current Plan:  Standard (₹50/week)  │
├───────────────────────────────────────────┤
│  📍 Your Zone:  Kukatpally, Hyderabad    │
│  🌡️  Today's Risk Level:  LOW ✅         │
│  🌧️  Rain Forecast This Week:  Wed, Thu  │
└───────────────────────────────────────────┘
```

### Admin / Insurer Dashboard (Key Metrics)
- **Loss Ratio** per city and zone — how much is paid out vs collected
- **Active Policies** count — how many workers are currently covered
- **Disruption Heatmap** — live map of zones with active weather alerts
- **Fraud Queue** — workers flagged for manual claim review
- **Predictive Claim Forecast** — how many claims to expect next 7 days based on weather forecast
- **Top Triggers This Month** — rain vs. heat vs. AQI vs. curfew breakdown

---

## 🔌 API Integrations

### 1. OpenWeatherMap (Free Tier — Live)
```
What it gives us:  Real-time rainfall, temperature, weather condition codes
How we call it:    Every 30 minutes for all active delivery zones
Trigger check:     Rainfall > 35mm/hr OR Temperature > 44°C
Fallback:          Mock JSON response if rate limit hit
```

### 2. CPCB AQI API (Live + Mock Fallback)
```
What it gives us:  Air Quality Index readings by city station
How we call it:    Every 2 hours
Trigger check:     AQI > 300 (Hazardous category)
Fallback:          Static mock data for demo purposes
```

### 3. Razorpay (Test / Sandbox Mode)
```
What it gives us:  Simulated UPI payout to worker
Mode:              Sandbox — no real money, identical to production flow
Shows:             Transaction ID, timestamp, amount, UPI reference
```

### 4. Platform Activity Mock (Simulated Zomato/Swiggy)
```
What it gives us:  Worker's delivery activity log (timestamps, completions)
Purpose:           Used by Fraud Layer 2 to check if worker was active during claim
Format:            Mock JSON: { worker_id, deliveries: [{ time, status }] }
```

### 5. NewsData.io (Mock for Curfew/Bandh Alerts)
```
What it gives us:  News alerts about local curfews or city shutdowns
Mode:              Mock alert injection for demo — simulates a real shutdown trigger
```

---

## 💼 Can This Be a Real Business?

Yes. Here's why the numbers work:

### Unit Economics Per Worker Per Week

| Item | Amount |
|---|---|
| Average Weekly Premium Collected | ₹45 |
| Expected Payout Per Worker Per Week | ₹18 (targeting 40% loss ratio) |
| Operational Cost Per Worker Per Week | ₹5 |
| **Net Per Worker Per Week** | **₹22 (~49% margin)** |

### Growth Path

| Stage | Workers | Weekly Revenue | Model |
|---|---|---|---|
| Pilot (City 1 — Hyderabad) | 1,000 | ₹45,000 | Direct to workers |
| Scale (5 cities) | 50,000 | ₹22.5 lakh | Direct + Platform partnership |
| National | 5,00,000 | ₹2.25 crore | Embedded in Zomato/Swiggy app as welfare feature |

### Why the Loss Ratio Stays Healthy
- Severe disruptions (rain > 35mm/hr, AQI > 300) happen **4–6 days per month** on average — not every day
- Many workers will be active on mildly rainy days (below trigger threshold) — they pay premium but don't claim
- Parametric triggers mean no inflated or fraudulent claims slip through

### The Big Partnership Opportunity
Zomato and Swiggy have been under regulatory pressure to provide better welfare for gig workers. GigShield can be **white-labelled and embedded** into their platforms as a welfare feature — with the platform subsidising part of the premium. This is the B2B2C path to scale.

---

## 📖 Glossary — No Jargon Left Behind

| Term | What It Actually Means |
|---|---|
| **Parametric Insurance** | Insurance where a pre-agreed event (like heavy rain) automatically triggers a payout — no claim form needed |
| **Trigger** | The specific event or threshold that causes a payout to start automatically (e.g., rainfall > 35mm/hr) |
| **Premium** | The amount a worker pays to stay insured — like a weekly subscription fee for protection |
| **Payout** | The money the worker receives when a trigger event happens |
| **Loss Ratio** | The % of collected premiums paid out as claims. 40% means for every ₹100 collected, ₹40 is paid out |
| **AQI** | Air Quality Index — a number from 0–500 measuring air pollution. Above 300 is "Hazardous" |
| **Fraud Detection** | The system that checks whether a payout request is genuine or being faked |
| **PWA (Progressive Web App)** | A website that behaves like a mobile app — can be added to home screen, works offline, sends notifications |
| **XGBoost** | A popular ML algorithm great at making predictions from structured data like weather + location history |
| **Isolation Forest** | An ML algorithm that finds unusual patterns — used here to detect suspicious claim behaviour |
| **LSTM** | A type of AI model good at understanding time-based patterns — used here for weather forecasting |
| **UPI** | Unified Payments Interface — India's real-time payment system (PhonePe, GPay, Paytm) |
| **Sandbox / Test Mode** | A safe testing environment for payments where no real money moves but everything works like production |
| **Loss of Income (LOI)** | The money a worker fails to earn because of an external disruption — the only thing GigShield covers |
| **B2B2C** | Business to Business to Consumer — selling to Zomato/Swiggy (businesses) who then offer it to their workers (consumers) |

---

## 👥 Team

Neeraj kumar, Gnanadeep venkat, Venkata Hemanth, M Nikhil, M pravallika

**University:** SRM UNIVERSITY AP
**GitHub Repository:** [Link — same repo used across all 3 phases]
**Phase 1 Demo Video:** [YouTube / Google Drive link]

---

> *"A delivery partner's income shouldn't vanish just because the sky opened up."*
>
> Built with purpose by  Cortex Builders | Guidewire DEVTrails 2026 🛡️