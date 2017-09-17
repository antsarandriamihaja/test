import React from 'react';
import ReactPhoneInput from 'react-phone-input';
import css from './index.css';

class ContactEditView extends React.Component {
    render() {
        const { contactFile, onChange, onPhoneChange, onSubmit, onImageChange, imagePreview } = this.props;
        const { id, firstName, lastName, phone, email, title, province, streetAddress, zipCode, city, picture } = contactFile;
        return (
            <div className="detailView">
                <div className="contactContent">
                    <div className='picture'></div>
                    <form onSubmit={onSubmit}>

                        <div className="form-group">
                            <div className="filePreview">{imagePreview}</div>
                            <div className="fileUpload">
                                <h6>Upload a profile photo...</h6>
                                <input className="fileInput form-control"
                                    type="file"
                                    onChange={onImageChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">First Name</label>
                            <div className='col-sm-10'>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    defaultValue={firstName}
                                    onChange={onChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Last Name</label>
                            <div className='col-sm-10'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="lastName"
                                    defaultValue={lastName}
                                    onChange={onChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Title</label>
                            <div className='col-sm-10'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    name="title"
                                    defaultValue={title}
                                    onChange={onChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className='col-sm-10'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="janedoe@gmail.com"
                                    name="email"
                                    defaultValue={email}
                                    onChange={onChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Phone Number</label>
                            <div className='col-sm-10'>
                                <ReactPhoneInput
                                    className="form-control"
                                    name="phone"
                                    value={phone}
                                    defaultCountry={'ca'}
                                    onChange={onPhoneChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Street Address</label>
                            <div className='col-sm-10'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="1600 Pennsylvania Ave"
                                    name="streetAddress"
                                    defaultValue={streetAddress}
                                    onChange={onChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">City</label>
                            <div className='col-sm-10'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Montreal"
                                    name="city"
                                    defaultValue={city}
                                    onChange={onChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Zipcode</label>
                            <div className='col-sm-10'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="H1M2J8"
                                    name="zipcode"
                                    defaultValue={zipCode}
                                    onChange={onChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Province</label>
                            <select
                                className="form-control"
                                name="province"
                                defaultValue="Select province"
                                onChange={onChange} defaultValue={province}>
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
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default ContactEditView;
