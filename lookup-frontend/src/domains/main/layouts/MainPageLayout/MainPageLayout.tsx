import MainMenuCmp from "../../components/MainMenuCmp/MainMenuCmp";
import { Outlet } from "react-router-dom";
import "./MainPageLayout.scss";

const MainPageLayout = () => {
  return (
    <div className="main-page-layout">
      <Outlet />
      <MainMenuCmp />
    </div>
  );
};

export default MainPageLayout;
