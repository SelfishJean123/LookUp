import ModalDescriptionCmp from "../../texts/ModalDescriptionCmp/ModalDescriptionCmp";
import ModalHeadingCmp from "../../texts/ModalHeadingCmp/ModalHeadingCmp";
import { Box, ListItemButton, ListItemIcon, ListItemText, Modal } from "@mui/material";
import { ComponentType, ReactNode, useState } from "react";
import "./MenuModalCmp.scss";

interface MenuModalCmpProps<T> {
  modalOpenButtonText: string;
  modalOpenButtonTextColor: string;
  modalOpenButtonIcon: ReactNode;
  modalHeadingText: string;
  modalDescriptionText: string;
  InnerFormCmp: ComponentType<T>;
  innerFormCmpProps?: T;
  isDrawerOpen: boolean;
}

const MenuModalCmp = <T,>({
  modalOpenButtonText,
  modalOpenButtonTextColor,
  modalOpenButtonIcon,
  modalHeadingText,
  modalDescriptionText,
  InnerFormCmp,
  innerFormCmpProps,
  isDrawerOpen,
}: MenuModalCmpProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="menu-modal-component">
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: isDrawerOpen ? "initial" : "center",
          px: 2.5,
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: isDrawerOpen ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {modalOpenButtonIcon}
        </ListItemIcon>
        <ListItemText
          primary={modalOpenButtonText}
          sx={{ opacity: isDrawerOpen ? 1 : 0, color: { modalOpenButtonTextColor } }}
        />
      </ListItemButton>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className="menu-modal-body shadow">
          <ModalHeadingCmp headingText={modalHeadingText} />
          <ModalDescriptionCmp descriptionText={modalDescriptionText} />
          <InnerFormCmp {...(innerFormCmpProps as T)} close={() => setIsModalOpen(false)} />
        </Box>
      </Modal>
    </div>
  );
};

export default MenuModalCmp;
