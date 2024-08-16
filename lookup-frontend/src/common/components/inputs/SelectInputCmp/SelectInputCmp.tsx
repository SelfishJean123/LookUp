import { FC, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface SelectOption {
  value: string | number;
  name: string;
}

interface SelectInputCmpProps {
  id: string;
  label: string;
  required: boolean;
  options: SelectOption[];
  width: number;
  input: (id: string, value: string) => void;
}

const SelectInputCmp: FC<SelectInputCmpProps> = ({ id, label, required, options, width, input }) => {
  const [value, setValue] = useState("");

  return (
    <FormControl
      className="select-input-component"
      variant="outlined"
      size="small"
      required={required}
      sx={{
        width: width < 100 ? `calc(${width}% - 5px)` : `${width}%`,
      }}
    >
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        id={id}
        label={label}
        labelId={`${id}-label`}
        value={value}
        onChange={(event: SelectChangeEvent) => {
          setValue(event.target.value);
          input(id, (event.target as HTMLInputElement).value);
        }}
      >
        {options.map((option, index) => {
          return (
            <MenuItem value={option.value} key={index}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInputCmp;
