import React, { useState, useEffect } from 'react';
import { dolls, equips, fairies } from 'girlsfrontline-core';

const App = () => {
  const onInput = (dollName, dollLevel) => {
    const doll = dolls.find(({ codename }) => codename === dollName);
    doll.level = dollLevel;
    console.log(doll.stats);
    return doll;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onInput(term, level);
  };

  const [term, setTerm] = useState('');
  const [level, setLevel] = useState(4);

  // g36.level = 1;
  // g36.dummyLink = 3;
  // g36.favor = 50;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <input onChange={(e) => setTerm(e.target.value)} value={term} />
        </label>
        <label>
          <input
            type="number"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
            min="1"
            max="100"
          />
        </label>
      </form>
    </div>
  );
};

export default App;
