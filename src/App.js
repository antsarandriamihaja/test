import React, { Component } from 'react';
// import './App.css';
import getContactList from './service/contacts/index';
import { Link } from 'react-router';
// import ContactList from './components/contact-directory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: []
    }

    this.handleViewContact = this.handleViewContact.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.renderContacts = this.renderContacts.bind(this);

  }

  componentWillMount() {
    const contactData = getContactList();
    this.setState({
      contactList: contactData
    })
  }

  handleAddContact() {
    console.log('addcontacted called')
  }

  handleViewContact() {
    console.log('handleviewcontact called');
  }

  renderContacts() {
    const contactFiles = this.state.contactList;

    let contact = contactFiles.map((contactFile, index) => {
      const { picture, firstName, lastName } = contactFile;
      const id = index.toString();
      const name = firstName + ' ' + lastName;
      return (
        <div key={id} className="contactFile" >
          <span className="profilePic"> 
            <img src = {picture}/>
          </span>
          <span className="contactName">{name}</span>
        </div>
      );
    });
    return contact;
  }

  render() {
    return (
      <div className="App">
        {this.renderContacts()}
      </div>
    );
  }
}

export default App;
