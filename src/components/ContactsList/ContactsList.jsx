import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { getFilter } from 'store/selectors';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul style={{ width: 460, margin: '20px auto' }}>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
