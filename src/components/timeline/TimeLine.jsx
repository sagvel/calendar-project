import React, { useState } from 'react';
import './timeLine.scss';

const TimeLine = () => {
  const [linePos, setLinePos] = useState(new Date().getMinutes());
  const styleTimeLine = {
    marginTop: linePos - 60,
  };

  useState(() => {
    const intervalId = setInterval(() => {
      setLinePos(new Date().getMinutes());
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [linePos]);
  return (
    <div className="time-line" style={styleTimeLine}>
      <i className="fas fa-circle"></i>
    </div>
  );
};

export default TimeLine;
