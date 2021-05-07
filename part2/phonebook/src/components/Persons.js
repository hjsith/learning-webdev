import React from "react";

const Persons = ({ peopleToShow }) => {
  return peopleToShow.map((person) => (
    <div key={person.name}>
      {person.name} {person.number}
    </div>
  ));
};

export default Persons;
