// import { useState } from "react"
export default function UserInput({onChange, userInput}){
    
    return (
        <section id="user-input">
  <div className="input-group">
    <p>
      <label htmlFor="initialInvestment">Initial Investment</label>
      <input
        type="number"
        id="initialInvestment"
        required
        onChange={(event) =>
            onChange("initialInvestment", +event.target.value)
        }
        value={userInput.initialInvestment}
      />
    </p>
    <p>
      <label htmlFor="annualInvestment">Annual Investment</label>
      <input
        type="number"
        id="annualInvestment"
        required
        onChange={(event) =>
            onChange("annualInvestment", +event.target.value)
        }
        value={userInput.annualInvestment}
      />
    </p>
    <p>
      <label htmlFor="expectedReturn">Expected Return</label>
      <input
        type="number"
        id="expectedReturn"
        required
        onChange={(event) =>
            onChange("expectedReturn", +event.target.value)
        }
        value={userInput.expectedReturn}
      />
    </p>
    <p>
      <label htmlFor="duration">Duration</label>
      <input
        type="number"
        id="duration"
        required
        onChange={(event) =>
            onChange("duration", +event.target.value)
        }
        value={userInput.duration}
      />
    </p>
  </div>
</section>

      );
    }      