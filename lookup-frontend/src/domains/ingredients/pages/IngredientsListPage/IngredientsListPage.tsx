import AddIngredientFormCmp from "../../components/AddIngredientFormCmp/AddIngredientFormCmp";
import BasicModalCmp from "../../../../common/components/modals/BasicModalCmp/BasicModalCmp";
import ChipButtonCmp from "../../../../common/components/buttons/ChipButtonCmp/ChipButtonCmp";
import FiltersIngredientsCmp from "../../components/FiltersIngredientsCmp/FiltersIngredientsCmp";
import IngredientsFiltersType from "../../types/IngredientsFilters.type";
import IngredientsListCmp from "../../components/IngredientsListCmp/IngredientsListCmp";
import IngredientsSortingType from "../../types/IngredientsSorting.type";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import Option from "../../../../common/interfaces/Option.interface";
import PaginationCmp from "../../../../common/components/navigation/PaginationCmp/PaginationCmp";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SearchBarCmp from "../../../../common/components/navigation/SearchBarCmp/SearchBarCmp";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import SortingIngredientsCmp from "../../components/SortingIngredientsCmp/SortingIngredientsCmp";
import TopDescriptionCmp from "../../../../common/components/texts/TopDescriptionCmp/TopDescriptionCmp";
import { Stack, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import "./IngredientsListPage.scss";

interface ChipData {
  key: number;
  label: string;
}

const categories: Option[] = [
  { value: "wash", name: "wash" },
  { value: "care", name: "care" },
  { value: "stylization", name: "stylization" },
  { value: "hair-removal", name: "hair-removal" },
  { value: "tools", name: "tools" },
  { value: "storage", name: "storage" },
];

const vegan: Option[] = [
  { value: "yes", name: "yes" },
  { value: "no", name: "no" },
  { value: "not_set", name: "not set" },
];

const sortByOptions: Option[] = [
  { value: "lastEditedAt", name: "lastEditedAt" },
  { value: "nameLatin", name: "nameLatin" },
  { value: "nameEnglish", name: "nameEnglish" },
  { value: "namePolish", name: "namePolish" },
];

const IngredientsListPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedIngredients, setLoadedIngredients] = useState();
  const [ingredientsLength, setIngredientsLength] = useState(12);

  const [filters, setFilters] = useState<IngredientsFiltersType>({
    categories: [],
    vegan: [],
  });

  const [sorting, setSorting] = useState<IngredientsSortingType>({
    sortBy: "namePolish",
    sortDirection: "ascending",
  });

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

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const responseData = await sendRequest(
          "https://lookup-backend.joanna-hornung.art/api/ingredients",
          "POST",
          JSON.stringify({
            pageNumber: currentPage,
            itemsPerPage: 12,
            ingredientsFilters: filters,
            ingredientsSorting: sorting,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setLoadedIngredients(responseData.ingredients);
        setIngredientsLength(responseData.ingredientsLength);
      } catch (err) {}
    };
    fetchIngredients();
  }, [sendRequest, currentPage, filters, sorting]);

  const onPaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="ingredients-list-page">
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      {isLoading && <ProgressSpinnerCmp asOverlay />}

      <MainHeadingCmp headingText="INCI Encyclopedia" />
      <TopDescriptionCmp
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."
      />

      <Toolbar className="ingredients-list-toolbar">
        <div className="toolbar-search-add">
          <SearchBarCmp />
          <BasicModalCmp
            modalOpenButtonText="Add Ingredient"
            modalOpenButtonTextColor="#fff"
            modalOpenButtonBgColor="#387323"
            modalOpenButtonBgHoverColor="#124500"
            modalOpenButtonVariant="contained"
            modalHeadingText="Add New Ingredient"
            modalDescriptionText="Niewielką ilość kremu nałóż na twarz, szyję i dekolt, omijając okolice oczu. Dokładnie wmasuj do całkowitego wchłonięcia. Stosuj na oczyszczoną skórę rano lub/i wieczorem, w zależności od potrzeb. Dla kompleksowej ochrony skóry twarzy na dzień, po użyciu rekomendowane jest nałożenie kremu z filtrem SPF. Sprawdź nasz lekki krem lub lekką emulsję."
            InnerFormCmp={AddIngredientFormCmp}
            // innerFormCmpProps={}
          />
        </div>

        <div className="toolbar-filters">
          <FiltersIngredientsCmp
            categories={categories}
            vegan={vegan}
            onFilter={(filters: IngredientsFiltersType) => setFilters(filters)}
          />
        </div>

        <div className="toolbar-sorting">
          <SortingIngredientsCmp
            sortByOptions={sortByOptions}
            onSort={(sorting: IngredientsSortingType) => setSorting(sorting)}
          />
        </div>

        <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap" className="toolbar-chips">
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
      </Toolbar>

      {!isLoading && loadedIngredients && <IngredientsListCmp ingredients={loadedIngredients} />}

      <PaginationCmp
        page={1}
        count={Math.ceil(ingredientsLength / 12)}
        variant="outlined"
        shape="rounded"
        size="medium"
        color="standard"
        change={onPaginationChange}
      />
    </div>
  );
};

export default IngredientsListPage;
