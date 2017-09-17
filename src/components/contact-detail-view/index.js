import React from 'react';
import ReactPhoneInput from 'react-phone-input';
import FieldGroup from '../addContact/newContactForm';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class ContactCellView extends React.Component {
    render() {
        const { contactFile, handleEdit, handleDelete, onPhoneChange } = this.props;
        const { id, firstName, lastName, phone, email, title, province, streetAddress, zipCode, city, picture } = contactFile;
        return (
            <div className="detailView">
                <div className="contactContent">
                    <div className='picture'></div>
                    <form onSubmit={handleEdit} role="form">

                        <FieldGroup
                            label="First Name"
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={firstName}
                            name="firstName"
                            onChange={handleEdit}
                        />

                        <FieldGroup
                            label="Last Name"
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={handleEdit}
                        />



                        <FieldGroup
                            label="Title"
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            value={title}
                            onChange={handleEdit}
                        />

                        <FieldGroup
                            label="Email"
                            type="email"
                            className="form-control"
                            placeholder="janedoe@gmail.com"
                            name="email"
                            value={email}
                            onChange={handleEdit}
                        />


                        <FormGroup>
                            <ControlLabel>Phone</ControlLabel>
                            <ReactPhoneInput
                                className="form-control"
                                name="phone"
                                defaultCountry={'ca'}
                                value={phone}
                                onChange={onPhoneChange}
                            />
                        </FormGroup>

                        <FieldGroup
                            label="Street Address"
                            type="text"
                            className="form-control"
                            placeholder="1600 Pennsylvania Ave"
                            name="streetAddress"
                            value={streetAddress}
                            onChange={handleEdit}
                        />

                        <FieldGroup
                            label="City"
                            type="text"
                            className="form-control"
                            placeholder="Montreal"
                            name="city"
                            value={city}
                            onChange={handleEdit}
                        />
                        <FieldGroup
                            label="Postal code"
                            type="text"
                            className="form-control"
                            placeholder="H1M2J8"
                            name="zipCode"
                            value={zipCode}
                            onChange={handleEdit}
                        />


                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Province</ControlLabel>
                            <FormControl componentClass="select" name="province" onChange={handleEdit} placeholder="select" defaultValue={province}>
                                <option value="select">Select a province</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="New Brunswick">New Brunswick</option>
                                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                <option value="Northwest Territories">Northwest Territories</option>
                                <option value="Nova Scotia">Nova Scotia</option>
                                <option value="Nunavut">Nunavut</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Prince Edward Island">Prince Edward Island</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Saskatchewan">Saskatchewan</option>
                                <option value="Yukon">Yukon</option>
                            </FormControl>
                        </FormGroup>

                        <div className="form-group row">
                            <button className="deleteContactBtn" onClick={handleDelete}>Delete Contact</button>
                            <button type="submit" className='purple-btn btn-account'>Edit Contact</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default ContactCellView;
