import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  let weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const getNextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
    );
  };
  const getPrevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
  };

  const getCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  return (
    <>
      <Header
        getNextWeek={getNextWeek}
        getPrevWeek={getPrevWeek}
        getCurrentWeek={getCurrentWeek}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

// class App extends React.Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }

export default App;
