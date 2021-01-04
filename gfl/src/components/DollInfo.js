import React from 'react';

const DollInfo = ({ dollInfo, moreInfo }) => {
  const findDollInfo = (info) => {
    return moreInfo[info];
  };

  const findDollskill = (skill) => {
    const skill1 = dollInfo.skill1
    return skill1[skill];
  };

  const convertMinsToHour = (seconds) => {
    const convertSecondsToMinutes = seconds / 60;
    let hour = Math.floor(convertSecondsToMinutes / 60);
    let mins = convertSecondsToMinutes % 60;
    hour = hour < 10 ? '0' + hour : hour;
    mins = mins < 10 ? '0' + mins : mins;
    return hour + ':' + mins;
  };

  console.log(dollInfo);
  // Can use function parameter as object proptery with []

  const renderedArray = (dollinfo, infoOfDoll, newInfo) => {
    return infoOfDoll.map((info, index) => {
      return <p key={`${index}`}>{dollinfo(info[newInfo])}</p>;
    });
  };
  const renderedArray2 = (infoOfDoll) => {
    return infoOfDoll.map((info, index) => {
      return <p key={`${index}`}>{info}</p>;
    });
  };

  const newcode = dollInfo.effect
  const newcode2 = newcode.gridEffect;


  const renderContent = () => {
    if (Object.keys(dollInfo).length !== 0) {
      return (
        <div>
          <p>
            {dollInfo.codename} - {dollInfo.type}
          </p>
          <p>Construction Time - {convertMinsToHour(dollInfo.buildTime)}</p>
          {renderedArray(findDollInfo, dollInfo.obtain, 'description')}
          {renderedArray(findDollInfo, dollInfo.skins, 'name')}
          {renderedArray2(dollInfo.equip1)}
          {renderedArray2(dollInfo.equip2)}
          {renderedArray2(newcode.effectPos)}
          {newcode.effectCenter}
          {/* {newcode2.pow} Instead of this do findDollSkill similar */}
          {newcode2.dodge}
          {findDollskill('codename')}
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default DollInfo;
