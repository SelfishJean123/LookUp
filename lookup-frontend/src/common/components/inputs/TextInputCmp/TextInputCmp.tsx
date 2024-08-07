import { FC } from "react";
import { TextField } from "@mui/material";

interface TextInputCmpProps {
  id: string;
  label: string;
  required: boolean;
  type?: "text" | "email" | "password";
  multiline?: boolean;
  maxRows?: number;
  width: number;
}

const TextInputCmp: FC<TextInputCmpProps> = ({ id, label, required, type, multiline, maxRows, width }) => {
  return (
    <TextField
      className="text-input-component"
      id={id}
      label={label}
      variant="outlined"
      size="small"
      required={required}
      type={type || "text"}
      multiline={multiline || false}
      maxRows={maxRows || 1}
      sx={{
        width: width < 100 ? `calc(${width}% - 5px)` : `${width}%`,
      }}
    />
  );
};

export default TextInputCmp;
