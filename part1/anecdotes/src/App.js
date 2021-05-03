import React, { useState } from "react";

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const BestAnecdote = ({ points, anecdotes }) => {
  const maxVote = Math.max(...points);
  let index = points.indexOf(maxVote);

  return (
    <>
      <p>{anecdotes[index]}</p>
      <p>has {maxVote} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const anecdoteButton = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const voteButton = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <>
      <Heading text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <div>
        <Button handleClick={voteButton} text="vote" />
        <Button handleClick={anecdoteButton} text="next anecdote" />
      </div>
      <Heading text="Anecdote with most votes" />
      <BestAnecdote points={points} anecdotes={anecdotes} />
    </>
  );
};

export default App;
