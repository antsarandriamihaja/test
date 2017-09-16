import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ContactForm from './newContactForm';

class AddContact extends React.Component {
    
    render() {
        const {show, handleCancel, handleOnSubmit, handlePhoneChange, handleInputChange, handleOnSelect} = this.props;
        return (
            <Modal dialogClassName="sessionMessage" show={show}>
            <Modal.Header>
                <Modal.Title>New Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactForm onSubmit={handleOnSubmit} onPhoneChange={handlePhoneChange} onChange={handleInputChange} onSelect={handleOnSelect}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleCancel}>Cancel</Button>
            </Modal.Footer>
        </Modal>
        )
    }
}

export default AddContact;