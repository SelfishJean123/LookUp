import { FC, ReactNode } from "react";
import { IconButton } from "@mui/material";

interface IconButtonCmpProps {
  icon: ReactNode;
  color?: string;
  onClick?: () => void;
}

const IconButtonCmp: FC<IconButtonCmpProps> = ({ icon, color, onClick }: IconButtonCmpProps) => {
  return (
    <IconButton
      className="icon-button-component"
      sx={{
        color: color || "#000",
      }}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

export default IconButtonCmp;
