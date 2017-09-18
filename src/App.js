import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Motion, spring } from 'react-motion';
import 'react-confirm-alert/src/react-confirm-alert.css';
import getContactList from './service/contacts/index.js';
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
      filter: '',
      pictureFile: '',
      imagePreviewUrl: '',
      moveLeft: false
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
    this.handleImageChange = this.handleImageChange.bind(this);


    this.renderEditView = this.renderEditView.bind(this);
    this.renderViewContact = this.renderViewContact.bind(this);
    this.renderContacts = this.renderContacts.bind(this);
    this.renderAddContact = this.renderAddContact.bind(this);
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
  //update state on form input change
  handleOnChange(event) {
    if(event.target.value) {
      this.setState({
        [event.target.name]: event.target.value
      });
    } 
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
    const { moveLeft } = this.state;
    let checkIfAdd = false;
    if (moveLeft) {
      checkIfAdd = true
    }
    let contacts, isEnabled;
    const { firstName, lastName, phone, email, title, province, streetAddress, zipCode, city } = this.state;
    let {picture} = this.state;
    if (!picture) {
      picture="//placehold.it/100"
    }
    const id = uuidV1();
    if (firstName && lastName) {
      const contactFile = { id, firstName, lastName, phone, email, title, province, streetAddress, zipCode, city, picture };
      contacts = this.state.contactList.concat(contactFile);      
    } else {
      contacts = this.state.contactList;
    }
    //TODO make a function to change state to undefined;
    this.setState({
      contactList: contacts,
      addContactModal: false,
      firstName: undefined,
      lastName: undefined,
      phone: undefined,
      email: undefined,
      title: undefined,
      province: undefined,
      streetAddress: undefined,
      zipCode: undefined,
      city: undefined,
      picture: undefined,
      moveLeft: checkIfAdd,
      imagePreviewUrl: undefined
    });
  }


  //displays modal to allow modification of contact info
  handleEdit(event) {
    event.preventDefault();
    this.setState({
      edit: true,
      editContactModal: true
    })
  }


  //delete contact info
  handleDelete() {
    const { contactList, person } = this.state;
    const list = contactList.filter((obj) => {
      return obj.id !== person.id
    })
    confirmAlert({
      message: 'Are you sure you want to delete this contact?',
      confirmLabel: 'Yes',
      cancelLabel: 'Cancel',
      onConfirm: () => {
        this.setState({
          contactList: list,
          person: undefined,
          moveLeft: false
        })
      }
    })

  }

  //updates contact information after editing
  handleUpdate(event) {
    event.preventDefault();
    const { person } = this.state;
    const { id } = person;
    let editedContact = { id };
    //TODO turn this mess into a function .
    (this.state.firstName ? editedContact.firstName = this.state.firstName : editedContact.firstName = person.firstName);
    (this.state.lastName ? editedContact.lastName = this.state.lastName : editedContact.lastName = person.lastName);
    (this.state.email ? editedContact.email = this.state.email : editedContact.email = person.email);
    (this.state.phone ? editedContact.phone = this.state.phone : editedContact.phone = person.phone);
    (this.state.title ? editedContact.title = this.state.title : editedContact.title = person.title);
    (this.state.province ? editedContact.province = this.state.province : editedContact.province = person.province);
    (this.state.streetAddress ? editedContact.streetAddress = this.state.streetAddress : editedContact.streetAddress = person.streetAddress);
    (this.state.zipCode ? editedContact.zipCode = this.state.zipCode : editedContact.zipCode = person.zipCode);
    (this.state.city ? editedContact.city = this.state.city : editedContact.city = person.city);
    (this.state.picture ? editedContact.picture = this.state.picture : editedContact.picture = person.picture);

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
      person: contact,
      moveLeft: true
    });
  }

  //handle search through contacts
  handleFilter(event) {
    this.setState({
      filter: event.target.value
    });
  }

  //updating image url state on file upload and allow for preview
  handleImageChange(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        pictureFile: file,
        picture: reader.result,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  //filter contacts by search
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
    const { moveLeft } = this.state;
    let contact;
    return (
      <div className="listContainer">

        {contact = contactFiles.map((contactFile, index) => {
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
              <div className="titleInList">{title}</div>
            </div>
          );
        })}

      </div>
    );

  }

  //display specific contact info and details
  renderViewContact() {
    const { person, imagePreviewUrl } = this.state;
    if (person) {
      let imagePreview;
      if (imagePreviewUrl) {
        imagePreview = imagePreviewUrl
      } else if (person.picture) {
        imagePreview = (person.picture)
      } else {
        imagePreview = "//placehold.it/100" 
      }
      return (
        <ViewDetail
          contactFile={person}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          imagePreview={imagePreview}
        />
      )
    } else {
      return null;
    }
  }

  //render add contact form
  renderAddContact() {
    const { addContactModal, imagePreviewUrl, firstName, lastName } = this.state;
    let imagePreview, isEnabled;
    if (firstName && lastName) {
      isEnabled=true
    }
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} className="avatar img-circle" alt="avatar" />)
    } else {
      imagePreview = (<img src="//placehold.it/100" className="avatar img-circle" alt="avatar" />)
    }
    if (addContactModal) {
      return (
        <Wrapper
          show={addContactModal}
          handleCancel={this.handleCloseModal}
          title='New contact'
          action='Add Contact'
          handleSubmit={this.handleSubmit}
          enabled={!isEnabled}>
          <ContactForm
            onSubmit={this.handleSubmit}
            onPhoneChange={this.handlePhoneChange}
            onChange={this.handleOnChange}
            onImageChange={this.handleImageChange}
            imagePreview={imagePreview} />
        </Wrapper>
      )
    } else {
      return null;
    }
  }
  //renders edit view to modify contact
  renderEditView() {
    const { person, edit, editContactModal, imagePreviewUrl } = this.state;

    if (person && edit) {
      let imagePreview;
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} className="profileDetailPic img-circle" alt="avatar" />)
      } else if (person.picture) {
        imagePreview = (<img src={person.picture} className="profileDetailPic img-circle" alt="avatar" />)
      } else {
        imagePreview = (<img src="//placehold.it/100" className="profileDetailPic img-circle" alt="avatar" />)
      }
      return (
        <Wrapper
          show={editContactModal}
          handleCancel={this.handleCloseModal}
          title='Edit contact'
          action='Update contact'
          handleSubmit={this.handleUpdate}>
          <ContactEditView
            onSubmit={this.handleUpdate}
            onPhoneChange={this.handlePhoneChange}
            onChange={this.handleOnChange}
            contactFile={person}
            onImageChange={this.handleImageChange}
            imagePreview={imagePreview} />
        </Wrapper>
      )
    } else {
      return null
    }
  }

  render() {
    const { moveLeft } = this.state;
    return (
      <div className="App">
        <div className="header">
          <input
            className="searchField"
            name="filter"
            placeholder="Search contact..."
            defaultValue={this.state.filter}
            onChange={this.handleFilter} />
          <hr className="contactBreak" />

        </div>
        <div className="addContactView">
          {this.renderAddContact()}
        </div>
        <Motion style={{ x: spring(moveLeft ? -280 : 0) }}>
          {({ x }) =>
          <div>
            <div className="contactListView"
              style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }}>
              {this.renderContacts()}
            </div>
            <div className="addContact" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }}>
          <button className="addContactBtn" onClick={this.handleAddContact}>Add Contact</button>
        </div>
            </div>
          }
        </Motion>
        <Motion style={{ x: spring(moveLeft ? -120 : 0) }}>
          {({ x }) =>
            <div className="contactDetailView" style={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`,
              }}>
              {this.renderViewContact()}
            </div>
          }
        </Motion>
        <div className="contactEditView">
          {this.renderEditView()}
        </div>
      </div>
    );
  }
}

export default App;
