import React from "react";

const Total = ({ course }) => {
  const total = course.parts
    .map((part) => part.exercises)
    .reduce((s, p) => s + p);

  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
};

export default Total;
