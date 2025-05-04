import { useState } from "react"
export default function UserInput(){
    const[userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment:1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput =>{
            return{
                ...prevUserInput,
                [inputIdentifier]:newValue
            };
        });
    }

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
          handleChange("initialInvestment", +event.target.value)
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
          handleChange("annualInvestment", +event.target.value)
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
          handleChange("expectedReturn", +event.target.value)
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
          handleChange("duration", +event.target.value)
        }
        value={userInput.duration}
      />
    </p>
  </div>
</section>

      );
    }      