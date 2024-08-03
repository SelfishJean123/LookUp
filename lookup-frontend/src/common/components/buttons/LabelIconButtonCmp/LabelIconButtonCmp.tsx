import Button from "@mui/material/Button";
import { FC, ReactNode } from "react";
import "./LabelIconButtonCmp.scss";

interface LabelIconButtonProps {
  label: string;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  color?: string;
  bgColor?: string;
  hoverBgColor?: string;
  type?: "button" | "submit";
  variant: "outlined" | "contained" | "text";
  onClick?: () => void;
}

const LabelIconButton: FC<LabelIconButtonProps> = ({
  label,
  icon,
  iconPosition,
  color,
  bgColor,
  hoverBgColor,
  type,
  variant,
  onClick,
}: LabelIconButtonProps) => {
  return (
    <Button
      className="label-icon-button-component"
      variant={variant}
      type={type || "button"}
      startIcon={iconPosition === "start" && icon ? icon : undefined}
      endIcon={iconPosition === "end" && icon ? icon : undefined}
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

export default LabelIconButton;
