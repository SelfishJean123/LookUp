import { Chip } from "@mui/material";
import { ElementType, FC } from "react";

interface ChipButtonCmpProps {
  label: string;
  component: ElementType;
  href?: string;
  variant: "filled" | "outlined";
  onClick?: () => void;
}

const ChipButtonCmp: FC<ChipButtonCmpProps> = ({ label, component, href, variant, onClick }: ChipButtonCmpProps) => {
  return (
    <Chip
      className="chip-button-component"
      label={label}
      component={component}
      href={href}
      variant={variant}
      size="small"
      clickable
      onClick={onClick}
    />
  );
};

export default ChipButtonCmp;
