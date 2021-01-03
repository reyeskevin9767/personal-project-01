import React, { useReducer } from 'react';

const SearchBar = ({ onFormSubmit, allDollsNames }) => {
  //* Setting up hooks for multiple inputs for form
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      dollName: 'M9',
      dollLevel: 100,
      dollFriend: 50,
      dollDummyLink: 5,
    }
  );

  //* Deconstructed userInput
  const { dollName, dollLevel, dollFriend, dollDummyLink } = userInput;

  //* Create an array containing a range of numbers
  const optionRanges = (amount) => {
    return [...Array(amount).keys()].map((x) => ++x);
  };

  //* Renders a list of options using an array
  const renderOptions = (ranges) => {
    return ranges.map((range) => {
      return (
        <option key={`${range}`} value={`${range}`}>
          {range}
        </option>
      );
    });
  };

  //* When the select option is change, onSubmit is called
  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(dollName, dollLevel, dollFriend, dollDummyLink);
  };

  //* Used to handle multiple inputs in form
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
            id="dName"
            name="dollName"
            value={dollName}
            onChange={handleChange}
          >
            {renderOptions(allDollsNames)}
          </select>
        </label>
        <label>
          <select
            id="dLevel"
            onChange={handleChange}
            name="dollLevel"
            value={dollLevel}
          >
            {renderOptions(optionRanges(125))}
          </select>
        </label>
        <label>
          <select
            id="dFriend"
            onChange={handleChange}
            name="dollFriend"
            value={dollFriend}
          >
            {renderOptions(optionRanges(150))}
          </select>
        </label>
        <label>
          <select
            id="dLink"
            onChange={handleChange}
            name="dollDummyLink"
            value={dollDummyLink}
          >
            {renderOptions(optionRanges(5))}
          </select>
        </label>
        <button type="sumbit">Submit</button> 
      </form>
    </div>
  );
};

export default SearchBar;
