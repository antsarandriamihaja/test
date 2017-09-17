import React from 'react';

class ViewDetail extends React.Component {
    formatMailto(contactFile) {
        return `mailto:${contactFile.firstName}%20${contactFile.lastName}<${contactFile.email}>`
    }
    render() {
        const { contactFile, handleDelete, handleEdit, imagePreview} = this.props;
        const { picture, firstName, lastName, email, title, phone, streetAddress, city, province, zipCode } = contactFile;
        const name = firstName + ' ' + lastName;
        const address = `${streetAddress}, ${city} \n ${zipCode}, ${province}`;
        const styles = {
            backgroundImage: 'url(' + picture + ')'
        }
        return (
            <div className="contactViewDetail">
                <div className="contactWrap">
                <header>
                <div className="filePreview">{imagePreview}</div>
                    <h3 className="name">{name}</h3>
                    <h4 className="title">{title}</h4>
                </header>
                <hr className='detailViewLine'/>
                <section>
                    <p className="phone">Phone: <a  href={'tel:' + phone }>{phone}</a></p>
                    <p className="email">Email: <a href={this.formatMailto(contactFile)}>{email}</a></p>
                    <div className="address">
                        <p className="street">Address: {streetAddress} </p>
                        <p className="city">{city}</p>
                        <p className="zipCodeAndProvince">{zipCode + ', ' + province}</p>
                    </div>
                </section>

                <div className="buttonHolders">
                    <button className="detailViewBtn" onClick={handleEdit}>Edit Contact</button>
                    <button className="detailViewBtn" onClick={handleDelete}>Delete Contact</button>
                </div>
                </div>
            </div>
        );
    }
};

export default ViewDetail;