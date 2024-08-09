import { FC } from "react";
import "./MainHeadingCmp.scss";

interface MainHeadingCmpProps {
  headingText: string;
}

const MainHeadingCmp: FC<MainHeadingCmpProps> = ({ headingText }) => {
  return <h1 className="main-heading-component">{headingText}</h1>;
};

export default MainHeadingCmp;
