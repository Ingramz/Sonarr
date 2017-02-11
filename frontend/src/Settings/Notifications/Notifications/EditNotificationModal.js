import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'Components/Modal/Modal';
import EditNotificationModalContentConnector from './EditNotificationModalContentConnector';

function EditNotificationModal({ isOpen, onModalClose, ...otherProps }) {
  return (
    <Modal
      isOpen={isOpen}
      onModalClose={onModalClose}
    >
      <EditNotificationModalContentConnector
        {...otherProps}
        onModalClose={onModalClose}
      />
    </Modal>
  );
}

EditNotificationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default EditNotificationModal;
