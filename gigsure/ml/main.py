from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI(title="GigSure ML API")

class PolicyData(BaseModel):
    zone: str
    zone_risk_score: float
    seasonal_index: float
    tenure_months: int
    daily_earnings: float
    historical_claims: int

@app.post("/calculate-premium")
def calculate_premium(data: PolicyData):
    """
    Simulated XGBoost calculation for Gig Worker premiums.
    Uses rule-based proxies for now. Base is ₹40. 
    """
    base_premium = 40.0
    
    # Simple risk rule simulation
    risk_adjustment = data.zone_risk_score * 0.1 * base_premium
    seasonal_adjustment = (data.seasonal_index - 1.0) * base_premium
    
    # Tenure discount: -2% per month up to 20%
    tenure_discount_pct = min(data.tenure_months * 0.02, 0.20)
    tenure_discount = base_premium * tenure_discount_pct
    
    # Historical penalty
    historical_penalty = data.historical_claims * 5.0

    raw_premium = (
        base_premium 
        + risk_adjustment 
        + seasonal_adjustment 
        - tenure_discount 
        + historical_penalty
    )

    # Ensure min floor premium
    final_premium = max(raw_premium, 20.0)
    
    # The hackathon specifically asked for 3 fixed plan plans adjusted
    # The calculated premium sets the 'Standard' tier, 
    # we make Basic and Premium relative to it.
    
    return {
        "status": "success",
        "breakdown": {
            "base": round(base_premium, 2),
            "zone_risk_adjustment": round(risk_adjustment, 2),
            "seasonal_adjustment": round(seasonal_adjustment, 2),
            "tenure_discount": round(-tenure_discount, 2),
            "claims_penalty": round(historical_penalty, 2),
            "calculated_standard_premium": round(final_premium, 2)
        },
        "plans": {
            "Basic": round(final_premium * 0.6, 2),
            "Standard": round(final_premium, 2),
            "Premium": round(final_premium * 1.5, 2)
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
