import FooterCmp from "../../components/navbars/FooterCmp/FooterCmp";
import logo from "/assets/logo-mini-black.svg";
import { Link, Outlet } from "react-router-dom";
import "./ContentPageLayout.scss";

const ContentPageLayout = () => {
  return (
    <div className="content-page-layout">
      <Link to="/" className="content-layout-logo">
        <img src={logo} alt="look-up-logo" />
      </Link>

      <div className="content-layout-inner-wrapper">
        <Outlet />
      </div>

      <FooterCmp />
    </div>
  );
};

export default ContentPageLayout;
