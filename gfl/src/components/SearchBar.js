import React, { useReducer } from 'react';

const SearchBar = ({ onFormSubmit, allDollsNames }) => {
  // Setting up hooks for multiple inputs for form
  // Name -> T-Doll's Name
  // Level -> Currrent Level of T-Doll
  // Friend -> Friendship Level with T-Doll
  // Dummy Link -> Number of Support Units for T-Doll
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      dollName: '',
      dollLevel: '',
      dollFriend: '',
      dollDummyLink: '',
    }
  );

  // Render all the names from the allDollsNames array into seperate options
  const renderedList = allDollsNames.map((allDollsNames) => {
    return (
      <option key={`${allDollsNames}`} value={`${allDollsNames}`}>
        {allDollsNames}
      </option>
    );
  });

  // When the form is submit, run onFormSubmit from App Component
  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(
      userInput.dollName,
      userInput.dollLevel,
      userInput.dollFriend,
      userInput.dollDummyLink
    );
  };

  // Used to handle multiple inputs in form
  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    // Setting value to object key(name) in userInput
    setUserInput({ [name]: newValue });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <select
            name="dollName"
            value={userInput.dollName}
            onChange={handleChange}
          >
            {renderedList}
          </select>
        </label>
        <label>
          <input
            type="number"
            min="1"
            max="120"
            onChange={handleChange}
            name="dollLevel"
            value={userInput.dollLevel}
          />
        </label>
        <label>
          <input
            type="number"
            min="1"
            max="150"
            onChange={handleChange}
            name="dollFriend"
            value={userInput.dollFriend}
          />
        </label>
        <label>
          <input
            type="number"
            min="1"
            max="5"
            onChange={handleChange}
            name="dollDummyLink"
            value={userInput.dollDummyLink}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
