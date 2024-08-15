import Autocomplete from "@mui/material/Autocomplete";
import Option from "../../../interfaces/Option.interface";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FC } from "react";

interface AutocompleteChipsCmpProps {
  id: string;
  label: string;
  options: Option[];
  width: number;
  input: (id: string, value: Option[]) => void;
}

const AutocompleteChipsCmp: FC<AutocompleteChipsCmpProps> = ({ id, label, options, width, input }) => {
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
        onChange={(event, newValue) => input(id, newValue)}
      />
    </Stack>
  );
};

export default AutocompleteChipsCmp;
