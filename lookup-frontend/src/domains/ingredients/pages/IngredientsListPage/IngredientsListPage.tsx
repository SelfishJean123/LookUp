import IngredientsListCmp from "../../components/IngredientsListCmp/IngredientsListCmp";
import IngredientsListToolbarCmp from "../../components/IngredientsListToolbarCmp/IngredientsListToolbarCmp";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import TopDescriptionCmp from "../../../../common/components/texts/TopDescriptionCmp/TopDescriptionCmp";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";

const IngredientsListPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedIngredients, setLoadedIngredients] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest("http://localhost:5000/api/ingredients", "GET");
        setLoadedIngredients(responseData.ingredients);
      } catch (err) {}
    };
    fetchProducts();
  }, [sendRequest]);

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
      <IngredientsListToolbarCmp />
      {!isLoading && loadedIngredients && <IngredientsListCmp ingredients={loadedIngredients} />}
    </div>
  );
};

export default IngredientsListPage;
