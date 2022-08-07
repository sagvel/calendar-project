import React from 'react';
import PropTypes from 'prop-types';
import './timeLine.scss';

const TimeLine = ({ marginTop }) => {
  const styleTimeLine = {
    marginTop,
  };
  return (
    <div className="timeLine" style={styleTimeLine}>
      <i className="fas fa-circle"></i>
    </div>
  );
};

TimeLine.propTypes = {
  marginTop: PropTypes.number.isRequired,
};

export default TimeLine;
