import AboutPage from "../domains/about/pages/AboutPage/AboutPage";
import AddIngredientModalCmp from "../domains/ingredients/components/AddIngredientModalCmp/AddIngredientModalCmp";
import AddProductModalCmp from "../domains/products/components/AddProductModalCmp/AddProductModalCmp";
import ContactPage from "../domains/contact/pages/ContactPage/ContactPage";
import ContentPageLayout from "../common/layouts/ContentPageLayout/ContentPageLayout";
import IngredientDetailsPage from "../domains/ingredients/pages/IngredientDetailsPage/IngredientDetailsPage";
import IngredientsListPage from "../domains/ingredients/pages/IngredientsListPage/IngredientsListPage";
import MainPage from "../domains/main/pages/MainPage/MainPage";
import MainPageLayout from "../domains/main/layouts/MainPageLayout/MainPageLayout";
import ProductDetailsPage from "../domains/products/pages/ProductDetailsPage/ProductDetailsPage";
import ProductReviewsPage from "../domains/products/pages/ProductReviewsPage/ProductReviewsPage";
import ProductsListPage from "../domains/products/pages/ProductsListPage/ProductsListPage";
import UserAccountPage from "../domains/user/pages/UserAccountPage/UserAccountPage";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        element: <ContentPageLayout />,
        children: [
          {
            path: "user",
            element: <UserAccountPage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "products-catalogue",
            element: <ProductsListPage />,
            children: [
              {
                path: "products-catalogue/add-product",
                element: <AddProductModalCmp />,
              },
            ],
          },
          {
            path: "products-catalogue/details/:productId",
            element: <ProductDetailsPage />,
          },
          {
            path: "products-catalogue/details/:productId/reviews",
            element: <ProductReviewsPage />,
          },
          {
            path: "inci-encyclopedia",
            element: <IngredientsListPage />,
            children: [
              {
                path: "inci-encyclopedia/add-ingredient",
                element: <AddIngredientModalCmp />,
              },
            ],
          },
          {
            path: "inci-encyclopedia/details/:ingredientId",
            element: <IngredientDetailsPage />,
          },
          {
            path: "contact",
            element: <ContactPage />,
          },
        ],
      },
    ],
  },
]);

export default routes;
