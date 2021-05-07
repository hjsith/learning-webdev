import React from "react";

const PersonForm = ({
  handleFormSubmit,
  handleNameFormChange,
  handleNumberFormChange,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameFormChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberFormChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
