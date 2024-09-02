import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import PaginationCmp from "../../../../common/components/navigation/PaginationCmp/PaginationCmp";
import ProductsListCmp from "../../components/ProductsListCmp/ProductsListCmp";
import ProductsListToolbarCmp from "../../components/ProductsListToolbarCmp/ProductsListToolbarCmp";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import TopDescriptionCmp from "../../../../common/components/texts/TopDescriptionCmp/TopDescriptionCmp";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";

const ProductsListPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedProducts, setLoadedProducts] = useState();
  const [productsLength, setProductsLength] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/products",
          "POST",
          JSON.stringify({
            pageNumber: currentPage,
            itemsPerPage: 12,
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
  }, [sendRequest, currentPage]);

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
      <ProductsListToolbarCmp />

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
