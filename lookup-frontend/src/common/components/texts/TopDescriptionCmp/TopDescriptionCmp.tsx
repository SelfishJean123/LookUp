import { FC } from "react";
import "./TopDescriptionCmp.scss";

interface TopDescriptionCmpProps {
  descriptionText: string;
}

const TopDescriptionCmp: FC<TopDescriptionCmpProps> = ({ descriptionText }) => {
  return <p className="top-description-component">{descriptionText}</p>;
};

export default TopDescriptionCmp;
