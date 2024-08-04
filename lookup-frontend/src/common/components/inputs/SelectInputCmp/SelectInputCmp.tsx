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
}

const SelectInputCmp: FC<SelectInputCmpProps> = ({ id, label, required, options, width }: SelectInputCmpProps) => {
  const [value, setValue] = useState("");
  const changeValue = (event: SelectChangeEvent) => setValue(event.target.value);

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
      <Select labelId={`${id}-label`} id={id} value={value} onChange={changeValue} label={label}>
        {options.map((option) => {
          return (
            <MenuItem key={id} value={option.value}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInputCmp;
