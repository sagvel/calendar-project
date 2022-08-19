import React, { useState } from 'react';
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
  const daysPerWeek = 7;

  const nextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + daysPerWeek))
    );
  };
  const prevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - daysPerWeek))
    );
  };

  const currentWeek = () => {
    setWeekStartDate(new Date());
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <Header
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        currentWeek={currentWeek}
        openModal={toggleModal}
        currentMonth={currentMonth}
        nextMonth={nextMonth}
      />
      <Calendar
        weekDates={weekDates}
        isModal={isModal}
        closeModal={toggleModal}
      />
    </>
  );
};

export default App;
