import React from 'react';

import './header.scss';

const Header = ({
  getNextWeek,
  getPrevWeek,
  getCurrentWeek,
  currentMonth,
  nextMonth,
}) => {
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={getCurrentWeek}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={getPrevWeek}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={getNextWeek}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {currentMonth === nextMonth
            ? currentMonth
            : `${currentMonth} - ${nextMonth}`}
        </span>
      </div>
    </header>
  );
};

export default Header;
