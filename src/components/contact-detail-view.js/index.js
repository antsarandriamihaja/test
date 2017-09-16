import React, { Component } from 'react';
import { string, number, func } from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

function ContactCellView(contactFiles, handleEdit, handleDelete) {
    if (contactFiles) {
        let cells = contactFiles.map((item, index) => {
            const id = index.toString();
            return (

            );
        });
    };

}