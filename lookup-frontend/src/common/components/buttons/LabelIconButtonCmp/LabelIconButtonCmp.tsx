import Button from "@mui/material/Button";
import { FC, ReactNode } from "react";

interface LabelIconButtonCmpProps {
  label: string;
  icon: ReactNode;
  bgColor: string;
  onClick: () => void;
}

const LabelIconButtonCmp: FC<LabelIconButtonCmpProps> = ({
  label,
  icon,
  bgColor,
  onClick,
}: LabelIconButtonCmpProps) => {
  return (
    <Button
      className="label-icon-button-component"
      variant="contained"
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
