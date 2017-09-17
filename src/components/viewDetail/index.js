import React from 'react';

class ViewDetail extends React.Component {

    render() {
        const { contactFile, handleDelete, handleEdit} = this.props;
        const { picture, firstName, lastName, email, title, phone, streetAddress, city, province, zipCode } = contactFile;
        const name = firstName + ' ' + lastName;
        const address = `${streetAddress}, ${city} \n ${zipCode}, ${province}`;
        const styles = {
            backgroundImage: 'url(' + picture + ')'
        }
        return (
            <div className="contactViewDetail">
                <header>
                    <div className="image" style={styles}></div>
                    <h3 className="name">{name}</h3>
                    <h4 className="title">{title}</h4>
                </header>
                <section>
                    <p className="phone">Phone: {phone}</p>
                    <p className="email">Email: {email}</p>
                    <p className="address">Address: {address}</p>
                </section>
                <div className="buttonHolders">
                    <button className="btn" onClick={handleEdit}>Edit Contact</button>
                    <button className="btn" onClick={handleDelete}>Delete Contact</button>
                </div>
            </div>
        );
    }
};

export default ViewDetail;