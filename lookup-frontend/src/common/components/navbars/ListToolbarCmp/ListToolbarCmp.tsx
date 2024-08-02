import LabelButtonCmp from "../../buttons/LabelButtonCmp/LabelButtonCmp";
import LabelIconButtonCmp from "../../buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import SearchBarCmp from "../SearchBarCmp/SearchBarCmp";
import { AppBar, Box, Toolbar } from "@mui/material";
import { FC } from "react";
import { FilterAlt, SwapVert } from "@mui/icons-material";

interface ListToolbarCmpProps {
  addLabel: string;
  addOnClick: () => void;
}

const ListToolbarCmp: FC<ListToolbarCmpProps> = ({ addLabel, addOnClick }: ListToolbarCmpProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LabelIconButtonCmp
            icon={<FilterAlt />}
            label="Filters"
            bgColor="#387323"
            onClick={() => {
              console.log("filters button click");
            }}
          />
          <LabelIconButtonCmp
            icon={<SwapVert />}
            label="Sorting"
            bgColor="#387323"
            onClick={() => {
              console.log("sorting button click");
            }}
          />
          <SearchBarCmp />
          <LabelButtonCmp label={addLabel} bgColor="#387323" onClick={() => addOnClick} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ListToolbarCmp;
