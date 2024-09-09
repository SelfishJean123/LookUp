import AddProductFormCmp from "../../components/AddProductFormCmp/AddProductFormCmp";
import BasicModalCmp from "../../../../common/components/modals/BasicModalCmp/BasicModalCmp";
import ChipButtonCmp from "../../../../common/components/buttons/ChipButtonCmp/ChipButtonCmp";
import FiltersProductsCmp from "../../components/FiltersProductsCmp/FiltersProductsCmp";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import Option from "../../../../common/interfaces/Option.interface";
import PaginationCmp from "../../../../common/components/navigation/PaginationCmp/PaginationCmp";
import ProductsFiltersType from "../../types/ProductsFiltersType.type";
import ProductsListCmp from "../../components/ProductsListCmp/ProductsListCmp";
import ProductsSortingType from "../../types/ProductsSorting.type";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SearchBarCmp from "../../../../common/components/navigation/SearchBarCmp/SearchBarCmp";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import SortingProductsCmp from "../../components/SortingProductsCmp/SortingProductsCmp";
import TopDescriptionCmp from "../../../../common/components/texts/TopDescriptionCmp/TopDescriptionCmp";
import { Stack, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import "./ProductsListPage.scss";

interface ChipData {
  key: number;
  label: string;
}

const producers: Option[] = [
  { value: "Bielenda", name: "Bielenda" },
  { value: "BasicLab", name: "BasicLab" },
  { value: "HolikaHolika", name: "Holika Holika" },
];

const brands: Option[] = [
  { value: "wash", name: "wash" },
  { value: "care", name: "care" },
  { value: "stylization", name: "stylization" },
  { value: "hair-removal", name: "hair-removal" },
  { value: "tools", name: "tools" },
  { value: "storage", name: "storage" },
];

const categories: Option[] = [
  { value: "wash", name: "wash" },
  { value: "care", name: "care" },
  { value: "stylization", name: "stylization" },
  { value: "hair-removal", name: "hair-removal" },
  { value: "tools", name: "tools" },
  { value: "storage", name: "storage" },
];

const subCategories: Option[] = [
  { value: "face", name: "face" },
  { value: "eyes", name: "eyes" },
  { value: "lips", name: "lips" },
  { value: "body", name: "body" },
  { value: "hands", name: "hands" },
  { value: "feet", name: "feet" },
  { value: "hair", name: "hair" },
  { value: "nails", name: "nails" },
];

const vegan: Option[] = [
  { value: "yes", name: "yes" },
  { value: "no", name: "no" },
  { value: "not_set", name: "not set" },
];

const crueltyFree: Option[] = [
  { value: "yes", name: "yes" },
  { value: "no", name: "no" },
  { value: "not_set", name: "not set" },
];

const ingredients: Option[] = [
  { value: "0011", name: "Aqua" },
  { value: "0012", name: "Godfather" },
  { value: "0013", name: "Godfather Part II" },
  { value: "0014", name: "Dark Knight" },
  { value: "0014", name: "12 Angry Men" },
  { value: "0015", name: "Schindler List" },
  { value: "0016", name: "Fiction" },
];

const sortByOptions: Option[] = [
  { value: "lastEditedAt", name: "lastEditedAt" },
  { value: "name", name: "name" },
  { value: "numberOfReviews", name: "numberOfReviews" },
  { value: "rating", name: "rating" },
];

const ProductsListPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedProducts, setLoadedProducts] = useState();
  const [productsLength, setProductsLength] = useState(12);

  const [filters, setFilters] = useState<ProductsFiltersType>({
    producers: [],
    brands: [],
    categories: [],
    subCategories: [],
    crueltyFree: [],
    vegan: [],
    inci: [],
  });

  const [sorting, setSorting] = useState<ProductsSortingType>({
    sortBy: "name",
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
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest(
          "https://lookup-backend.joanna-hornung.art/api/products",
          "POST",
          JSON.stringify({
            pageNumber: currentPage,
            itemsPerPage: 12,
            productsFilters: filters,
            productsSorting: sorting,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setLoadedProducts(responseData.products);
        setProductsLength(responseData.productsLength);
      } catch (err) {}
    };
    fetchProducts();
  }, [sendRequest, currentPage, filters, sorting]);

  const onPaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="products-list-page">
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      {isLoading && <ProgressSpinnerCmp asOverlay />}

      <MainHeadingCmp headingText="Products Catalogue" />
      <TopDescriptionCmp
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."
      />

      <Toolbar className="products-list-toolbar">
        <div className="toolbar-search-add">
          <SearchBarCmp />
          <BasicModalCmp
            modalOpenButtonText="Add Product"
            modalOpenButtonTextColor="#fff"
            modalOpenButtonBgColor="#387323"
            modalOpenButtonBgHoverColor="#124500"
            modalOpenButtonVariant="contained"
            modalHeadingText="Add New Product"
            modalDescriptionText="Niewielką ilość kremu nałóż na twarz, szyję i dekolt, omijając okolice oczu. Dokładnie wmasuj do całkowitego wchłonięcia. Stosuj na oczyszczoną skórę rano lub/i wieczorem, w zależności od potrzeb. Dla kompleksowej ochrony skóry twarzy na dzień, po użyciu rekomendowane jest nałożenie kremu z filtrem SPF. Sprawdź nasz lekki krem lub lekką emulsję."
            InnerFormCmp={AddProductFormCmp}
            // innerFormCmpProps={}
          />
        </div>

        <div className="toolbar-filters">
          <FiltersProductsCmp
            producers={producers}
            brands={brands}
            categories={categories}
            subCategories={subCategories}
            vegan={vegan}
            crueltyFree={crueltyFree}
            inci={ingredients}
            onFilter={(filters: ProductsFiltersType) => {
              console.log(filters);
              setFilters(filters);
            }}
          />
        </div>

        <div className="toolbar-sorting">
          <SortingProductsCmp
            sortByOptions={sortByOptions}
            onSort={(sorting: ProductsSortingType) => setSorting(sorting)}
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

      {!isLoading && loadedProducts && <ProductsListCmp products={loadedProducts} />}

      <PaginationCmp
        page={1}
        count={Math.ceil(productsLength / 12)}
        variant="outlined"
        shape="rounded"
        size="medium"
        color="standard"
        change={onPaginationChange}
      />
    </div>
  );
};

export default ProductsListPage;
