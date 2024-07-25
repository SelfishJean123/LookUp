import Button from "@mui/material/Button";
import { FC } from "react";

interface LabelButtonCmpProps {
  label: string;
  bgColor: string;
  type: "button" | "submit" | undefined;
  onClick?: () => void;
}

const LabelButtonCmp: FC<LabelButtonCmpProps> = ({ label, bgColor, type, onClick }: LabelButtonCmpProps) => {
  return (
    <Button
      className="label-button-component"
      variant="contained"
      type={type}
      onClick={onClick}
      sx={{
        backgroundColor: bgColor,
      }}
    >
      {label}
    </Button>
  );
};

export default LabelButtonCmp;
