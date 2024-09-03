import IngredientsSortingType from "../../types/IngredientsSorting.type";
import Option from "../../../../common/interfaces/Option.interface";
import SingleSelectInputCmp from "../../../../common/components/inputs/SingleSelectInputCmp/SingleSelectInputCmp";
import { FC, useState } from "react";
import "./SortingIngredientsCmp.scss";

interface SortingIngredientsCmpProps {
  sortByOptions: Option[];
  onSort: (sorting: IngredientsSortingType) => void;
}

const sortDirectionOption: Option[] = [
  { value: "ascending", name: "ascending" },
  { value: "descending", name: "descending" },
];

const SortingIngredientsCmp: FC<SortingIngredientsCmpProps> = ({ sortByOptions, onSort }) => {
  const [sorting, setSorting] = useState<IngredientsSortingType>({
    sortBy: "namePolish",
    sortDirection: "ascending",
  });

  return (
    <div className="sorting-ingredients-component">
      <SingleSelectInputCmp
        id="sortBy"
        label="Sort By"
        required={false}
        options={sortByOptions}
        input={(id, value) => {
          setSorting({
            ...sorting,
            sortBy: value as IngredientsSortingType["sortBy"],
          });
          onSort({ ...sorting, sortBy: value as IngredientsSortingType["sortBy"] });
        }}
      />

      <SingleSelectInputCmp
        id="sortDirection"
        label="Sort Direction"
        required={false}
        options={sortDirectionOption}
        input={(id, value) => {
          setSorting({
            ...sorting,
            sortDirection: value as IngredientsSortingType["sortDirection"],
          });
          onSort({ ...sorting, sortDirection: value as IngredientsSortingType["sortDirection"] });
        }}
      />
    </div>
  );
};

export default SortingIngredientsCmp;
