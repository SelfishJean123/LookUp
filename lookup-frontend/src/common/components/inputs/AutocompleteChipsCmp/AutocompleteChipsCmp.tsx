import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC } from "react";

interface Option {
  value: string;
  name: string;
}

interface AutocompleteChipsCmpProps {
  id: string;
  label: string;
  options: Option[];
  width: number;
}

const AutocompleteChipsCmp: FC<AutocompleteChipsCmpProps> = ({ id, label, options, width }) => {
  return (
    <Stack
      className="autocomplete-input-component"
      spacing={3}
      sx={{
        width: width < 100 ? `calc(${width}% - 5px)` : `${width}%`,
      }}
    >
      <Autocomplete
        id={id}
        size="small"
        multiple={true}
        fullWidth
        options={options}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Stack>
  );
};

export default AutocompleteChipsCmp;
