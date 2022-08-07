import React from 'react';
import './timeLine.scss';

export default function TimeLine({ marginTop }) {
  const styleTimeLine = {
    marginTop,
  };
  return (
    <div className="timeLine" style={styleTimeLine}>
      <i className="fas fa-circle"></i>
    </div>
  );
}
