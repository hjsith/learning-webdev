import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  const parts = course.parts;
  const content = parts.map((part) => <Part key={part.id} part={part} />);
  return <div>{content}</div>;
};

export default Content;
