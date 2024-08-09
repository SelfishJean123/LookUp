import ChangePasswordFormCmp from "../ChangePasswordFormCmp/ChangePasswordFormCmp";
import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import ModalDescriptionCmp from "../../../../common/components/texts/ModalDescriptionCmp/ModalDescriptionCmp";
import ModalHeadingCmp from "../../../../common/components/texts/ModalHeadingCmp/ModalHeadingCmp";
import SignInFormCmp from "../SignInFormCmp/SignInFormCmp";
import SignOutFormCmp from "../SignOutFormCmp/SignOutFormCmp";
import SignUpFormCmp from "../SignUpFormCmp/SignUpFormCmp";
import { ArrowForwardSharp, ExitToAppSharp, LoginSharp, LogoutSharp, PasswordSharp } from "@mui/icons-material";
import { Box, ListItemButton, ListItemIcon, ListItemText, Modal } from "@mui/material";
import { FC, useState } from "react";
import "./AuthModalCmp.scss";

interface AuthModalCmpProps {
  signForm: "sign-in" | "sign-up" | "sign-out" | "change-password";
  isDrawerOpen: boolean;
}

const AuthModalCmp: FC<AuthModalCmpProps> = ({ signForm, isDrawerOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<string>(signForm);

  let headingText = "";
  let descriptionText = "";
  let menuIcon = null;
  let alternativeButtonText = "";
  switch (activeForm) {
    case "sign-in":
      headingText = "Sign In";
      descriptionText = "Enter your e-mail and password to sign in";
      menuIcon = <LoginSharp />;
      alternativeButtonText = "You don't have an account yet? Sign Up instead";
      break;

    case "sign-up":
      headingText = "Sign Up";
      descriptionText = "Enter your data to sign up";
      menuIcon = <ExitToAppSharp />;
      alternativeButtonText = "You already have an account? Sign In instead";
      break;

    case "sign-out":
      headingText = "Sign Out";
      descriptionText = "Are you sure you want to sign out?";
      menuIcon = <LogoutSharp />;
      break;

    case "change-password":
      headingText = "Change Password";
      descriptionText = "Enter your old password  and then the new one.";
      menuIcon = <PasswordSharp />;
      break;

    default:
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
          {menuIcon}
        </ListItemIcon>
        <ListItemText primary={headingText} sx={{ color: "#fff", opacity: isDrawerOpen ? 1 : 0 }} />
      </ListItemButton>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className="auth-modal-body shadow">
          <ModalHeadingCmp headingText={headingText} />
          <ModalDescriptionCmp descriptionText={descriptionText} />

          {(activeForm === "sign-in" || activeForm === "sign-up") && (
            <LabelIconButton
              label={alternativeButtonText}
              icon={<ArrowForwardSharp />}
              iconPosition="end"
              color="#a74713"
              hoverBgColor="transparent"
              variant="text"
              onClick={() => setActiveForm(activeForm === "sign-in" ? "sign-up" : "sign-in")}
            />
          )}

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
