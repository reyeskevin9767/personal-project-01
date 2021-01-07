import React, { useState, useEffect } from 'react';
import { dolls } from 'girlsfrontline-core';
import SelectStats from './components/SelectStats';
import DollStats from './components/DollStats';
// import DollDetails from './components/DollDetails';
// import InDepthDetails from './gfcore.json';

const App = () => {
  //* Store the stats and details about T-Doll
  const [dollStats, setDollStats] = useState({});
  const [dollDetails, setDollDetails] = useState({});

  //* Create an array contaning all T-Dolls names
  const allDollsNames = [];

  for (let doll in dolls) {
    allDollsNames.push(dolls[doll].codename);
  }

  //* After first render, call onFormSubmit to have a default T-Doll
  useEffect(() => {
    onFormSubmit('M9', 100, 50, 5);
  }, []);

  //* Function -> Pass down to child, finds the specific T-doll
  //* along with calculating stats and getting all T-Doll's details
  const onFormSubmit = (name, level, friendship, dummyLink) => {
    const doll = dolls.find(({ codename }) => codename === name);

    doll.level = level;
    doll.dummyLink = dummyLink;
    doll.favor = friendship;

    setDollDetails(doll);
    setDollStats(doll.stats);
  };

  console.log(dollStats);

  return (
    <div>
      <h1>Found Out the Stats</h1>
      <SelectStats
        onFormSubmit={onFormSubmit}
        allDollsNames={allDollsNames.sort()}
      />
      <DollStats dollStats={dollStats} dummyLink={dollDetails.dummyLink} />
      {/* <DollDetails dollDetails={dollDetails} inDepthDetails={InDepthDetails}/> */}
    </div>
  );
};

export default App;
