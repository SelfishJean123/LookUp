import MultipleSelectInputCmp from "../../../../common/components/inputs/MultipleSelectInputCmp/MultipleSelectInputCmp";
import Option from "../../../../common/interfaces/Option.interface";
import ProductsFiltersType from "../../types/ProductsFiltersType.type";
import { FC, useEffect, useState } from "react";
import "./FiltersProductsCmp.scss";
// import ChipButtonCmp from "../../../../common/components/buttons/ChipButtonCmp/ChipButtonCmp";
// import ChipData from "../../../../common/interfaces/ChipData.interface";
// import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
// import { Stack } from "@mui/material";

interface FiltersProductsCmpProps {
  producers: Option[];
  brands: Option[];
  categories: Option[];
  subCategories: Option[];
  vegan: Option[];
  crueltyFree: Option[];
  inci: Option[];
  onFilter: (filters: ProductsFiltersType) => void;
}

const FiltersProductsCmp: FC<FiltersProductsCmpProps> = ({
  producers,
  brands,
  categories,
  subCategories,
  vegan,
  crueltyFree,
  inci,
  onFilter,
}) => {
  // const [chipData, setChipData] = useState<ChipData[]>([]);
  const [filters, setFilters] = useState<ProductsFiltersType>({
    producers: [],
    brands: [],
    categories: [],
    subCategories: [],
    vegan: [],
    crueltyFree: [],
    inci: [],
  });

  // useEffect(() => {
  //   const chipData = Object.values(filters)
  //     .flat()
  //     .map((chip, index) => ({
  //       key: index,
  //       label: chip,
  //     }));

  //   setChipData(chipData);
  // }, [filters]);

  // const deleteChip = (chipToDelete: ChipData) => () => {
  //   setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  // };

  return (
    <div className="filters-products-component">
      <div className="filters-wrapper">
        <MultipleSelectInputCmp
          id="producers"
          label="Producers"
          required={false}
          options={producers}
          onInput={(_, value) => {
            setFilters({
              ...filters,
              producers: value,
            });
            onFilter({ ...filters, producers: value });
          }}
        />
        <MultipleSelectInputCmp
          id="brands"
          label="Brands"
          required={false}
          options={brands}
          onInput={(_, value) => {
            setFilters({
              ...filters,
              brands: value,
            });
            onFilter({ ...filters, brands: value });
          }}
        />
        <MultipleSelectInputCmp
          id="categories"
          label="Categories"
          required={false}
          options={categories}
          onInput={(_, value) => {
            setFilters({
              ...filters,
              categories: value,
            });
            onFilter({ ...filters, categories: value });
          }}
        />
        <MultipleSelectInputCmp
          id="subCategories"
          label="Sub Categories"
          required={false}
          options={subCategories}
          onInput={(_, value) => {
            setFilters({
              ...filters,
              subCategories: value,
            });
            onFilter({ ...filters, subCategories: value });
          }}
        />
        <MultipleSelectInputCmp
          id="vegan"
          label="Vegan"
          required={false}
          options={vegan}
          onInput={(_, value) => {
            setFilters({
              ...filters,
              vegan: value,
            });
            onFilter({ ...filters, vegan: value });
          }}
        />
        <MultipleSelectInputCmp
          id="crueltyFree"
          label="Cruelty Free"
          required={false}
          options={crueltyFree}
          onInput={(_, value) => {
            setFilters({
              ...filters,
              crueltyFree: value,
            });
            onFilter({ ...filters, crueltyFree: value });
          }}
        />
        <MultipleSelectInputCmp
          id="inci"
          label="INCI"
          required={false}
          options={inci}
          onInput={(_, value) => {
            setFilters({
              ...filters,
              inci: value,
            });
            onFilter({ ...filters, inci: value });
          }}
        />
      </div>

      {/* <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap" className="toolbar-chips">
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
      </Stack> */}
    </div>
  );
};

export default FiltersProductsCmp;
