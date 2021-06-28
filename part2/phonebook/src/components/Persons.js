import React from "react";
import Person from "./Person";

const Persons = ({ peopleToShow, deletePerson }) => {
  return (
    <div>
      {peopleToShow.map((person, i) =>
          <Person key={i} person={person} deletePerson={deletePerson} />
        )}
    </div>
  );
};

export default Persons;
