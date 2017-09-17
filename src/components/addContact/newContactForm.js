import React from 'react';
import ReactPhoneInput from 'react-phone-input';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

function FieldGroup({id, label, help, ...props}) {
    return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
        </FormGroup>
      );
}

class ContactForm extends React.Component {
    render() {
        const { onChange, onSubmit, onPhoneChange } = this.props;
        return (
            <form onSubmit={onSubmit} role="form">

                <FieldGroup
                    label="First Name"
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    onChange={onChange}
                />

                <FieldGroup
                    label="Last Name"
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={onChange}
                />

                <FieldGroup
                    label="Title"
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    onChange={onChange}
                />

                <FieldGroup
                    label="Email"
                    type="email"
                    className="form-control"
                    placeholder="janedoe@gmail.com"
                    name="email"
                    onChange={onChange}
                />


                <FormGroup>
                    <ControlLabel>Phone</ControlLabel>
                    <ReactPhoneInput
                        className="form-control"
                        name="phone"
                        defaultCountry={'ca'}
                        onChange={onPhoneChange}
                    />
                </FormGroup>

                <FieldGroup
                    label="Street Address"
                    type="text"
                    className="form-control"
                    placeholder="1600 Pennsylvania Ave"
                    name="streetAddress"
                    onChange={onChange}
                />

                <FieldGroup
                    label="City"
                    type="text"
                    className="form-control"
                    placeholder="Montreal"
                    name="city"
                    onChange={onChange}
                />
                <FieldGroup
                    label="Postal code"
                    type="text"
                    className="form-control"
                    placeholder="H1M2J8"
                    name="zipCode"
                    onChange={onChange}
                />


                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Province</ControlLabel>
                    <FormControl componentClass="select" name="province" onChange={onChange} placeholder="select">
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
                    <button type="submit" className='purple-btn btn-account'>Submit</button>
                </div>
            </form>
        )
    }
}

export default ContactForm;

