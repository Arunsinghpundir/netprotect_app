import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [checkStatus, setCheckStatus] = useState("test");
  const [country1, setCountry1] = useState("India");
  const [country2, setCountry2] = useState("Pakistan");
  const [data, setData] = useState([
    ["Pakistan", 23],
    ["Pakistan", 127],
    ["India", 3],
    ["India", 71],
    ["Australia", 31],
    ["India", 22],
    ["Pakistan", 81],
  ]);
  const test_data = [
    ["Pakistan", 23],
    ["Pakistan", 127],
    ["India", 3],
    ["India", 71],
    ["Australia", 31],
    ["India", 22],
    ["Pakistan", 81],
  ];

  //this useEffect will run only if checkStatus, country1 & country2 changes its state,
  useEffect(() => {
    if (checkStatus === "server") {
      // Fetching the data from api if status is "server"
      async function fetchData() {
        try {
          const response = await fetch(
            "https://assessments.reliscore.com/api/cric-scores/"
          );
          const jsonData = await response.json();
          setData(jsonData);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }
    setData(test_data);
  }, [checkStatus, country1, country2]);

  // this below function will calculate the average of the country score
  function calculateAverage(country) {
    const matches = data.filter((match) => match[0] === country);
    const scores = matches.map((match) => match[1]);
    const averageScore =
      scores.reduce((total, score) => total + score, 0) / scores.length;
    return averageScore;
  }

  // this below functions is handling the countries inputs.
  function handleCountry1Change(event) {
    setCountry1(event.target.value);
  }

  function handleCountry2Change(event) {
    setCountry2(event.target.value);
  }
  return (
    <div className="App">
      <form id="checkForm" onChange={(e) => setCheckStatus(e.target.value)}>
        Source of data:
        <div>
          <input
            id="src-test"
            type="radio"
            name="data-source"
            value="test"
            autoFocus
          />
          <label htmlFor="src-local">Test Data</label>
        </div>
        <div>
          <input
            id="src-server"
            type="radio"
            name="data-source"
            value="server"
          />
          <label htmlFor="src-server">Server Data</label>
        </div>
      </form>

      <div className="row">
        <div className="country">
          <form>
            The Country:{" "}
            <input
              className="country-input"
              type="text"
              value={country1}
              onChange={handleCountry1Change}
            />
          </form>
        </div>
        <div className="average">
          The Average: {calculateAverage(country1) || "N/A"}
        </div>
        <div
          className="horiz-bar"
          style={{
            backgroundColor: "blue",
            height: "25px",
            width: `${calculateAverage(country1) || 0}px`,
          }}
        >
          &nbsp;
        </div>
      </div>

      <div className="row">
        <div className="country">
          <form>
            The Country:{" "}
            <input
              className="country-input"
              type="text"
              value={country2}
              onChange={handleCountry2Change}
            />
          </form>
        </div>
        <div className="average">
          The Average: {calculateAverage(country2) || "N/A"}
        </div>
        <div
          className="horiz-bar"
          style={{
            float: "left",
            backgroundColor: "blue",
            height: "25px",
            width: `${calculateAverage(country2) || 0}px`,
          }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
}

export default App;
