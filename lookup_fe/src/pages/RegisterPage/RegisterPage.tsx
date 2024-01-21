import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/actions/usersActions";
import Spinner from "../../components/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";
import "./RegisterPage.scss";

type RegisterPageProps = {
  pathname: string;
};

const RegisterPage: React.FC<RegisterPageProps> = ({ pathname }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { userData, loading, error } = useSelector((state: any) => state.userLoginReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate(location.state.from);
    }
  }, [userData, location, navigate]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch<any>(loginUser(email, password));
  };

  return (
    <div className='register-page'>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Notification notificationType='error' notificationMessage={error} />
      ) : (
        <div className='modal'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <form onSubmit={submitHandler}>
                <fieldset>
                  <div className='modal-header'>
                    <h5 className='modal-title'>Log In</h5>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'></span>
                    </button>
                  </div>
                  <div className='modal-body'>
                    <div className='form-group'>
                      <label htmlFor='inputEmail' className='form-label mt-3'>
                        Email
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='inputEmail'
                        aria-describedby='emailHelp'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className='form-group'>
                      <label htmlFor='inputPassword' className='form-label mt-4'>
                        Password
                      </label>
                      <input
                        type='password'
                        className='form-control mb-3'
                        id='inputPassword'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='off'
                      />
                    </div>
                  </div>

                  <div className='modal-footer'>
                    <button type='submit' className='btn btn-primary'>
                      Submit
                    </button>
                    <button type='submit' className='btn btn-primary'>
                      <Link to='/'>Register instead</Link>
                    </button>
                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                      Close
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
