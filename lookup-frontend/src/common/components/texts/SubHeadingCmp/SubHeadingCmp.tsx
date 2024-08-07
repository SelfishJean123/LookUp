import { FC } from "react";
import "./SubHeadingCmp.scss";

interface SubHeadingCmpProps {
  subHeadingText: string;
}

const SubHeadingCmp: FC<SubHeadingCmpProps> = ({ subHeadingText }) => {
  return <h3 className="sub-heading-component">{subHeadingText}</h3>;
};

export default SubHeadingCmp;
