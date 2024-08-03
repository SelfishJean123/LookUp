import TextField from "@mui/material/TextField";
import { ChangeEvent, FC, useState } from "react";

interface NumberInputCmpProps {
  id: string;
  label: string;
  required: boolean;
}

const NumberInputCmp: FC<NumberInputCmpProps> = ({ id, label, required }: NumberInputCmpProps) => {
  const [value, setValue] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;

    if (isNaN(newValue)) {
      setError("Invalid number");
    } else {
      setError(null);
      setValue(newValue);
    }
  };

  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      required={required}
      type="number"
      value={value}
      onChange={changeValue}
      error={Boolean(error)}
      helperText={error || ""}
    />
  );
};

export default NumberInputCmp;
