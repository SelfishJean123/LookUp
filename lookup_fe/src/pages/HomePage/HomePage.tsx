import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='buttons-wrapper'>
        <Link to='/login' state={{ from: "/" }} type='button' className='btn btn-lg btn-success'>
          Sign In
        </Link>

        <Link to='/register' state={{ from: "/" }} type='button' className='btn btn-lg btn-primary'>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
