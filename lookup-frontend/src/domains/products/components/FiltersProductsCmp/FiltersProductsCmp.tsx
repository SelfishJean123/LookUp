import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import MultipleSelectInputCmp from "../../../../common/components/inputs/MultipleSelectInputCmp/MultipleSelectInputCmp";
import Option from "../../../../common/interfaces/Option.interface";
import ProductsFiltersType from "../../types/ProductsFiltersType.type";
import { FC, useState } from "react";
import "./FiltersProductsCmp.scss";

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
  const [filters, setFilters] = useState<ProductsFiltersType>({
    producers: [],
    brands: [],
    categories: [],
    subCategories: [],
    vegan: [],
    crueltyFree: [],
    inci: [],
  });

  return (
    <div className="filters-products-component">
      <div className="filters-wrapper">
        <MultipleSelectInputCmp
          id="producers"
          label="Producers"
          required={false}
          options={producers}
          onInput={(id, value) => {
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
          onInput={(id, value) => {
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
          onInput={(id, value) => {
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
          onInput={(id, value) => {
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
          onInput={(id, value) => {
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
          onInput={(id, value) => {
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
          onInput={(id, value) => {
            setFilters({
              ...filters,
              inci: value,
            });
            onFilter({ ...filters, inci: value });
          }}
        />
      </div>

      <div className="filters-buttons">
        <LabelIconButton
          label="Reset Filters"
          color="#fff"
          bgColor="#387323"
          hoverBgColor="#124500"
          type="button"
          variant="contained"
          onClick={() =>
            setFilters({
              producers: [],
              brands: [],
              categories: [],
              subCategories: [],
              vegan: [],
              crueltyFree: [],
              inci: [],
            })
          }
        />
      </div>
    </div>
  );
};

export default FiltersProductsCmp;
