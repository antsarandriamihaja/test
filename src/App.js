import React from 'react';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import getContactList from './service/contacts/index';
import Wrapper from './components/containers/modal';
import uuidV1 from 'uuid/v1';
import ContactEditView from './components/editContact';
import ViewDetail from './components/viewDetail';
import ContactForm from './components/addContact';
import css from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      addContactModal: false,
      editContactModal: false,
      edit: false,
      filter: ''
    }

    this.handleViewContact = this.handleViewContact.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleFilter = this.handleFilter.bind(this);


    this.renderEditView = this.renderEditView.bind(this);
    this.renderViewContact = this.renderViewContact.bind(this);
    this.renderContacts = this.renderContacts.bind(this);
  }

  //fetch already existing contact list, mimicking fetching from a database
  componentWillMount() {
    const contactData = getContactList();
    this.setState({
      contactList: contactData
    })
  }

  //displays overlay to allow contact creation
  handleAddContact() {
    this.setState({
      addContactModal: true
    })
  }

  handleOnChange(event) {
    console.log('handleonchange called');
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      console.log(this.state)
    });
  }

  //handles phone info 
  handlePhoneChange(phoneNumber) {
    this.setState({
      phone: phoneNumber
    })
  }

  
  //closes overlay wrapper
  handleCloseModal() {
    const { addContactModal, editContactModal } = this.state;
    if (addContactModal) {
      this.setState({
        addContactModal: false
      });
    } else if (editContactModal) {
      this.setState({
        editContactModal: false
      });
    }
  }

  //adds new contact to contact list
  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, phone, email, title, province, streetAddress, zipCode, picture, city } = this.state;
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
      addContactModal: false
    });
  }


  //displays modal to allow modification of contact info
  handleEdit() {
    this.setState({
      edit: true,
      editContactModal: true
    })
  }


  //delete contact info
  handleDelete(person) {
    const { contactList } = this.state;
    const list = contactList.filter((obj) => {
      return obj.id !== person.id
    })
    confirmAlert({
      message: 'Are you sure you want to delete this contact?',
      confirmLabel: 'Confirm',
      cancelLabel: 'Cancel',
      onConfirm: () => {
        this.setState({
          contactList: list,
          person: undefined
        })
      }
    })

  }

  //updates contact information after editing
  handleUpdate( event ) {
    event.preventDefault();
    const {person} = this.state;
    const { id } = person;
    let editedContact = {id};
    //TODO turn this mess into a function or loop .
    (this.state.firstName ? editedContact.firstName=this.state.firstName : editedContact.firstName = person.firstName);
    (this.state.lastName ? editedContact.lastName=this.state.lastName : editedContact.lastName = person.lastName);
    (this.state.email ? editedContact.email=this.state.email: editedContact.email = person.email);
    (this.state.phone ? editedContact.phone=this.state.phone : editedContact.phone = person.phone);
    (this.state.title ? editedContact.title=this.state.title : editedContact.title = person.title);
    (this.state.province ? editedContact.province=this.state.province : editedContact.province = person.province);
    (this.state.streetAddress ? editedContact.streetAddress=this.state.streetAddress : editedContact.streetAddress = person.streetAddress);
    (this.state.zipCode ? editedContact.zipCode=this.state.zipCode : editedContact.zipCode = person.zipCode);
    (this.state.city ? editedContact.city=this.state.city : editedContact.city = person.city);    
    (this.state.picture ? editedContact.picture=this.state.picture : editedContact.picture = person.picture);

    const { contactList } = this.state;
    let list = contactList.filter((obj) => {
      return obj.id !== person.id
    })
    list.push(editedContact);
     this.setState({
       contactList: list,
       person: editedContact,
       editContactModal: false
     });

  }


  //Displays contact details
  handleViewContact(contact) {
    this.setState({
      person: contact
    });
  }

  handleFilter(event) {
    this.setState({
      filter: event.target.value
    });
  }

  getFilteredContacts() {
    let filteredContacts = this.state.contactList;
    filteredContacts.sort((a, b) => {
      var delta = 0;
      if (a.lastName) {
        delta = a
          .lastName
          .localeCompare(b.lastName);
      }

      if (delta === 0 && a.firstName) {
        delta = a
          .firstName
          .localeCompare(b.firstName);
      }

      return delta;
    });
    if (this.state.filter && this.state.filter.trim().length > 0) {
      let filter = this
        .state
        .filter
        .trim()
        .toLowerCase();
      filteredContacts = filteredContacts.filter((contact) => {
        let firstName = (contact.firstName
          ? contact.firstName.toLowerCase()
          : '');
        let lastName = (contact.lastName
          ? contact.lastName.toLowerCase()
          : '');
        if (firstName.indexOf(filter) > -1 || lastName.indexOf(filter) > -1) {
          return contact;
        }
      });
    }

    return filteredContacts;
  }

  //listing all contacts
  renderContacts() {
    const contactFiles = this.getFilteredContacts();
    const scope = this;
    let contact;
    return contact = contactFiles.map((contactFile, index) => {
      const id = index.toString();
      const { picture, firstName, lastName, title } = contactFile;
      const name = firstName + ' ' + lastName;
      const imgStyle = {
        backgroundImage: `url(${picture})`
      }

      return (
        <div key={id} className="contactFile" onClick={() => scope.handleViewContact(contactFile)}>

          <div className="profilePic" style={imgStyle}></div>
          <div className="contactName">{name}</div>
          <div className="title">{title}</div>
        </div>
      );
    });
  }

  //display specific contact info and details
  renderViewContact() {
    const { person } = this.state;
    if (person) {
      return (
        <ViewDetail
          contactFile={person}
          handleEdit={this.handleEdit}
          handleDelete={() => this.handleDelete(person)}
        />
      )
    } else {
      return null;
    }
  }

  //renders edit view to modify contact
  renderEditView() {
    const { person, edit, editContactModal } = this.state;

    if (person && edit) {
      return (
        <Wrapper
          show={editContactModal}
          handleCancel={this.handleCloseModal}
          title='Edit contact'>
          <ContactEditView
            onSubmit={this.handleUpdate}
            onPhoneChange={this.handlePhoneChange}
            onChange={this.handleOnChange}
            contactFile={person} />
        </Wrapper>
      )
    } else {
      return null
    }
  }

  render() {
    const { addContactModal } = this.state;
    return (
      <div className="App">
        <div className="header">
          Contacts
        </div>
        <div className="col-sm-4 form-group">
          <input
            className="form-control"
            name="filter"
            placeholder="Search..."
            defaultValue={this.state.filter}
            onChange={this.handleFilter} />
        </div>
        <div className="addContact">
          <button className="addContactBtn" onClick={this.handleAddContact}>Add Contact</button>
          <Wrapper
            show={addContactModal}
            handleCancel={this.handleCloseModal}
            title='New contact'>
            <ContactForm
              onSubmit={this.handleSubmit}
              onPhoneChange={this.handlePhoneChange}
              onChange={this.handleOnChange} />
          </Wrapper>
        </div>
        <div className="contactListView">
          {this.renderContacts()}
        </div>
        <div className="contactDetailView">
          {this.renderViewContact()}
        </div>
        <div className="contactEditView">
          {this.renderEditView()}
        </div>
      </div>
    );
  }
}

export default App;
