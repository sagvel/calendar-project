import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ closeModal, handleSubmit, handleChange, modalData }) => {
  console.log(modalData);
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
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  modalData: PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    endTime: PropTypes.string,
    startTime: PropTypes.string,
    title: PropTypes.string,
  }),
};

Modal.defaultProps = {
  modalData: PropTypes.shape({
    date: '',
    description: '',
    endTime: '',
    startTime: '',
    title: '',
  }),
};
export default Modal;
