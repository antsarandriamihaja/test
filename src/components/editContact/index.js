import React from 'react';
import ReactPhoneInput from 'react-phone-input';
class ContactEditView extends React.Component {
    render() {
        const { contactFile, onChange, onPhoneChange, onSubmit} = this.props;
        const { id, firstName, lastName, phone, email, title, province, streetAddress, zipCode, city, picture } = contactFile;
        return (
            <div className="detailView">
                <div className="contactContent">
                    <div className='picture'></div>
                    <form onSubmit={onSubmit}>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className='col-sm-10'>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={firstName}
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
                                value={lastName}
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
                                value={title}
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
                                value={email}
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
                                value={streetAddress}
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
                                value={city}
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
                                value={zipCode}
                                onChange={onChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
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

                    <div className="form-group row">
                        <button type="submit" className='purple-btn btn-account'>Update Contact</button>
                    </div>
             
                    </form> 
                </div>
            </div>
        )
    }
}



export default ContactEditView;
