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
}

const SelectInputCmp: FC<SelectInputCmpProps> = ({ id, label, required, options }: SelectInputCmpProps) => {
  const [value, setValue] = useState("");
  const changeValue = (event: SelectChangeEvent) => setValue(event.target.value);

  return (
    <FormControl variant="outlined" size="small" fullWidth required={required}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select labelId={`${id}-label`} id={id} value={value} onChange={changeValue} label={label}>
        {options.map((option) => {
          return <MenuItem value={option.value}>{option.name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInputCmp;
