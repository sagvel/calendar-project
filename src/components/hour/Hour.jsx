import React from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import PropTypes from 'prop-types';

const Hour = ({ dataHour, hourEvents, handleDelete }) => {
  const oneMinute = 1000 * 60;
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            height={(dateTo.getTime() - dateFrom.getTime()) / oneMinute}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            handleDelete={handleDelete}
            id={id}
          />
        );
      })}
    </div>
  );
};

Hour.propsType = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.arrayOf(
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

Hour.defaultProps = {
  hourEvents: PropTypes.arrayOf(
    PropTypes.shape({
      description: '',
      title: '',
    })
  ),
};

export default Hour;
