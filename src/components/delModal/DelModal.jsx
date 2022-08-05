import React from 'react';
import './delModal.scss';

export default function DelModal({ id, handleDelete }) {
  return (
    <div className="delete" onClick={() => handleDelete(id)}>
      <i className="fas fa-trash delete__icon"></i>Delete
    </div>
  );
}
