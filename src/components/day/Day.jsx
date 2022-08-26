import React from 'react';
import Hour from '../hour/Hour';
import TimeLine from '../timeline/TimeLine';
import PropTypes from 'prop-types';
import moment from 'moment';
import './day.scss';

const Day = ({ dataDay, dayStart, dayEvents, handleDelete }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const isCurrentHour = new Date().getHours();
  const isCurrentDay =
    moment(dayStart).valueOf() === moment().startOf('day').valueOf();

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
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
            {isCurrentHour === hour && isCurrentDay && <TimeLine />}
          </div>
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayStart: PropTypes.instanceOf(Date).isRequired,
  dayEvents: PropTypes.arrayOf(
    PropTypes.shape({
      dateFrom: PropTypes.instanceOf(Date).isRequired,
      dateTo: PropTypes.instanceOf(Date).isRequired,
      description: PropTypes.string,
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

Day.defaultProps = {
  dayEvents: PropTypes.arrayOf(
    PropTypes.shape({
      description: '',
      title: '',
    })
  ),
};

export default Day;
