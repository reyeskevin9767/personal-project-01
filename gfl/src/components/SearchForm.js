import React, { useReducer } from 'react';

const SearchForm = ({ onFormSubmit, allDollsNames }) => {
  //* Using useReducer hook to store inputs from form
  const [userInput, setUserInput] = useReducer(
    // Matching the default values
    (state, newState) => ({ ...state, ...newState }),
    {
      dollName: 'M9',
      dollLevel: 100,
      dollFriendship: 50,
      dollDummyLink: 5,
    }
  );

  //* Deconstructed userInput
  const { dollName, dollLevel, dollFriendship, dollDummyLink } = userInput;

  //* Create an array containing a range of numbers
  const optionRanges = (amount) => {
    return [...Array(amount).keys()].map((x) => ++x);
  };

  //* Renders a list of options using an array
  const renderOptions = (option) => {
    return option.map((choice) => {
      return (
        <option key={`${choice}`} value={`${choice}`}>
          {choice}
        </option>
      );
    });
  };

  //* Send values from form into onFormSubmit function
  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(dollName, dollLevel, dollFriendship, dollDummyLink);
  };

  //* Used to handle multiple inputs in form when they change
  const handleChange = (event) => {
    // Destructing name and value from event
    const {
      target: { name, value },
    } = event;

    // Dynamically set name to value
    setUserInput({ [name]: value });
  };

  //* JSX
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <select
            id="selectName"
            name="dollName"
            value={dollName}
            onChange={handleChange}
          >
            {renderOptions(allDollsNames)}
          </select>
        </label>
        <label>
          <select
            id="selectLevel"
            onChange={handleChange}
            name="dollLevel"
            value={dollLevel}
          >
            {renderOptions(optionRanges(125))}
          </select>
        </label>
        <label>
          <select
            id="selectFriendship"
            onChange={handleChange}
            name="dollFriendship"
            value={dollFriendship}
          >
            {renderOptions(optionRanges(150))}
          </select>
        </label>
        <label>
          <select
            id="selectLink"
            onChange={handleChange}
            name="dollDummyLink"
            value={dollDummyLink}
          >
            {renderOptions(optionRanges(5))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
