import AddIngredientFormCmp from "../AddIngredientFormCmp/AddIngredientFormCmp";
import BasicModalCmp from "../../../../common/components/modals/BasicModalCmp/BasicModalCmp";
import ChipButtonCmp from "../../../../common/components/buttons/ChipButtonCmp/ChipButtonCmp";
import LabelIconButtonCmp from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import SearchBarCmp from "../../../../common/components/navigation/SearchBarCmp/SearchBarCmp";
import { FC, useState } from "react";
import { FilterAlt, SwapVert } from "@mui/icons-material";
import { Stack, Toolbar } from "@mui/material";
import "./ProductsListToolbarCmp.scss";

interface ChipData {
  key: number;
  label: string;
}

const ProductsListToolbarCmp: FC = () => {
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
    <div className="products-list-toolbar-component">
      <Toolbar className="products-list-toolbar-wrapper">
        <div className="products-list-toolbar-filter-sort">
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

        <div className="products-list-toolbar-search-add">
          <SearchBarCmp />
          <BasicModalCmp
            modalOpenButtonText="Add Product"
            modalOpenButtonTextColor="#fff"
            modalOpenButtonBgColor="#387323"
            modalOpenButtonBgHoverColor="#124500"
            modalOpenButtonVariant="contained"
            modalHeadingText="Add New Product"
            modalDescriptionText="Niewielką ilość kremu nałóż na twarz, szyję i dekolt, omijając okolice oczu. Dokładnie wmasuj do całkowitego wchłonięcia. Stosuj na oczyszczoną skórę rano lub/i wieczorem, w zależności od potrzeb. Dla kompleksowej ochrony skóry twarzy na dzień, po użyciu rekomendowane jest nałożenie kremu z filtrem SPF. Sprawdź nasz lekki krem lub lekką emulsję."
            InnerFormCmp={AddIngredientFormCmp}
            // innerFormCmpProps={}
          />
        </div>
      </Toolbar>

      <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap" className="products-list-toolbar-chips">
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

export default ProductsListToolbarCmp;
