import { FC } from "react";
import "./MainHeadingCmp.scss";

interface MainHeadingCmpProps {
  headingText: string;
}

const MainHeadingCmp: FC<MainHeadingCmpProps> = ({ headingText }: MainHeadingCmpProps) => {
  return <h2 className="main-heading-component">{headingText}</h2>;
};

export default MainHeadingCmp;
