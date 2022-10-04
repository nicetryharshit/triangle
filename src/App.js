import "./styles.css";
import Quiz from "./quiz.js";
import Hypotenuse from "./hypotenuse.js";
import IsTriangle from "./isTriangle";
import Area from "./area.js";

import { useState } from "react";

export default function App() {
  const [pageName, setPageName] = useState("Quiz");
  const onNavBtnClick = (event) => {
    console.log(event.target.innerText);
    setPageName(event.target.innerText);
  };

  const Content = () => {
    if (pageName === "Quiz") return <Quiz />;
    if (pageName === "Hypotenuse") return <Hypotenuse />;
    if (pageName === "Is Triangle?") return <IsTriangle />;
    if (pageName === "Area") return <Area />;
  };
  return (
    <div className="App">
      <section className="nav-bar">
        <button className="nav-btn" onClick={onNavBtnClick}>
          Quiz
        </button>
        <button className="nav-btn" onClick={onNavBtnClick}>
          Hypotenuse
        </button>
        <button className="nav-btn" onClick={onNavBtnClick}>
          Is Triangle?
        </button>
        <button className="nav-btn" onClick={onNavBtnClick}>
          Area
        </button>
      </section>
      <section>
        <Content />
      </section>
    </div>
  );
}
