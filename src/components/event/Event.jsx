import React from 'react';
import DelModal from '../delModal/DelModal';
import PropTypes from 'prop-types';
import './event.scss';

const Event = ({ id, height, marginTop, title, time, handleDelete }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <DelModal id={id} handleDelete={handleDelete} />
    </div>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string,
  time: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

Event.dafaultProps = {
  title: '',
};

export default Event;
