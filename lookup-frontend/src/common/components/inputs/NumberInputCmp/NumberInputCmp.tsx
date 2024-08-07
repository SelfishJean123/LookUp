import { ChangeEvent, FC, useState } from "react";
import { TextField } from "@mui/material";

interface NumberInputCmpProps {
  id: string;
  label: string;
  required: boolean;
  width: number;
}

const NumberInputCmp: FC<NumberInputCmpProps> = ({ id, label, required, width }) => {
  const [value, setValue] = useState<number | string>("");
  const [error, setError] = useState<string | null>(null);

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;

    if (isNaN(newValue)) setError("Invalid number");
    else {
      setError(null);
      setValue(newValue);
    }
  };

  return (
    <TextField
      className="number-input-component"
      id={id}
      label={label}
      variant="outlined"
      size="small"
      required={required}
      type="number"
      value={value}
      onChange={changeValue}
      error={Boolean(error)}
      helperText={error || ""}
      sx={{
        width: width < 100 ? `calc(${width}% - 5px)` : `${width}%`,
      }}
    />
  );
};

export default NumberInputCmp;
