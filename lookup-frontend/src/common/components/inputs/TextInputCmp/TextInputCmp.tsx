import { FC } from "react";
import { TextField } from "@mui/material";

interface TextInputCmpProps {
  id: string;
  label: string;
  required: boolean;
  multiline?: boolean;
  maxRows?: number;
}

const TextInputCmp: FC<TextInputCmpProps> = ({ id, label, required, multiline, maxRows }: TextInputCmpProps) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      required={required}
      multiline={multiline}
      maxRows={maxRows}
    />
  );
};

export default TextInputCmp;
