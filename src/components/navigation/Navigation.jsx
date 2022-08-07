import React, { useEffect } from 'react';
import classNames from 'classnames';

import { days } from '../../utils/dateUtils.js';
import './navigation.scss';

const Navigation = ({ weekDates }) => {
  // const currentDay = new Date().getDate();
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        const isCurrentDay =
          new Date().getDate() === dayDate.getDate() &&
          new Date().getMonth() === dayDate.getMonth();
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

export default Navigation;
