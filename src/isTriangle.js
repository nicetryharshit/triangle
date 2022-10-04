import "./styles.css";
import React from "react";
import { useState } from "react";

export default function IsTriangle() {
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(0);
  const [angle3, setAngle3] = useState(0);
  const [result, setResult] = useState();

  const onAngle1Change = (event) => {
    setAngle1(event.target.value);
  };
  const onAngle2Change = (event) => {
    setAngle2(event.target.value);
  };
  const onAngle3Change = (event) => {
    setAngle3(event.target.value);
  };

  const onCheckIfTriangle = () => {
    let total = Number(angle1) + Number(angle2) + Number(angle3);
    if (total === 180) {
      setResult("The angles form a triangle!");
    } else {
      setResult("The angles DO NOT form a triangle.");
    }
  };

  return (
    <div className="IsTriangle">
      <h1>Is Triangle?</h1>
      <h2>Check if the angles form a triangle</h2>
      <section>
        <label>angle 1 (in degrees): </label>
        <input type="number" onChange={onAngle1Change}></input>
        <label>angle 2 (in degrees): </label>
        <input type="number" onChange={onAngle2Change}></input>
        <label>angle 3 (in degrees): </label>
        <input type="number" onChange={onAngle3Change}></input>
        <button className="cta-btn" onClick={() => onCheckIfTriangle()}>
          Is Triangle?
        </button>
        <h3>{result}</h3>
      </section>
    </div>
  );
}
