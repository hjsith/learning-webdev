import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import phonebookService from "./services/people";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const peopleHook = () => {
    phonebookService.getAll().then((people) => {
      setPersons(people);
    });
  };

  useEffect(peopleHook, []);

  const deletePerson = (id) => {
    const filteredPerson = persons.filter(person => person.id === id)
    const personName = filteredPerson[0].name
    const personId = filteredPerson[0].id
    if (window.confirm(`Delete ${personName}?`)) {
      phonebookService.deletePerson(personId)
      setPersons(persons.filter(person => person.id !== personId))
    }
  }

  const handleFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleNameFormChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberFormChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {

      const person = persons.filter((person) =>
        person.name === newName
      )
      const personToAdd = person[0]
      const updatedPerson = { ...personToAdd, number: newNumber }

      if (window.confirm(`${personToAdd.name} is already added to phonebook, replace the old number with a new one?`)) {
        phonebookService.update(updatedPerson.id, updatedPerson).then(response => {
          setPersons(persons.map(personsObject => personsObject.id !== response.id ? personsObject : response))
          setNewName('')
          setNewNumber('')
        });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      phonebookService.create(personObject)
        .then((response) => {
          setPersons(persons.concat(response));
          setNewName("");
          setNewNumber("");
          setNameFilter("");
      });
    }
  };

  const peopleToShow = persons.filter((person) =>
    person.name.includes(nameFilter)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        handleFormSubmit={handleFormSubmit}
        handleNameFormChange={handleNameFormChange}
        handleNumberFormChange={handleNumberFormChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons peopleToShow={peopleToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
