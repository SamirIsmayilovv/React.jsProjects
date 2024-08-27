import React from "react";
import { formatter } from "../util/investment";

const Results = ({ datas }) => {
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest (Year)</th>
            <th>Investment</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((yearData) => {
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{yearData.totalInterest}</td>
                <td>{formatter.format(yearData.annualInvest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Results;
