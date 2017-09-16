import React, { Component } from 'react';

function ContactList({ contactFiles }) {
    let contact = contactFiles.map((contactFile, index) => {
        const { picture, firstName, lastName } = contactFile;
        const id = index.toString();
        const profilePic = 'url(' + picture + ')';
        const name = firstName + ' ' + lastName;
        const imgStyles = {
            backgroundImage: profilePic
        }
        return (
            <div key={id} className="contactFile" >
                <span className="profilePic" style={imgStyles}></span>
                <span className="contactName">{name}</span>
            </div>
        );
    });
    return contact;
    
}

export default ContactList;