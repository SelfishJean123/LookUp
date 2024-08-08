import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { FC, useEffect, useState } from "react";
import "./SnackBarCmp.scss";

interface SnackBarCmpProps {
  isSnackBarOpen: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
  variant: "filled" | "outlined";
  onClear: () => void;
}

const SnackBarCmp: FC<SnackBarCmpProps> = ({ isSnackBarOpen, message, severity, variant, onClear }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isSnackBarOpen);
  }, [isSnackBarOpen]);

  const closeSnackBar = () => {
    onClear();
    setIsOpen(false);
  };

  return (
    <Snackbar
      className="snackbar-component"
      open={isOpen}
      autoHideDuration={5000}
      onClose={closeSnackBar}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert className="snackbar-alert" severity={severity} variant={variant} onClose={closeSnackBar}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarCmp;
