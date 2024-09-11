import AvatarCmp from "../../components/AvatarCmp/AvatarCmp";
import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import Product from "../../../products/interfaces/Product.interface";
import ProductsCarouselCmp from "../../../products/components/ProductsCarouselCmp/ProductsCarouselCmp";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SignContext from "../../../../common/contexts/SignContext";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import User from "../../interfaces/User.interface";
import { useContext, useEffect, useState } from "react";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import "./UserAccountPage.scss";

const UserAccountPage = () => {
  const signContext = useContext(SignContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUser, setLoadedUser] = useState<User | undefined>(undefined);
  const [loadedFavourites, setLoadedFavourites] = useState<Product[]>([]);
  const [loadedAdded, setLoadedAdded] = useState<Product[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(`https://lookup-backend.joanna-hornung.art/api/users/${signContext.userId}`, "GET");
        setLoadedUser(responseData.user);
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const responseData = await sendRequest(
          "https://lookup-backend.joanna-hornung.art/api/products/favourites",
          "POST",
          JSON.stringify({
            favourites: loadedUser?.favourites,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setLoadedFavourites(responseData.products);
      } catch (err) {}
    };
    fetchFavourites();
  }, [sendRequest, loadedUser]);

  useEffect(() => {
    const userAddedProducts = async () => {
      try {
        const responseData = await sendRequest(`https://lookup-backend.joanna-hornung.art/api/products/user/${signContext.userId}`, "GET");
        setLoadedAdded(responseData.products);
      } catch (err) {}
    };
    userAddedProducts();
  }, [sendRequest, loadedUser]);

  return (
    <div className="user-account-page">
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      {isLoading && <ProgressSpinnerCmp asOverlay />}

      {!isLoading && loadedUser && (
        <>
          <div className="user-info-wrapper">
            <MainHeadingCmp headingText={`${loadedUser.firstName} ${loadedUser.lastName}` || ""} />
            <AvatarCmp imgSrc={`https://lookup-backend.joanna-hornung.art/${loadedUser.avatar}`} />

            <div className="user-actions-wrapper">
              <LabelIconButton
                label="Change password"
                color="#a74713"
                type="button"
                variant="text"
                onClick={() => {}}
              />
              <LabelIconButton label="Delete account" color="#a74713" type="button" variant="text" onClick={() => {}} />
            </div>
          </div>

          <div className="user-favourites-wrapper">
            <h4>My favourite products</h4>
            <ProductsCarouselCmp productItems={loadedFavourites} />
          </div>

          <div className="user-added-wrapper">
            <h4>Products added or edited by me</h4>
            <ProductsCarouselCmp productItems={loadedAdded} />
          </div>
        </>
      )}
    </div>
  );
};

export default UserAccountPage;
