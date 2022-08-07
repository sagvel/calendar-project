import React from 'react';
import DelModal from '../delModal/DelModal';
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

export default Event;
