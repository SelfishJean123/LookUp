import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import ProductsListCmp from "../../components/ProductsListCmp/ProductsListCmp";
import ProductsListToolbarCmp from "../../components/ProductsListToolbarCmp/ProductsListToolbarCmp";
import TopDescriptionCmp from "../../../../common/components/texts/TopDescriptionCmp/TopDescriptionCmp";

const ProductsListPage = () => {
  return (
    <div className="products-list-page">
      <MainHeadingCmp headingText="Products Catalogue" />
      <TopDescriptionCmp
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."
      />
      <ProductsListToolbarCmp />
      <ProductsListCmp />
    </div>
  );
};

export default ProductsListPage;
