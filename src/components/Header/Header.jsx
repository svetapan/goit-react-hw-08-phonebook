import { NavLink, useNavigate } from 'react-router-dom';
import css from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from 'services/authService';
import { logOut } from 'store/auth/authSlice';
import Button from '@mui/material/Button';

const Header = () => {
  const {nav, navLink,  navLinkActive, navBtn} = css;
  const activePage = ({ isActive }) => isActive ? `${navLink} ${navLinkActive}` : navLink;

  const {profile} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    deleteToken();
    navigate('/login')
  }

  return (
    <nav className={nav}>
      <div style={({display: "flex", gap: 20})}>
        <NavLink className={activePage} to="/">Home</NavLink>
        {profile && (
          <NavLink className={activePage} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
      <div className={navBtn}>
          {profile ? (
            <div style={{ display: "flex", gap: 20, alignItems: "center"}}>
              <div style={{fontSize: 20}}>{profile.email}</div>
                <Button variant="outlined" type="button" onClick={handleLogOut}>Log out</Button>
            </div>
            ) : (
              <>
                <NavLink className={activePage} to="/login">
                  Log In
                </NavLink>
                <NavLink className={activePage} to="/register">
                  Register
                </NavLink>
              </>
            )
          }
      </div>
    </nav>
  )
}

export default Header;