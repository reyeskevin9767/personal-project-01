import React, { useState, useReducer } from 'react';
import { dolls } from 'girlsfrontline-core';

const App = () => {
  const onInput = (name, level) => {
    const doll = dolls.find(({ codename }) => codename === name);

    doll.level = 1;
    doll.favor = 0;
    doll.dummyLink= 1;
    console.log(doll.stats);

    setdollInfo(doll);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onInput(userInput.dollName, parseInt(userInput.dollLevel));
  };

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      dollName: 'G36',
      dollLevel: '4',
    }
  );

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    setUserInput({ [name]: newValue });
  };

  const [dollInfo, setdollInfo] = useState({});

  console.log(dollInfo);

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
