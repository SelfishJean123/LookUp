import logo from "/assets/logo-white.svg";
import { Link } from "react-router-dom";
import "./FooterCmp.scss";

const FooterCmp = () => {
  return (
    <div className="footer-component">
      <Link to="/" className="footer-link">
        <img src={logo} alt="look-up-logo" />
      </Link>
      <p>© 2024 Look Up. All rights reserved</p>
    </div>
  );
};

export default FooterCmp;
