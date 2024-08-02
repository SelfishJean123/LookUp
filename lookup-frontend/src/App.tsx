import MainMenuCmp from "./components/navigators/MainMenuCmp/MainMenuCmp";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Outlet />
      <MainMenuCmp />
    </>
  );
};

export default App;
