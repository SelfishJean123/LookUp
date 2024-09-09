import Option from "../../../../common/interfaces/Option.interface";
import ProductsSortingType from "../../types/ProductsSorting.type";
import SingleSelectInputCmp from "../../../../common/components/inputs/SingleSelectInputCmp/SingleSelectInputCmp";
import { FC, useState } from "react";
import "./SortingProductsCmp.scss";

interface SortingProductsCmpProps {
  sortByOptions: Option[];
  onSort: (sorting: ProductsSortingType) => void;
}

const sortDirectionOption: Option[] = [
  { value: "ascending", name: "ascending" },
  { value: "descending", name: "descending" },
];

const SortingProductsCmp: FC<SortingProductsCmpProps> = ({ sortByOptions, onSort }) => {
  const [sorting, setSorting] = useState<ProductsSortingType>({
    sortBy: "name",
    sortDirection: "ascending",
  });

  return (
    <div className="sorting-products-component">
      <SingleSelectInputCmp
        id="sortBy"
        label="Sort By"
        required={false}
        options={sortByOptions}
        input={(_, value) => {
          setSorting({
            ...sorting,
            sortBy: value as ProductsSortingType["sortBy"],
          });
          onSort({ ...sorting, sortBy: value as ProductsSortingType["sortBy"] });
        }}
      />

      <SingleSelectInputCmp
        id="sortDirection"
        label="Sort Direction"
        required={false}
        options={sortDirectionOption}
        input={(_, value) => {
          setSorting({
            ...sorting,
            sortDirection: value as ProductsSortingType["sortDirection"],
          });
          onSort({ ...sorting, sortDirection: value as ProductsSortingType["sortDirection"] });
        }}
      />
    </div>
  );
};

export default SortingProductsCmp;
