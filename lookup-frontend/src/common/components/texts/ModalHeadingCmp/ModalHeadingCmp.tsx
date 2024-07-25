import { FC } from "react";
import "./ModalHeadingCmp.scss";

interface ModalHeadingCmpProps {
  headingText: string;
}

const ModalHeadingCmp: FC<ModalHeadingCmpProps> = ({ headingText }: ModalHeadingCmpProps) => {
  return <h3 className="modal-heading-component">{headingText}</h3>;
};

export default ModalHeadingCmp;
