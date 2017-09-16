import React, { Component } from 'react';
import getContactList from './service/contacts/index';
import { Link } from 'react-router';
import AddContact from './components/addContact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      showModal: false
    }

    this.handleViewContact = this.handleViewContact.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.renderContacts = this.renderContacts.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  componentWillMount() {
    const contactData = getContactList();
    this.setState({
      contactList: contactData
    })
  }

  handleAddContact() {
    console.log('addcontacted called');
    this.setState({
      showModal: true
    })
  }

  handleOnChange(event) {
    console.log('handleOnchange called');
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      console.log('state => ', this.state);
    })
  }

  handlePhoneChange(phoneNumber) {
    // console.log('phone event =>', event)
    this.setState({
      phone: phoneNumber
    })
  }
  handleSelect(event) {
    console.log('handleselect called');
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleCloseModal() {
    this.setState({
      showModal: false
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let contactFile = {};
    const {firstName, lastName, phone, email, } = this.state;
    console.log('handlesubmit called');
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
            <img src={picture} />
          </span>
          <span className="contactName">{name}</span>
        </div>
      );
    });
    return contact;
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <div className="header">
          Contacts
        </div>
        <div className="addContact">
          <button className="addContactBtn" onClick={this.handleAddContact}>+</button>
          <AddContact
            show={showModal}
            handleCancel={this.handleCloseModal}
            handleOnSubmit={this.handleSubmit}
            handlePhoneChange={this.handlePhoneChange}
            handleInputChange={this.handleOnChange}
            handleOnSelect={this.handleSelect} />
        </div>
        <div className="contactListView">
          {this.renderContacts()}
        </div>
      </div>
    );
  }
}

export default App;
