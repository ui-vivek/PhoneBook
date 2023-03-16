import { Table } from 'react-bootstrap';
import ContactRow from '../ContactRow/ContactRow';
import { useState, useEffect } from 'react';

import './contacttable.scss';

const ContactTable = ({
  contacts,
  filterText,
  showActiveUser,
  checkedContactIdList,
  setCheckedContactIDList,
  handleShow,
  setIsMultiDelete,
  setDeleteContactId,
}) => {
  const [contactList, setContactList] = useState(contacts);

  useEffect(() => {
    const filteredContacts = contacts.filter(
      (contact) =>
        contact.fname.toLowerCase().includes(filterText.toLowerCase()) ||
        contact.lname.toLowerCase().includes(filterText.toLowerCase()) ||
        (
          contact.fname.toLowerCase() +
          ' ' +
          contact.lname.toLowerCase()
        ).includes(filterText.toLowerCase()) ||
        contact.company.toLowerCase().includes(filterText.toLowerCase()) ||
        contact.email.toLowerCase().includes(filterText.toLowerCase()) ||
        contact.phone.toLowerCase().includes(filterText.toLowerCase()) ||
        contact.Role.toLowerCase().includes(filterText.toLowerCase())
    );
    setContactList(filteredContacts);
  }, [contacts, filterText]);

  return (
    <div className='main-content-list'>
      <Table>
        <thead>
          <tr>
            <th className='text-center col-1'>+</th>
            <th className='text-secondary col-5'>Basic Info</th>
            <th className='text-secondary col-5'>Company</th>
            <th className='text-center p-1 col-1'></th>
          </tr>
        </thead>
        <tbody>
          {contactList.length > 0 ? (
            contactList.map((contact, index) => (
              <ContactRow
                key={index}
                contact={contact}
                showActiveUser={showActiveUser}
                checkedContactIdList={checkedContactIdList}
                setCheckedContactIDList={setCheckedContactIDList}
                handleShow={handleShow}
                setIsMultiDelete={setIsMultiDelete}
                setDeleteContactId={setDeleteContactId}
              />
            ))
          ) : (
            <tr>
              <td colSpan='4' className='text-center text-secondary fw-bold'>
                No contacts found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactTable;
