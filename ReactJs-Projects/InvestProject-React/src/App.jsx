import { useState } from "react";
import Header from "./Components/Header";
import UserInputs from "./Components/UserInputs";
import { calculateInvestmentResults } from "./util/investment";
import Results from "./Components/Results";

function App() {
  const [finalData, setFinalData] = useState([]);

  const getData = (data) => {
    const investmentResults = calculateInvestmentResults(data);
    setFinalData(investmentResults);
  };

  console.log(finalData);
  return (
    <>
      <Header />
      <UserInputs getData={getData} />
      <Results datas={finalData} />
    </>
  );
}

export default App;
