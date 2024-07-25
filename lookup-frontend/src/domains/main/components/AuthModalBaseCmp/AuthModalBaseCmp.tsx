import ModalHeadingCmp from "../../../../common/components/texts/ModalHeadingCmp/ModalHeadingCmp";
import { Box, ListItemButton, ListItemIcon, ListItemText, Modal } from "@mui/material";
import { ComponentType, ReactNode, useState } from "react";
import "./AuthModalBaseCmp.scss";

interface AuthModalBaseCmpProps<T> {
  modalHeadingText: string;
  modalOpenButtonText: string;
  modalOpenButtonIcon: ReactNode;
  InnerFormCmp: ComponentType<T>;
  innerFormCmpProps?: T;
  isDrawerOpen: boolean;
}

const AuthModalBaseCmp = <T,>({
  modalHeadingText,
  modalOpenButtonText,
  modalOpenButtonIcon,
  InnerFormCmp,
  innerFormCmpProps,
  isDrawerOpen,
}: AuthModalBaseCmpProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="auth-modal-base-component">
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
        <ListItemText primary={modalOpenButtonText} sx={{ opacity: isDrawerOpen ? 1 : 0, color: "#fff" }} />
      </ListItemButton>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className="auth-modal-base-body">
          <ModalHeadingCmp headingText={modalHeadingText} />
          <InnerFormCmp {...(innerFormCmpProps as T)} close={() => setIsModalOpen(false)} />
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModalBaseCmp;
