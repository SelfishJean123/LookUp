import Button from "@mui/material/Button";
import { FC } from "react";

interface LabelButtonCmpProps {
  label: string;
  bgColor: string;
  onClick: () => void;
}

const LabelButtonCmp: FC<LabelButtonCmpProps> = ({ label, bgColor, onClick }: LabelButtonCmpProps) => {
  return (
    <Button
      className="label-button-component"
      variant="contained"
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
