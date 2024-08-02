import Button from "@mui/material/Button";
import { FC } from "react";
import "./LabelButtonCmp.scss";

interface LabelButtonCmpProps {
  label: string;
  color?: string;
  bgColor?: string;
  hoverBgColor?: string;
  type: "button" | "submit" | undefined;
  variant: "outlined" | "contained" | "text";
  onClick?: () => void;
}

const LabelButtonCmp: FC<LabelButtonCmpProps> = ({
  label,
  color,
  bgColor,
  hoverBgColor,
  type,
  variant,
  onClick,
}: LabelButtonCmpProps) => {
  return (
    <Button
      className="label-button-component"
      variant={variant}
      type={type}
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

export default LabelButtonCmp;
