import FooterCmp from "../../components/navbars/FooterCmp/FooterCmp";
import logo from "@assets/logo-mini-black.svg";
import { NavLink, Outlet } from "react-router-dom";
import "./ContentPageLayout.scss";

const ContentPageLayout = () => {
  return (
    <div className="content-page-layout">
      <NavLink to="/" className="content-layout-logo">
        <img src={logo} alt="look-up-logo" />
      </NavLink>
      <Outlet />
      <FooterCmp />
    </div>
  );
};

export default ContentPageLayout;
