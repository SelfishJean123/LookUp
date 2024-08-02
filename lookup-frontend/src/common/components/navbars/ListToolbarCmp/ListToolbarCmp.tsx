import ChipButtonCmp from "../../buttons/ChipButtonCmp/ChipButtonCmp";
import LabelButtonCmp from "../../buttons/LabelButtonCmp/LabelButtonCmp";
import LabelIconButtonCmp from "../../buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import SearchBarCmp from "../SearchBarCmp/SearchBarCmp";
import { FC, useState } from "react";
import { FilterAlt, SwapVert } from "@mui/icons-material";
import { Stack, Toolbar } from "@mui/material";
import "./ListToolbarCmp.scss";

interface ChipData {
  key: number;
  label: string;
}

interface ListToolbarCmpProps {
  addLabel: string;
  addOnClick: () => void;
}

const ListToolbarCmp: FC<ListToolbarCmpProps> = ({ addLabel, addOnClick }: ListToolbarCmpProps) => {
  const [chipData, setChipData] = useState<readonly ChipData[]>([
    { key: 0, label: "Face cream" },
    { key: 1, label: "Liquid" },
    { key: 2, label: "Vegan" },
    { key: 3, label: "Cruelty free" },
    { key: 4, label: "Pregnancy safe" },
  ]);

  const deleteChip = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div className="list-toolbar-component">
      <Toolbar className="list-toolbar-wrapper">
        <div className="list-toolbar-filter-sort">
          <LabelIconButtonCmp
            label="Filters"
            icon={<FilterAlt />}
            iconPosition="start"
            color="#fff"
            bgColor="#387323"
            hoverBgColor="#124500"
            type="button"
            variant="contained"
            onClick={() => {
              console.log("filters button click");
            }}
          />
          <LabelIconButtonCmp
            label="Sorting"
            icon={<SwapVert />}
            iconPosition="start"
            color="#fff"
            bgColor="#387323"
            hoverBgColor="#124500"
            type="button"
            variant="contained"
            onClick={() => {
              console.log("sorting button click");
            }}
          />
        </div>

        <div className="list-toolbar-search-add">
          <SearchBarCmp />
          <LabelButtonCmp
            label={addLabel}
            color="#fff"
            bgColor="#387323"
            hoverBgColor="#124500"
            type="button"
            variant="contained"
            onClick={() => addOnClick}
          />
        </div>
      </Toolbar>

      <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap" className="list-toolbar-chips">
        {chipData.map((chip) => {
          return (
            <ChipButtonCmp
              key={chip.key}
              label={chip.label}
              component={"div"}
              variant="outlined"
              onDelete={deleteChip(chip)}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default ListToolbarCmp;
