import React from 'react';
import Day from '../day/Day';
import PropTypes from 'prop-types';
import './week.scss';

const Week = ({ weekDates, events, handleDelete }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            dayStart={dayStart}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.arrayOf(PropTypes.object).isRequired,
  events: PropTypes.arrayOf(
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

Week.defaultProps = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      description: '',
      title: '',
    })
  ),
};

export default Week;
