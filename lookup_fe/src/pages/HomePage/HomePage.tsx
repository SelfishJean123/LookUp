import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='buttons-wrapper'>
        <Link to='/login' type='button' className='btn btn-success'>
          Log In
        </Link>

        <Link to='/register' type='button' className='btn btn-secondary'>
          Register
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
