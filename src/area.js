import "./styles.css";
import React from "react";
import { useState } from "react";

export default function Area() {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState();

  const onBaseChange = (event) => {
    setBase(event.target.value);
  };
  const onHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const onCalculateArea = () => {
    let area = (Number(base) * Number(height)) / 2;
    setResult("The area is: " + area + " cm²");
  };
  return (
    <div className="Area">
      <h1>Area?</h1>
      <h2>Area of a triangle = 1/2(Base * Height)</h2>
      <section>
        <label>Base (in cm) = : </label>
        <input onChange={onBaseChange}></input>
        <label>Height (in cm) = : </label>
        <input onChange={onHeightChange}></input>
        <button className="cta-btn" onClick={() => onCalculateArea()}>
          Calculate Area
        </button>
        <h3>{result}</h3>
      </section>
    </div>
  );
}
