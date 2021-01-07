import React from 'react';

const DollDetails = ({ dollDetails, inDepthDetails }) => {
  //* Convert Seconds to hour format
  const convertMinsToHour = (seconds) => {
    const convertSecondsToMinutes = seconds / 60;
    let hour = Math.floor(convertSecondsToMinutes / 60);
    let mins = convertSecondsToMinutes % 60;
    hour = hour < 10 ? '0' + hour : hour;
    mins = mins < 10 ? '0' + mins : mins;
    return hour + ':' + mins;
  };

  //* Search through the JSON file to find more depth info about T-Doll
  const findDollInfo = (info) => {
    return inDepthDetails[info];
  };

  // const findDollskill = (skill) => {
  //   const skill1 = dollInfo.skill1
  //   return skill1[skill];
  // };

  const newValue = dollDetails.effect;

  if (Object.keys(dollDetails).length !== 0) {
    console.log(newValue.effectCenter);
  }

  const renderedDollEffects = () => {
    const getEffects = dollDetails.effect;
    const getGridEffects = getEffects.gridEffect;

    const getEffectPos = getEffects.effectPos.map((item) => {
      return <p>{item}</p>;
    });

    const getGridPosEffects = (
      <p>{`Dodge - ${getGridEffects.dodge}, ${getGridEffects.pow}`}</p>
    );

    return (
      <div>
        <p>{getEffects.effectCenter} </p>
        {getEffectPos}
        <p>{getEffects.effectType} </p>
        {getGridPosEffects}
      </div>
    );
  };

  // Can use function parameter as object proptery with []
  const renderedArray = (dollinfo, infoOfDoll, newInfo) => {
    return infoOfDoll.map((info, index) => {
      return <p key={`${index}`}>{dollinfo(info[newInfo])}</p>;
    });
  };

  console.log(dollDetails);

  // const renderedArray2 = (infoOfDoll) => {
  //   return infoOfDoll.map((info, index) => {
  //     return <p key={`${index}`}>{info}</p>;
  //   });
  // };

  // const newcode = dollInfo.effect
  // const newcode2 = newcode.gridEffect;

  const renderContent = () => {
    if (Object.keys(dollDetails).length !== 0) {
      return (
        <div>
          <p>
            {dollDetails.codename} - {dollDetails.type}{' '}
          </p>
          <p>Construction Time - {convertMinsToHour(dollDetails.buildTime)}</p>
          {renderedDollEffects()}
          {/* {renderedArray(findDollInfo, dollDetails.obtain, 'description')}
          {renderedArray(findDollInfo, dollDetails.skins, 'name')} */}
          {/* {renderedArray2(dollInfo.equip1)}
          {renderedArray2(dollInfo.equip2)}
          {renderedArray2(newcode.effectPos)}
          {newcode.effectCenter} */}
          {/* {newcode2.pow} Instead of this do findDollSkill similar */}
          {/* {newcode2.dodge} */}
          {/* {findDollskill('codename')} */}
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default DollDetails;
