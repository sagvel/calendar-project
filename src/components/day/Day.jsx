import React, { useState } from 'react';
import Hour from '../hour/Hour';
import TimeLine from '../timeline/TimeLine';

import './day.scss';

const Day = ({ dataDay, dayStart, dayEvents, handleDelete }) => {
  const [linePos, setLinePos] = useState(new Date().getMinutes());
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const isCurrentHour = new Date().getHours();
  const isCurrentDay =
    new Date().getDate() === dayStart.getDate() &&
    new Date().getMonth() === dayStart.getMonth();

  useState(() => {
    const intervalId = setInterval(() => {
      setLinePos(new Date().getMinutes());
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [linePos]);
  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <div key={dataDay + hour}>
            <Hour
              dataHour={hour}
              hourEvents={hourEvents}
              handleDelete={handleDelete}
            />
            {isCurrentHour === hour && isCurrentDay && (
              <TimeLine marginTop={linePos - 60} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Day;
