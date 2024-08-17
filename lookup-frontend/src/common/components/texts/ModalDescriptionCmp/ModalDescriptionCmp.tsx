import { FC } from "react";
import "./ModalDescriptionCmp.scss";

interface ModalDescriptionCmpProps {
  descriptionText: string;
  fontSize: "small" | "medium" | "large";
}

const ModalDescriptionCmp: FC<ModalDescriptionCmpProps> = ({ descriptionText, fontSize }) => {
  return <p className={`modal-description-component ${fontSize}`}>{descriptionText}</p>;
};

export default ModalDescriptionCmp;
