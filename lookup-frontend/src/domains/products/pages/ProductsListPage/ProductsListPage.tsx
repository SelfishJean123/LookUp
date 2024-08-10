import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import ProductsListCmp from "../../components/ProductsListCmp/ProductsListCmp";
import ProductsListToolbarCmp from "../../components/ProductsListToolbarCmp/ProductsListToolbarCmp";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import TopDescriptionCmp from "../../../../common/components/texts/TopDescriptionCmp/TopDescriptionCmp";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";

const ProductsListPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedProducts, setLoadedProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const responseData = await sendRequest("http://localhost:5000/api/products", "GET");
      setLoadedProducts(responseData.products);
    };
    fetchProducts();
  }, [sendRequest]);

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
    </div>
  );
};

export default ProductsListPage;
