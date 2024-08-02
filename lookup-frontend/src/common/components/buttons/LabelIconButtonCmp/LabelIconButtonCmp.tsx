import Button from "@mui/material/Button";
import { FC, ReactNode } from "react";
import "./LabelIconButtonCmp.scss";

interface LabelIconButtonCmpProps {
  label: string;
  icon: ReactNode;
  iconPosition: "start" | "end";
  color?: string;
  bgColor?: string;
  hoverBgColor?: string;
  type: "button" | "submit" | undefined;
  variant: "outlined" | "contained" | "text";
  onClick?: () => void;
}

const LabelIconButtonCmp: FC<LabelIconButtonCmpProps> = ({
  label,
  icon,
  iconPosition,
  color,
  bgColor,
  hoverBgColor,
  type,
  variant,
  onClick,
}: LabelIconButtonCmpProps) => {
  return (
    <Button
      className="label-icon-button-component"
      variant={variant}
      type={type}
      startIcon={iconPosition === "start" ? icon : undefined}
      endIcon={iconPosition === "end" ? icon : undefined}
      onClick={onClick}
      sx={{
        color: color || "#000",
        backgroundColor: bgColor || "transparent",
        ":hover": {
          backgroundColor: hoverBgColor,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default LabelIconButtonCmp;
