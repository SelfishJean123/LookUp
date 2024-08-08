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
  input: (id: string, value: string) => void;
}

const TextInputCmp: FC<TextInputCmpProps> = ({ id, label, required, type, multiline, maxRows, width, input }) => {
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
      onInput={(event) => input(id, (event.target as HTMLInputElement).value)}
    />
  );
};

export default TextInputCmp;
