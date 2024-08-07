import { FC } from "react";
import "./ModalDescriptionCmp.scss";

interface ModalDescriptionCmpProps {
  descriptionText: string;
}

const ModalDescriptionCmp: FC<ModalDescriptionCmpProps> = ({ descriptionText }) => {
  return <p className="modal-description-component">{descriptionText}</p>;
};

export default ModalDescriptionCmp;
