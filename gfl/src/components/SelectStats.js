import React, { useReducer, useEffect } from 'react';

const SelectStats = ({ onFormSubmit, allDollsNames }) => {
  //* Using useReducer hook to store values from select input
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

  useEffect(() => {
    onFormSubmit(dollName, dollLevel, dollFriendship, dollDummyLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

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
          {renderOptions(optionRanges(200))}
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
    </div>
  );
};

export default SelectStats;
