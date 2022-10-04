import "./styles.css";
import React from "react";
import { useState } from "react";
export default function Hypotenuse() {
  const [sideA, setSideA] = useState(0);
  const [sideB, setSideB] = useState(0);
  const [result, setResult] = useState();

  const onSideAChange = (event) => {
    setSideA(event.target.value);
  };
  const onSideBChange = (event) => {
    setSideB(event.target.value);
  };

  const onCalculateHypotenuse = () => {
    let hypo = Math.sqrt(
      Number(sideA) * Number(sideA) + Number(sideB) * Number(sideB)
    );
    setResult("The hypotenuse is: " + hypo + " cm");
  };
  return (
    <div className="Hypotenuse">
      <h1>Hypotenuse?</h1>
      <h2>Length of Hypotenuse = sqrt(a² + b²)</h2>
      <section>
        <label>a = : </label>
        <input type="number" onChange={onSideAChange}></input>
        <label>b = : </label>
        <input type="number" onChange={onSideBChange}></input>
        <button className="cta-btn" onClick={() => onCalculateHypotenuse()}>
          Calculate Hypotenuse
        </button>
        <h3>{result}</h3>
      </section>
    </div>
  );
}
