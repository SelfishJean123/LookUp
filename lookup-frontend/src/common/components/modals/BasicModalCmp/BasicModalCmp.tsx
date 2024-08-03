import LabelIconButtonCmp from "../../buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import ModalDescriptionCmp from "../../texts/ModalDescriptionCmp/ModalDescriptionCmp";
import ModalHeadingCmp from "../../texts/ModalHeadingCmp/ModalHeadingCmp";
import { Box, Modal } from "@mui/material";
import { ComponentType, ReactNode, useState } from "react";
import "./BasicModalCmp.scss";

interface BasicModalCmpProps<T> {
  modalOpenButtonText: string;
  modalOpenButtonTextColor?: string;
  modalOpenButtonIcon?: ReactNode;
  modalOpenButtonIconPosition?: "start" | "end";
  modalOpenButtonBgColor?: string;
  modalOpenButtonBgHoverColor?: string;
  modalOpenButtonVariant: "outlined" | "contained" | "text";
  modalHeadingText: string;
  modalDescriptionText: string;
  InnerFormCmp: ComponentType<T>;
  innerFormCmpProps?: T;
}

const BasicModalCmp = <T,>({
  modalOpenButtonText,
  modalOpenButtonTextColor,
  modalOpenButtonIcon,
  modalOpenButtonIconPosition,
  modalOpenButtonBgColor,
  modalOpenButtonBgHoverColor,
  modalOpenButtonVariant,
  modalHeadingText,
  modalDescriptionText,
  InnerFormCmp,
  innerFormCmpProps,
}: BasicModalCmpProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="basic-modal-component">
      <LabelIconButtonCmp
        label={modalOpenButtonText}
        icon={modalOpenButtonIcon}
        iconPosition={modalOpenButtonIconPosition}
        color={modalOpenButtonTextColor}
        bgColor={modalOpenButtonBgColor}
        hoverBgColor={modalOpenButtonBgHoverColor}
        type="button"
        variant={modalOpenButtonVariant}
        onClick={() => setIsModalOpen(true)}
      />

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className="basic-modal-body">
          <ModalHeadingCmp headingText={modalHeadingText} />
          <ModalDescriptionCmp descriptionText={modalDescriptionText} />
          <InnerFormCmp {...(innerFormCmpProps as T)} close={() => setIsModalOpen(false)} />
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModalCmp;
