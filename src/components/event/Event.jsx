import React from 'react';

import './event.scss';

const Event = ({ id, height, marginTop, title, time, handleDelete }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event" onClick={() => handleDelete(id)}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
