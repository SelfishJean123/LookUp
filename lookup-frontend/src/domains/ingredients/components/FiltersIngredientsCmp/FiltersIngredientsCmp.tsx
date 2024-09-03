import IngredientsFiltersType from "../../types/IngredientsFilters.type";
import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import MultipleSelectInputCmp from "../../../../common/components/inputs/MultipleSelectInputCmp/MultipleSelectInputCmp";
import Option from "../../../../common/interfaces/Option.interface";
import { FC, useState } from "react";
import "./FiltersIngredientsCmp.scss";

interface FiltersIngredientsCmpProps {
  categories: Option[];
  vegan: Option[];
  onFilter: (filters: IngredientsFiltersType) => void;
}

const FiltersIngredientsCmp: FC<FiltersIngredientsCmpProps> = ({ categories, vegan, onFilter }) => {
  const [filters, setFilters] = useState<IngredientsFiltersType>({
    categories: [],
    vegan: [],
  });

  return (
    <div className="filters-products-component">
      <div className="filters-wrapper">
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
              categories: [],
              vegan: [],
            })
          }
        />
      </div>
    </div>
  );
};

export default FiltersIngredientsCmp;
