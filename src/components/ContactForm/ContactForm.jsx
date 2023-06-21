import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'store/fetchContacts';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-hot-toast';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isNameContain = contacts.some(contact => contact.name === name);
    if (isNameContain) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    const contact = { name, number };
    dispatch(addContacts(contact));
    toast.success(`${name} has been added to the contacts.`);

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <div>
        <Button style={{ margin: '0 auto' }} variant="outlined" type="submit">
          Add contact
        </Button>
      </div>
    </form>
  );
}
