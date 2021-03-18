import React from 'react';
import Modal from 'react-modal';

const WarningModal = (props) => (
  <Modal
    isOpen={!!props.invaliddeletion}
    onRequestClose={props.handleClearInvalidOption}
    contentLabel="Selected Option"
    closeTimeoutMS={300}
    className="modal"
  >
    <h3 className="modal__title">This can not be deleted</h3>
    {props.invaliddeletion && <p className="modal__body">{props.invaliddeletion}</p>}
    <button className="button" onClick={props.handleClearInvalidOption}>Okay</button>
  </Modal>
);

export default WarningModal;
