import { Chip } from "@mui/material";
import { ElementType, FC } from "react";

interface ChipButtonCmpProps {
  label: string;
  component: ElementType;
  href?: string;
  variant: "filled" | "outlined";
  onDelete?: () => void;
  onClick?: () => void;
}

const ChipButtonCmp: FC<ChipButtonCmpProps> = ({
  label,
  component,
  href,
  variant,
  onDelete,
  onClick,
}: ChipButtonCmpProps) => {
  return (
    <Chip
      className="chip-button-component"
      label={label}
      component={component}
      href={href}
      variant={variant}
      size="small"
      clickable
      onDelete={onDelete}
      onClick={onClick}
    />
  );
};

export default ChipButtonCmp;
