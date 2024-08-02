import Button from "@mui/material/Button";
import { FC, ReactNode } from "react";

interface LabelIconButtonCmpProps {
  label: string;
  icon: ReactNode;
  bgColor: string;
  type: "button" | "submit" | undefined;
  onClick?: () => void;
}

const LabelIconButtonCmp: FC<LabelIconButtonCmpProps> = ({
  label,
  icon,
  bgColor,
  type,
  onClick,
}: LabelIconButtonCmpProps) => {
  return (
    <Button
      className="label-icon-button-component"
      variant="contained"
      type={type}
      startIcon={icon}
      onClick={onClick}
      sx={{
        backgroundColor: bgColor,
      }}
    >
      {label}
    </Button>
  );
};

export default LabelIconButtonCmp;
