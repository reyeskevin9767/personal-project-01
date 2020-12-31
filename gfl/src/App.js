import React, { useState } from 'react';
import { dolls } from 'girlsfrontline-core';
import SearchBar from './components/SearchBar';

const App = () => {
  // Get info about current T-Doll stats and overall info about T-Doll
  const [dollStats, setDollStats] = useState({});
  const [dollInfo, setDollInfo] = useState({});
  const allDollsNames = [];

  // Loop through all dolls to get all T-Doll Names
  for (let doll in dolls) {
    allDollsNames.push(dolls[doll].codename);
  }

  // Pass down onFormSubmit to SearchBar to pass info to other components
  const onFormSubmit = (name, level, favor, dummyLink) => {
    const doll = dolls.find(({ codename }) => codename === name);

    // Current T-Doll Stats
    doll.level = level;
    doll.favor = favor;
    doll.dummyLink = dummyLink;

    // Storing T-Doll Info
    setDollInfo(doll);
    setDollStats(doll.stats);
  };

  // Debug Purposes
  console.log(dollInfo);
  console.log(dollStats);

  return (
    <div>
      <SearchBar onFormSubmit={onFormSubmit} allDollsNames={allDollsNames} />
    </div>
  );
};

export default App;
