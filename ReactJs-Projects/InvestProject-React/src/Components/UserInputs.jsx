import { useState } from "react";
import UserInput from "./UserInput";

export const UserInputs = ({ getData }) => {
  const [userInput, setUserInput] = useState({
    initialInvest: 10000,
    annualInvest: 1200,
    expectedReturn: 5,
    Duration: 10,
  });

  const handleInput = (identifier, data) => {
    setUserInput((prevUser) => ({
      ...prevUser,
      [identifier]: +data,
    }));

    getData(userInput);
  };

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <UserInput
            name={"Initial Investment"}
            onChange={handleInput}
            identifier={"initialInvest"}
            value={userInput.initialInvest}
          />
          <UserInput
            name={"Annual Invest"}
            onChange={handleInput}
            identifier={"annualInvest"}
            value={userInput.annualInvest}
          />
        </div>

        <div className="input-group">
          <UserInput
            name={"Expected Return"}
            onChange={handleInput}
            identifier={"expectedReturn"}
            value={userInput.expectedReturn}
          />
          <UserInput
            name={"Duration"}
            onChange={handleInput}
            identifier={"Duration"}
            value={userInput.Duration}
          />
        </div>
      </section>
    </>
  );
};

export default UserInputs;
