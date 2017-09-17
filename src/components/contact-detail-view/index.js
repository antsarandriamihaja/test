import React, { Component } from 'react';
import ReactPhoneInput from 'react-phone-input';

class ContactCellView extends React.Component {
    render() {
        const { contactFile, handleEdit, handleDelete, editable } = this.props.location.state;
        const { id, firstName, lastName, phone, email, title, province, streetAddress, zipCode, city, picture } = contactFile;
        return (
            <div className="contactFile">
                <div className="controlButtons">
                    <button className="editContactBtn" onClick={handleEdit} >Edit</button>
                    <button className="deleteContactBtn" onClick={handleDelete}>Delete</button>
                </div>
                <div className="contactContent">
                    <div className='picture'></div>
                    <div className='contactName'>

                        <h3>{firstName + ' ' + lastName}</h3>
                    </div>
                    <div className="contactTitle">
                        <h4> {title}</h4>
                    </div>
                    <ul className="contactDetails">
                        <li><label>Email: </label> <input type='email' name='email' disabled={editable} value={email} /></li>
                        <li><label>Address: </label> <input type='text' name='streetAddress' disabled={editable} value={streetAddress} /> </li>
                        <li><label>City: </label><input type='text' name='city' disabled={editable} value={city} /></li>
                        <li><label>Postal code: </label> <input type='text' name='zipCode' disabled={editable} value={zipCode} /></li>
                        <li><label>Province: </label> <input type='text' name='province' disabled={editable} value={province} /></li>
                        <li><label>Phone: </label>  <ReactPhoneInput  defaultValue={phone} /> </li>
                    </ul>
                </div>
            </div>
        )
    }
}



export default ContactCellView;
