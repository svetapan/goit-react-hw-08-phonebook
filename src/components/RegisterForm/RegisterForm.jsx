import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { setNewUser } from 'services/authService';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import css from './RegisterForm.module.css'

const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    try {
      await setNewUser(newUser);
      toast.success(`Login ${newUser}`);
      navigate('/login');
    } catch (error) {
      toast.error('Please enter your name, email and password');
    }
    newUser('');
  };

  return (
    <form className={css.register}
      onSubmit={handleSubmit}
    >
      <TextField
        style={{minWidth: 280}}
        id="outlined-basic-name"
        label="Name"
        variant="outlined"
        name="name"
        htmlFor="name"
      />
      <TextField
        style={{minWidth: 280}}
        id="outlined-basic=email"
        label="Email"
        variant="outlined"
        name="email"
        htmlFor="email"
      />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password" name="password">
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          label="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type="submit" variant="outlined">
        Register
      </Button>
       <div className={css.login}>
        <p>Have account?</p>
      <Link className={css.linkLogin} to='/login'>Log In</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
