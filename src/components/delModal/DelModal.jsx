import React from 'react';
import PropTypes from 'prop-types';
import './delModal.scss';

const DelModal = ({ id, handleDelete }) => {
  return (
    <div className="delete" onClick={() => handleDelete(id)}>
      <i className="fas fa-trash delete__icon"></i>Delete
    </div>
  );
};

DelModal.propTypes = {
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DelModal;
