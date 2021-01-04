import React from 'react';

const DollInfo = ({ dollInfo, moreInfo }) => {
  const findDollInfo = (info) => {
    return moreInfo[info];
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

  const renderedArray = (dollinfo, infoOfDoll) => {
    return infoOfDoll.map((info, index) => {
      return <p key={`${index}`}>{dollinfo(info.description)}</p>;
    });
  };

  const renderContent = () => {
    if (Object.keys(dollInfo).length !== 0) {
      return (
        <div>
          <p>
            {dollInfo.codename} - {dollInfo.type}
          </p>
          <p>Construction Time - {convertMinsToHour(dollInfo.buildTime)}</p>
          {renderedArray(findDollInfo, dollInfo.obtain)}
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default DollInfo;
