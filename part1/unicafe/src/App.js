import React, { useState } from "react";

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => {
  if (text === "positive") value = value + " %";
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total, average }) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <table>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={(good / total) * 100} />
      </table>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };

  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };

  const incrementBad = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;

  return (
    <div>
      <Heading text="give feedback" />
      <Button handleClick={incrementGood} text="good" />
      <Button handleClick={incrementNeutral} text="neutral" />
      <Button handleClick={incrementBad} text="bad" />
      <Heading text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
      />
    </div>
  );
};

export default App;
