import React, { useReducer } from 'react';

const SearchBar = ({ onFormSubmit }) => {
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

  // When the form is submit, run onFormSubmit from App Component
  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(
      userInput.dollName,
      parseInt(userInput.dollLevel),
      parseInt(userInput.dollFriend),
      parseInt(userInput.dollDummyLink)
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
          <input
            onChange={handleChange}
            name="dollName"
            value={userInput.dollName}
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            name="dollLevel"
            value={userInput.dollLevel}
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            name="dollFriend"
            value={userInput.dollFriend}
          />
        </label>
        <label>
          <input
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
