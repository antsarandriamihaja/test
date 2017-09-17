import React, { Component } from 'react';
import getContactList from './service/contacts/index';
import { Link } from 'react-router-dom';
import AddContact from './components/addContact';
import uuidV1 from 'uuid/v1';
import ContactCellView from './components/contact-detail-view';
import ContactForm from './components/addContact/newContactForm';
import css from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      showModal: false,
      editDisable: true
    }

    this.handleViewContact = this.handleViewContact.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.renderContacts = this.renderContacts.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    const contactData = getContactList();
    this.setState({
      contactList: contactData
    })
  }

  handleAddContact() {
    this.setState({
      showModal: true
    })
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      console.log('state => ', this.state);
    })
  }

  handlePhoneChange(phoneNumber) {
    this.setState({
      phone: phoneNumber
    })
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, phone, email, title, province, streetAddress, zipCode, picture, contactList, city } = this.state;
    const id = uuidV1();
    const contactFile = {
      id,
      firstName,
      lastName,
      phone,
      email,
      title,
      province,
      streetAddress,
      zipCode,
      city,
      picture
    };

    const contacts = this.state.contactList.concat(contactFile);
    this.setState({
      contactList: contacts,
      showModal: false
    });
  }

  handleEdit(event) {
    event.preventDefault();
    console.log('handleedit called event: ', event.target);
    this.setState({
      editDisable: !this.state.editDisable
    })
  }

  handleDelete() {
    console.log('handleDelete called');
  }
  handleViewContact() {
    console.log('handleviewcontact called');
  }

  renderContacts() {
    const contactFiles = this.state.contactList;
    const scope = this;
    let contact = contactFiles.map((contactFile, index) => {
      const { picture, firstName, lastName, title } = contactFile;
      const id = index.toString();
      const name = firstName + ' ' + lastName;
      const handleEdit = scope.handleEdit;
      const handleDelete = scope.handleDelete;
      const editable = this.state.editDisable;
      const imgStyle = {
        backgroundImage: `url(${picture})`
      }
      return (
        <div key={id} className="contactFile" >

          <div className="profilePic" style={imgStyle}></div>
          <div className="contactName">{name}</div>
          <div className="title">{title}</div>
          <Link to={
            {
              pathname: `/contacts/${contactFile.id}`,
              state: { contactFile, handleEdit, handleDelete, editable }
            }
          }>
            Details
          </Link>
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
          <button className="addContactBtn" onClick={this.handleAddContact}>Add Contact</button>
          <AddContact
            show={showModal}
            handleCancel={this.handleCloseModal}
            title='New contact'>
            <ContactForm
              onSubmit={this.handleSubmit}
              onPhoneChange={this.handlePhoneChange}
              onChange={this.handleOnChange} />
          </AddContact>
        </div>
        <div className="contactListView">
          {this.renderContacts()}
        </div>
      </div>
    );
  }
}

export default App;
