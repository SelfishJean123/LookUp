import { FC, ReactNode } from "react";
import { IconButton } from "@mui/material";

interface IconButtonCmpProps {
  icon: ReactNode;
  color?: string;
  bgColor?: string;
  hoverBgColor?: string;
  onClick?: () => void;
}

const IconButtonCmp: FC<IconButtonCmpProps> = ({ icon, color, bgColor, hoverBgColor, onClick }: IconButtonCmpProps) => {
  return (
    <IconButton
      className="icon-button-component"
      sx={{
        color: color || "#000",
        backgroundColor: bgColor || "transparent",
        lineHeight: 1,
        ":hover": {
          backgroundColor: hoverBgColor,
        },
      }}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

export default IconButtonCmp;
