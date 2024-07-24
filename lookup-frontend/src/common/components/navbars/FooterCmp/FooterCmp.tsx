import logo from "@assets/logo-white.svg";
import { NavLink } from "react-router-dom";
import "./FooterCmp.scss";

const FooterCmp = () => {
  return (
    <div className="footer-component">
      <NavLink to="/" className="footer-navlink">
        <img src={logo} alt="look-up-logo" />
      </NavLink>
      <p>© 2024 Look Up. All rights reserved</p>
    </div>
  );
};

export default FooterCmp;
