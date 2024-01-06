import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions/usersActions";
import UserIcon from "../_icons/UserIcon";
import SearchIcon from "../_icons/SearchIcon";
import "./Header.scss";

const Header = () => {
  const { user } = useSelector((state: any) => state.userLoginReducer);
  const dispatch = useDispatch();
  const logoutHandler = () => dispatch<any>(logoutUser());

  return (
    <header className='header-component'>
      <nav className='navbar navbar-expand-xl bg-primary' data-bs-theme='dark'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src='/assets/images/logos/logo-white.svg' alt='lookup logo' />
          </Link>

          <button
            className='navbar-toggler collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#main-menu-nav'
            aria-controls='main-menu-nav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='navbar-collapse collapse' id='main-menu-nav'>
            <form className='d-flex'>
              <input className='form-control' type='search' placeholder='Search' />
              <button className='btn btn-secondary' type='submit'>
                <SearchIcon />
              </button>
            </form>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About Look Up
                  <span className='visually-hidden'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/products'>
                  Products Catalogue
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/encyclopedia'>
                  INCI Encyclopedia
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/articles'>
                  Articles
                </Link>
              </li>
              {user ? (
                <li className='nav-item dropdown'>
                  <Link
                    className='nav-link dropdown-toggle'
                    data-bs-toggle='dropdown'
                    to='/aa'
                    role='button'
                    aria-haspopup='true'
                    aria-expanded='false'>
                    {user.name}
                    <UserIcon />
                  </Link>

                  <div className='dropdown-menu'>
                    <Link className='dropdown-item' to='/profile'>
                      My Profile
                    </Link>
                    <li className='dropdown-item' onClick={logoutHandler}>
                      Sign Out
                    </li>
                  </div>
                </li>
              ) : (
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
