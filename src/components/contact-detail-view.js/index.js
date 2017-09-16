import React, { Component } from 'react';
import { string, number, func } from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router';

export default class ContactCellView extends React.Component {

    constructor(props) {
        super(props);
        this.handleEditContact = this.handleEditContact.bind(this);
        this.handleDeleteContact = this.handleDeleteContact.bind(this);
    }

    handleEditContact() {
        //TODO
    }

    handleDeleteContact() {
        //TODO
    }

    renderContactFile() {
        const { contactFile, id } = this.props;
        if (contactFile) {
            <div key={id} className="contactFile">
                <div className="controlButtons">
                    <button className="editContactBtn" onClick={this.handleEditContact}>Edit</button>
                    <button className="deleteContactBtn" onClick={this.handleDeleteContact}>Delete</button>
                </div>
                <div className="contactContent">

                    <li ></li>
                </div>
                <li></li>
                <li ></li>
            </div>
        }
    }
}


function ContactCellView(contactFiles, handleEdit, handleDelete) {
    if (contactFiles) {
        let cells = contactFiles.map((contactFile, index) => {
            const id = index.toString();
            return (
                <div key={id} className="contactFile">
                    <div className="controlButtons">
                        <ButtonToolbar>
                            <Button />
                            <Button />
                        </ButtonToolbar>
                    </div>
                    <div></div>
                    <li></li>
                    <li ></li>
                </div>
            );
        });
    };

}

