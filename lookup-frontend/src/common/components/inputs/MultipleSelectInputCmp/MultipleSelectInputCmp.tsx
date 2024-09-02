import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FC, useState } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

interface SelectOption {
  value: string | number;
  name: string;
}

interface MultipleSelectInputCmpProps {
  id: string;
  label: string;
  required: boolean;
  options: SelectOption[];
  onInput: (id: string, value: string[]) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelectInputCmp: FC<MultipleSelectInputCmpProps> = ({ id, label, required, options, onInput }) => {
  const [currentValue, setCurrentValue] = useState<string[]>([]);

  return (
    <FormControl className="multiple-select-input-component" variant="outlined" size="small" required={required}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        id={id}
        labelId={`${id}-label`}
        label={label}
        multiple
        value={currentValue}
        input={<OutlinedInput label="Tag" />}
        onChange={(event: SelectChangeEvent<typeof currentValue>) => {
          const newValue = event.target.value;
          const newValueArray = typeof newValue === "string" ? newValue.split(",") : newValue;
          setCurrentValue(newValueArray);
          onInput(id, newValueArray);
        }}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options.map((option, index) => {
          return (
            <MenuItem value={option.value} key={index}>
              <Checkbox checked={currentValue.indexOf(option.value.toString()) > -1} />
              <ListItemText primary={option.name} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default MultipleSelectInputCmp;
