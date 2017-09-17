import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import css from './index.css';

export default function render({ show, handleCancel, title, children }) {
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
                    <Button onClick={handleCancel}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    } else {
        return null;
    }
}
