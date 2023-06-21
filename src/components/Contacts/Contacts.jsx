import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import css from './Contacts.module.css'

const Contacts = () => {
  const {items} = useSelector(state => state.contacts);
  
  return (
    <div className={css.wrapper}>
      <h1>Phone Book</h1>
      <ContactForm />
      {(items.length > 0) ? (
      <div>
          <h2>Contacts</h2>
          <div className={css.thumb}>
          <Filter />
          <ContactsList />
          </div>
      </div>
      ) : ( <p>There are no contacts in the phone book.</p>)
      }
    </div>
  );
};

export default Contacts;
