import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createEvent, getEvents } from '../../gateway/gateway';
import './modal.scss';

const Modal = ({ closeModal, setEvents }) => {
  const [modalData, setModalData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  const createNewEvent = (title, description, date, startTime, endTime) => {
    const actionEvent = {
      title,
      description,
      dateFrom: new Date(date + ', ' + startTime),
      dateTo: new Date(date + ', ' + endTime),
    };

    return actionEvent;
  };

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

    createEvent(newEvent)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Internal Server Error');
        } else {
          getEvents().then((res) => {
            setEvents(res);
          });
        }
      })
      .catch(() => {
        alert("Internal Server Error. Can't display event");
      });

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

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeModal}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={modalData.title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={modalData.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={modalData.startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={modalData.endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={modalData.description}
              onChange={handleChange}
            />
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setEvents: PropTypes.func.isRequired,
};

export default Modal;
