import ChangePasswordFormCmp from "../ChangePasswordFormCmp/ChangePasswordFormCmp";
import ModalDescriptionCmp from "../../../../common/components/texts/ModalDescriptionCmp/ModalDescriptionCmp";
import ModalHeadingCmp from "../../../../common/components/texts/ModalHeadingCmp/ModalHeadingCmp";
import ModalSecondaryDescriptionCmp from "../../../../common/components/texts/ModalSecondaryDescriptionCmp/ModalSecondaryDescriptionCmp";
import SignInFormCmp from "../SignInFormCmp/SignInFormCmp";
import SignOutFormCmp from "../SignOutFormCmp/SignOutFormCmp";
import SignUpFormCmp from "../SignUpFormCmp/SignUpFormCmp";
import { Box, ListItemButton, ListItemIcon, ListItemText, Modal } from "@mui/material";
import { ExitToAppSharp, LoginSharp, LogoutSharp, PasswordSharp } from "@mui/icons-material";
import { FC, useState } from "react";
import "./AuthModalCmp.scss";

interface AuthModalCmpProps {
  signForm: "sign-in" | "sign-up" | "sign-out" | "change-password";
  isDrawerOpen: boolean;
}

const AuthModalCmp: FC<AuthModalCmpProps> = ({ signForm, isDrawerOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<string>(signForm);

  let headingText;
  let descriptionText;
  let secondaryDescriptionText;
  let icon;
  switch (activeForm) {
    case "sign-in":
      headingText = "Sign In";
      descriptionText = "";
      secondaryDescriptionText = "";
      icon = <LoginSharp />;
      break;

    case "sign-up":
      headingText = "Sign Up";
      descriptionText = "";
      secondaryDescriptionText = "";
      icon = <ExitToAppSharp />;
      break;

    case "sign-out":
      headingText = "Sign Out";
      descriptionText = "";
      secondaryDescriptionText = "";
      icon = <LogoutSharp />;
      break;

    case "change-password":
      headingText = "Change Password";
      descriptionText = "";
      secondaryDescriptionText = "";
      icon = <PasswordSharp />;
      break;

    default:
      headingText = "";
      descriptionText = "";
      secondaryDescriptionText = "";
      icon = null;
      break;
  }

  return (
    <div className="auth-modal-component">
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
          {icon}
        </ListItemIcon>
        <ListItemText primary={headingText} sx={{ color: "#fff", opacity: isDrawerOpen ? 1 : 0 }} />
      </ListItemButton>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className="auth-modal-body shadow">
          <ModalHeadingCmp headingText={headingText} />
          <ModalDescriptionCmp descriptionText={descriptionText} />
          <ModalSecondaryDescriptionCmp secondaryDescriptionText={secondaryDescriptionText} />

          {activeForm === "sign-in" && <SignInFormCmp close={() => setIsModalOpen(false)} />}
          {activeForm === "sign-up" && <SignUpFormCmp close={() => setIsModalOpen(false)} />}
          {activeForm === "sign-out" && <SignOutFormCmp close={() => setIsModalOpen(false)} />}
          {activeForm === "change-password" && <ChangePasswordFormCmp close={() => setIsModalOpen(false)} />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModalCmp;
