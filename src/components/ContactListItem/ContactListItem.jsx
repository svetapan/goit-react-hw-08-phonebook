import React, { useState, useEffect } from 'react';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  updateContact,
  fetchContacts,
} from 'store/fetchContacts';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SaveAltTwoToneIcon from '@mui/icons-material/SaveAltTwoTone';
import BackspaceTwoToneIcon from '@mui/icons-material/BackspaceTwoTone';
import { toast } from 'react-hot-toast';
import TextField from '@mui/material/TextField';

const ContactListItem = ({ contact }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (isEdit) {
      setNumber(contact.number);
    }
  }, [isEdit, contact]);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success(`${name} has been deleted from the contacts.`);
  };

  const handleEdit = () => {
    setIsEdit(true);
    setNumber(contact.number);
  };

  const handleSave = () => {
    dispatch(updateContact({ contactId: contact.id, name, number }))
      .then(() => {
        setIsEdit(false);
        dispatch(fetchContacts());
        toast.success(`${name} has been changed.`);
      })
      .catch(error => {
        console.log(error);
        toast.error(`Some error`);
      });
  };

  const handleCancel = () => {
    setIsEdit(false);
    toast.success(`${name} has not been changed.`);
  };

  return (
    <li className={css.item} key={contact.id}>
      <span className={css.decor}></span>
      {isEdit ? (
        <>
        <TextField style={{marginRight: 10}} id="outlined-basic" label="Change name" variant="outlined"  type="text"
            value={name}
            onChange={e => setName(e.target.value)}/>
          <TextField id="outlined-basic" label="Change number" variant="outlined" type="text"
            value={number}
            onChange={e => setNumber(e.target.value)} />
          <button className={css.btn} onClick={handleSave}>
            <SaveAltTwoToneIcon />
          </button>
          <button className={css.btn} onClick={handleCancel}>
            <BackspaceTwoToneIcon />
          </button>
        </>
      ) : (
        <>
          {contact.name}: {contact.number}
          <div className={css.thumbBtn}>
            <button className={css.btn} onClick={handleEdit}>
              <EditTwoToneIcon />
            </button>
            <button className={css.btn} onClick={handleDelete}>
              <DeleteForeverTwoToneIcon />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default ContactListItem;
