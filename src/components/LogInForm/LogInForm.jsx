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
import { getProfileThunk, loginThunk } from 'store/auth/loginThunk';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { loginUser } from 'services/authService';
import css from './LoginForm.module.css';

const LogInForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(
      loginThunk({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(getProfileThunk());
        navigate('/contacts');
      })
      .catch(() => toast.error('Some error'));

    const setUser = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    try {
      await loginUser(setUser);
      toast.success(`Loged into ${setUser.email}`);
    } catch (error) {
      toast.error('Please enter your email and password');
    }
  };

  return (
    <form className={css.login} onSubmit={handleSubmit}>
      <TextField
        style={{ minWidth: 280 }}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
      />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          style={{ minWidth: 280 }}
          id="outlined-adornment-password"
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
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
        LogIn
      </Button>
      <div className={css.registration}>
        <p>Dont have account?</p>
        <Link className={css.linkRegistr} to="/register">
          Register
        </Link>
      </div>
    </form>
  );
};
export default LogInForm;
