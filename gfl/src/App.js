import React, { useState, useEffect } from 'react';
import { dolls } from 'girlsfrontline-core';
import SearchBar from './components/SearchBar';
import DollStats from './components/DollStats';

// Standard format -> 100 Level -> 50 Friendship -> Any DummyLink (Hp Only Affected)

const App = () => {
  // Get info about current T-Doll stats and overall info about T-Doll
  const [dollStats, setDollStats] = useState({});
  const [dollInfo, setDollInfo] = useState({});
  const allDollsNames = [];

  // Loop through all dolls to get all T-Doll Names
  for (let doll in dolls) {
    allDollsNames.push(dolls[doll].codename);
  }

  useEffect(() => {
    onFormSubmit('M9', 100, 50, 5);
  }, []);

  // Pass down onFormSubmit to SearchBar to pass info to other components
  const onFormSubmit = (name, level, favor, dummyLink) => {
    const doll = dolls.find(({ codename }) => codename === name);

    // Current T-Doll Stats
    doll.level = level;
    doll.dummyLink = dummyLink;
    doll.favor = favor;

    // Storing T-Doll Info
    setDollInfo(doll);
    setDollStats(doll.stats);
  };

  // Debug Purposes
  // console.log(dollInfo.dummyLink);
  // console.log(dollStats);

  return (
    <div>
      <h1>Found Out the Stats</h1>
      <SearchBar
        onFormSubmit={onFormSubmit}
        allDollsNames={allDollsNames.sort()}
      />
      <DollStats dollStats={dollStats} dummyLink={dollInfo.dummyLink} />
    </div>
  );
};

export default App;
