import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import {
  getWeekStartDate,
  generateWeekRange,
  months,
} from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isModal, setIsModal] = useState(false);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const currentMonth = months[weekDates[0].getMonth()];
  const nextMonth = months[weekDates[weekDates.length - 1].getMonth()];

  const nextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
    );
  };
  const prevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
  };

  const currentWeek = () => {
    setWeekStartDate(new Date());
  };

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <Header
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        currentWeek={currentWeek}
        openModal={openModal}
        currentMonth={currentMonth}
        nextMonth={nextMonth}
      />
      <Calendar
        weekDates={weekDates}
        isModal={isModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default App;
