import React from 'react';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, handleDelete }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  // console.log(dataDay, dayEvents);
  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default Day;
