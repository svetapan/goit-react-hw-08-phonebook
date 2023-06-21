import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/filterSlice';
import { getFilter } from 'store/selectors';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleInputChange = event => {
    const newFilterValue = event.currentTarget.value;
    dispatch(setFilter(newFilterValue));
  };

  return (
    <TextField
      style={{minWidth: 360}}
      id="outlined-basic"
      label="Find contacts by name"
      variant="outlined"
      type="text"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Filter;
