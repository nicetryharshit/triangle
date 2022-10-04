import React from "react";
import { useState } from "react";

var questions = [
  {
    questionText:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    options: ["10", "20", "90"],
    answer: "90"
  },
  {
    questionText:
      "If a triangle has an angle of 90 degrees, what is it called?",
    options: ["Obtuse", "Angled", "Right-angled"],
    answer: "Right-angled"
  },
  {
    questionText: "Which of these is not a type of triangle?",
    options: ["Scalene", "Danny DeVito", "Isosceles"],
    answer: "Danny DeVito"
  },
  {
    questionText: "What is this quiz about?",
    options: ["Computers", "Websites", "Triangles"],
    answer: "Triangles"
  },
  {
    questionText: "How many sides does a triangle have?",
    options: ["3", "5", "87"],
    answer: "3"
  }
];

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length)
  );
  const [result, setResult] = useState();

  const onAnswerChange = (event, index) => {
    let arr = selectedAnswers.slice();
    arr[index] = event.target.value;
    setSelectedAnswers(arr);
  };

  const onSubmit = () => {
    let score = 0;
    for (let index = 0; index < selectedAnswers.length; index++) {
      const userAns = selectedAnswers[index];
      const correctAns = questions[index].answer;
      if (userAns === correctAns) score++;
    }
    setResult("Your score is: " + score);
  };

  return (
    <div className="Quiz">
      <h1>A triangles quiz!</h1>
      <h2>Length of Hypotenuse = sqrt(a² + b²)</h2>
      <section>
        <div>
          {questions.map(function (question, questionIndex) {
            return (
              <div className="quiz-question">
                <label>{question.questionText}</label>
                {question.options.map(function (option) {
                  return (
                    <div onChange={(e) => onAnswerChange(e, questionIndex)}>
                      <input type="radio" name={questionIndex} value={option} />
                      {<label>{option}</label>}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <button className="cta-btn" onClick={() => onSubmit()}>
          Submit answers
        </button>
        <h3>{result}</h3>
      </section>
    </div>
  );
}
