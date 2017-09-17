import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function render({ show, handleCancel, title, children, handleSubmit, action }) {
    if (show) {
        return (
            <Modal dialogClassName="addNewContact" show={show} onHide={handleCancel}>
                <Modal.Header >
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="cancelBtn" onClick={handleCancel}>Cancel</Button>
                    <Button className="submitBtn"onClick={handleSubmit}>{action}</Button>
                </Modal.Footer>
            </Modal>
        )
    } else {
        return null;
    }
}
