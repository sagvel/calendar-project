import React, { useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';

import './calendar.scss';
import Modal from '../modal/Modal';

const Calendar = ({ weekDates, isModal, closeModal }) => {
  const [actionEvents, setEvents] = useState(events);
  const [modalData, setModalData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  const createNewEvent = (title, description, date, startTime, endTime) => {
    const actionEvent = {
      id: Math.random(),
      title,
      description,
      dateFrom: new Date(date + ', ' + startTime),
      dateTo: new Date(date + ', ' + endTime),
    };

    return actionEvent;
  };

  // console.log(actionEvents);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, date, startTime, endTime } = modalData;
    const newEvent = createNewEvent(
      title,
      description,
      date,
      startTime,
      endTime
    );

    setEvents(actionEvents.concat(newEvent));
    setModalData({
      title: '',
      description: '',
      date: '',
      startTime: '',
      endTime: '',
    });
    closeModal();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setModalData({ ...modalData, [name]: value });
  };

  const handleDelete = (id) => {
    setEvents(actionEvents.filter((actionEvent) => actionEvent.id !== id));
    console.log('deleted action event id: ', id);
  };

  console.log(actionEvents);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={actionEvents}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      {isModal && (
        <Modal
          closeModal={closeModal}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          modalData={modalData}
        />
      )}
    </section>
  );
};

export default Calendar;
