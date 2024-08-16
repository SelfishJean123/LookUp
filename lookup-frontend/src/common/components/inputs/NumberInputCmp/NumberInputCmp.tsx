import { ChangeEvent, FC, useState } from "react";
import { TextField } from "@mui/material";

interface NumberInputCmpProps {
  id: string;
  label: string;
  required: boolean;
  width: number;
  input: (id: string, value: number) => void;
}

const NumberInputCmp: FC<NumberInputCmpProps> = ({ id, label, required, width, input }) => {
  const [value, setValue] = useState<number | undefined>(undefined);

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;

    if (isNaN(newValue)) setValue(undefined);
    else {
      setValue(newValue);
      input(id, newValue);
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
      sx={{
        width: width < 100 ? `calc(${width}% - 5px)` : `${width}%`,
      }}
    />
  );
};

export default NumberInputCmp;
