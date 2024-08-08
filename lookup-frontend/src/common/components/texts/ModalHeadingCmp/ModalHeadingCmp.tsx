import { FC } from "react";
import "./ModalHeadingCmp.scss";

interface ModalHeadingCmpProps {
  headingText: string;
}

const ModalHeadingCmp: FC<ModalHeadingCmpProps> = ({ headingText }) => {
  return <h2 className="modal-heading-component">{headingText}</h2>;
};

export default ModalHeadingCmp;
