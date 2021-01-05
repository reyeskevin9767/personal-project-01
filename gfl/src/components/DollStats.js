import React from 'react';

const DollStats = ({ dollStats, dummyLink }) => {
//* Deconstrcuted all values from dollStats including adding ones specific
//* to certain T-Dolls
  const {
    armor = 0,
    armorPiercing,
    criticalPercent,
    dodge,
    hit,
    hp,
    pow,
    rate,
    speed,
    critDamage = 50,
  } = dollStats;

  return (
    <div>
      <p>Health - {(hp / 5) * dummyLink}</p>
      <p>Damage - {pow}</p>
      <p>Evasion - {dodge}</p>
      <p>Accuracy - {hit}</p>
      <p>Rate of Fire - {rate}</p>
      <p>Movement Speed - {speed}</p>
      <p>Armor - {armor}%</p>
      <p>Crit. Rate - {criticalPercent}%</p>
      <p>Crit. Damage - {critDamage}%</p>
      <p>Armor Piercing - {armorPiercing}</p>
    </div>
  );
};

export default DollStats;
