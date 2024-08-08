import { FC } from "react";
import "./ModalSecondaryDescriptionCmp.scss";

interface ModalSecondaryDescriptionCmpProps {
  secondaryDescriptionText: string;
}

const ModalSecondaryDescriptionCmp: FC<ModalSecondaryDescriptionCmpProps> = ({ secondaryDescriptionText }) => {
  return <p className="modal-secondary-description-component">{secondaryDescriptionText}</p>;
};

export default ModalSecondaryDescriptionCmp;
