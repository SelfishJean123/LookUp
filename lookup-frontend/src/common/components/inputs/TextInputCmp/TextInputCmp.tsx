import { FC } from "react";
import { TextField } from "@mui/material";

interface TextInputCmpProps {
  id: string;
  label: string;
  required: boolean;
  multiline?: boolean;
  maxRows?: number;
  width: number;
}

const TextInputCmp: FC<TextInputCmpProps> = ({ id, label, required, multiline, maxRows, width }: TextInputCmpProps) => {
  return (
    <TextField
      className="text-input-component"
      id={id}
      label={label}
      variant="outlined"
      size="small"
      required={required}
      multiline={multiline}
      maxRows={maxRows}
      sx={{
        width: width < 100 ? `calc(${width}% - 5px)` : `${width}%`,
      }}
    />
  );
};

export default TextInputCmp;
