import React, { useEffect, useState } from 'react';
import { deleteEvent, getEvents } from '../../gateway/gateway';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';
import './calendar.scss';

const Calendar = ({ weekDates, isModal, closeModal }) => {
  const [actionEvents, setEvents] = useState([]);

  const handleDelete = (id) => {
    deleteEvent(id).then((response) => {
      if (!response.ok) {
        throw new Error('Internal Server Error');
      } else {
        getEvents()
          .then((res) => {
            setEvents(res);
          })
          .catch(() => {
            alert("Internal Server Error. Can't display event");
          });
      }
    });
  };

  useEffect(() => {
    getEvents()
      .then((res) => {
        setEvents(res);
      })
      .catch(() => {
        alert("Internal Server Error. Can't display event");
      });
  }, []);

  const dataEvents = actionEvents.map((event) => ({
    ...event,
    dateFrom: new Date(event.dateFrom),
    dateTo: new Date(event.dateTo),
  }));

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={dataEvents}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      {isModal && <Modal closeModal={closeModal} setEvents={setEvents} />}
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.arrayOf(PropTypes.object).isRequired,
  isModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Calendar;
