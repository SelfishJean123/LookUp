import AddProductFormCmp from "../../components/AddProductFormCmp/AddProductFormCmp";
import BasicModalCmp from "../../../../common/components/modals/BasicModalCmp/BasicModalCmp";
import FiltersProductsCmp from "../../components/FiltersProductsCmp/FiltersProductsCmp";
import InciItem from "../../../ingredients/interfaces/InciItem.interface";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import Option from "../../../../common/interfaces/Option.interface";
import PaginationCmp from "../../../../common/components/navigation/PaginationCmp/PaginationCmp";
import ProductsFiltersType from "../../types/ProductsFiltersType.type";
import ProductsListCmp from "../../components/ProductsListCmp/ProductsListCmp";
import ProductsSortingType from "../../types/ProductsSorting.type";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SearchBarCmp from "../../../../common/components/navigation/SearchBarCmp/SearchBarCmp";
import SignContext from "../../../../common/contexts/SignContext";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import SortingProductsCmp from "../../components/SortingProductsCmp/SortingProductsCmp";
import TopDescriptionCmp from "../../../../common/components/texts/TopDescriptionCmp/TopDescriptionCmp";
import { Toolbar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import "./ProductsListPage.scss";

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
];

const crueltyFree: Option[] = [
  { value: "yes", name: "yes" },
  { value: "no", name: "no" },
];

const sortByOptions: Option[] = [
  { value: "lastEditedAt", name: "lastEditedAt" },
  { value: "name", name: "name" },
  { value: "numberOfReviews", name: "numberOfReviews" },
  { value: "rating", name: "rating" },
];

const ProductsListPage = () => {
  const signContext = useContext(SignContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedInciItems, setLoadedInciItems] = useState<InciItem[]>([]);
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
  const [searchString, setSearchString] = useState<string>("");

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const responseData = await sendRequest("https://lookup-backend.joanna-hornung.art/api/ingredients/getInciItems");
        setLoadedInciItems(responseData.inciItems);
      } catch (err) {
        console.error(err);
      }
    };
    fetchIngredients();
  }, []);

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
            productsSearchString: searchString,
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
  }, [sendRequest, currentPage, filters, sorting, searchString]);

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
        <div className="toolbar-top">
          <SortingProductsCmp
            sortByOptions={sortByOptions}
            onSort={(sorting: ProductsSortingType) => setSorting(sorting)}
          />
          <div className="toolbar-search-add">
            <SearchBarCmp onSearch={(searchString) => setSearchString(searchString)} />

            {signContext.userId && (
              <BasicModalCmp
                modalOpenButtonText="Add Product"
                modalOpenButtonTextColor="#fff"
                modalOpenButtonBgColor="#387323"
                modalOpenButtonBgHoverColor="#124500"
                modalOpenButtonVariant="contained"
                modalHeadingText="Add New Product"
                modalDescriptionText="Niewielką ilość kremu nałóż na twarz, szyję i dekolt, omijając okolice oczu. Dokładnie wmasuj do całkowitego wchłonięcia. Stosuj na oczyszczoną skórę rano lub/i wieczorem, w zależności od potrzeb. Dla kompleksowej ochrony skóry twarzy na dzień, po użyciu rekomendowane jest nałożenie kremu z filtrem SPF. Sprawdź nasz lekki krem lub lekką emulsję."
                InnerFormCmp={AddProductFormCmp}
                innerFormCmpProps={{
                  inci: loadedInciItems?.map((item) => ({
                    value: item.id,
                    name: item.nameLatin,
                  })),
                  close: () => {},
                }}
              />
            )}
          </div>
        </div>

        <div className="toolbar-filters">
          <FiltersProductsCmp
            producers={producers}
            brands={brands}
            categories={categories}
            subCategories={subCategories}
            vegan={vegan}
            crueltyFree={crueltyFree}
            inci={loadedInciItems?.map((item) => ({
              value: item.id,
              name: item.nameLatin,
            }))}
            onFilter={(filters: ProductsFiltersType) => setFilters(filters)}
          />
        </div>
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
