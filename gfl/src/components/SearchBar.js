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
      dollName: 'M9',
      dollLevel: "50",
      dollFriend: "5",
      dollDummyLink: "3",
    }
  );

  // Create an array to map through for options in select input
  const levelRange = [...Array(125).keys()].map((x) => ++x);

  // Create an array to map through for options in select input
  const friendRange = [...Array(10).keys()].map((x) => ++x);

  // Create an array to map through for options in select input
  const linkRange = [...Array(5).keys()].map((x) => ++x);

  // Render all the names from the allDollsNames array into seperate options
  const renderedList = allDollsNames.map((allDollsNames) => {
    return (
      <option key={`${allDollsNames}`} value={`${allDollsNames}`}>
        {allDollsNames}
      </option>
    );
  });

  // Render all numbers from the levelRange array into seperate options
  const renderLevelList = levelRange.map((level) => {
    return (
      <option key={`${level}`} value={`${level}`}>
        {level}
      </option>
    );
  });

  // Render all numbers from the friendRange array into seperate options
  const renderFriendList = friendRange.map((friend) => {
    return (
      <option key={`${friend}`} value={`${friend}`}>
        {friend}
      </option>
    );
  });

  // Render all numbers from the linkRange array into seperate options
  const renderLinkList = linkRange.map((link) => {
    return (
      <option key={`${link}`} value={`${link}`}>
        {link}
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
    const newName = event.target.name;
    const newValue = event.target.value;

    // Setting value to object key(name) in userInput
    setUserInput({ [newName]: newValue });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <select
            id="dName"
            name="dollName"
            value={userInput.dollName}
            onChange={handleChange}
          >
            {renderedList}
          </select>
        </label>
        <label>
          <select
            id="dLevel"
            onChange={handleChange}
            name="dollLevel"
            value={userInput.dollLevel}
          >
            {renderLevelList}
          </select>
        </label>
        <label>
          <select
            id="dFriend"
            onChange={handleChange}
            name="dollFriend"
            value={userInput.dollFriend}
          >
            {renderFriendList}
          </select>
        </label>
        <label>
          <select
            id="dLink"
            onChange={handleChange}
            name="dollDummyLink"
            value={userInput.dollDummyLink}
          >
            {renderLinkList}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
