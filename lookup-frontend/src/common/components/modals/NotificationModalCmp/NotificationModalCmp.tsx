import LabelIconButton from "../../buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import ModalDescriptionCmp from "../../texts/ModalDescriptionCmp/ModalDescriptionCmp";
import ModalHeadingCmp from "../../texts/ModalHeadingCmp/ModalHeadingCmp";
import { Box, Modal } from "@mui/material";
import { FC, useEffect, useState } from "react";
import "./NotificationModalCmp.scss";

interface NotificationModalCmpProps {
  modalHeadingText: string;
  modalDescriptionText?: string;
  modalCloseButtonText: string;
  isOpen: boolean;
}

const NotificationModalCmp: FC<NotificationModalCmpProps> = ({
  modalHeadingText,
  modalDescriptionText,
  modalCloseButtonText,
  isOpen,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <div className="notification-modal-component">
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className="notification-modal-body shadow">
          <ModalHeadingCmp headingText={modalHeadingText} />
          {modalDescriptionText && <ModalDescriptionCmp descriptionText={modalDescriptionText} />}
          <LabelIconButton label={modalCloseButtonText} variant="contained" onClick={() => setIsModalOpen(false)} />
        </Box>
      </Modal>
    </div>
  );
};

export default NotificationModalCmp;
