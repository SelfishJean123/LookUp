import Button from "@mui/material/Button";
import { FC } from "react";

interface LabelButtonCmpProps {
  label: string;
  bgColor: string;
  onClick: () => void;
}

const LabelButtonCmp: FC<{ label: string; bgColor: string; onClick: any }> = ({
  label,
  bgColor,
  onClick,
}: LabelButtonCmpProps) => {
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
