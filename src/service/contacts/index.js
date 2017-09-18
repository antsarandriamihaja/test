
import contacts from '../../assets/contacts'
//This file is to mock reception of data from fetch response, and to get contacts from database.

//getting dummy json response;

function getContactList() {
    let contactList = [];
    return contactList.concat(contacts)
}
export default getContactList;

