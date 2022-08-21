import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import { days } from '../../utils/dateUtils.js';
import './navigation.scss';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        const isCurrentDay =
          moment(dayDate).valueOf() === moment().startOf('day').valueOf();

        return (
          <div className="calendar__day-label day-label" key={Math.random()}>
            <span
              className={classNames('day-label__day-name', {
                'day-label__day-name_current': isCurrentDay,
              })}
            >
              {days[dayDate.getDay()]}
            </span>
            <span
              className={classNames('day-label__day-number', {
                'day-label__day-number_current': isCurrentDay,
              })}
            >
              {dayDate.getDate()}
            </span>
          </div>
        );
      })}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navigation;
