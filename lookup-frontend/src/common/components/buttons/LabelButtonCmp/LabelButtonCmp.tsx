import Button from "@mui/material/Button";
import { FC } from "react";

interface LabelButtonCmpProps {
  label: string;
  color?: string;
  bgColor?: string;
  type: "button" | "submit" | undefined;
  onClick?: () => void;
}

const LabelButtonCmp: FC<LabelButtonCmpProps> = ({ label, color, bgColor, type, onClick }: LabelButtonCmpProps) => {
  return (
    <Button
      className="label-button-component"
      variant="contained"
      type={type}
      onClick={onClick}
      sx={{
        color: color || "#000",
        backgroundColor: bgColor || "transparent",
        textTransform: "capitalize",
        fontWeight: 700,
      }}
    >
      {label}
    </Button>
  );
};

export default LabelButtonCmp;
