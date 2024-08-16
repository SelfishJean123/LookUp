import ChipButtonCmp from "../../../../common/components/buttons/ChipButtonCmp/ChipButtonCmp";
import IconButtonCmp from "../../../../common/components/buttons/IconButtonCmp/IconButtonCmp";
import ImageCarouselCmp from "../../../../common/components/carousels/ImageCarouselCmp/ImageCarouselCmp";
import LabelIconButtonCmp from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import Product from "../../interfaces/Product.interface";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import SubHeadingCmp from "../../../../common/components/texts/SubHeadingCmp/SubHeadingCmp";
import { FavoriteBorder, RateReviewSharp, VisibilitySharp } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import { useParams } from "react-router-dom";
import "./ProductDetailsPage.scss";

const ProductDetailsPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedProduct, setLoadedProduct] = useState<Product | undefined>(undefined);
  const productId = useParams().productId;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/api/products/${productId}`, "GET");
        setLoadedProduct(responseData.product);
      } catch (err) {}
    };
    fetchProduct();
  }, [sendRequest]);

  return (
    <div className="product-details-page">
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      {isLoading && <ProgressSpinnerCmp asOverlay />}
      {!isLoading && loadedProduct && (
        <>
          <h3 className="product-details-heading">Product details</h3>
          <MainHeadingCmp headingText={loadedProduct.name} />
          <SubHeadingCmp subHeadingText={loadedProduct.subName || ""} />

          <div className="product-details-top">
            <div className="product-details-main">
              <div className="details-main-images-wrapper">
                <ImageCarouselCmp
                  childrenSources={[
                    `/assets/products/${loadedProduct.image1}`,
                    `/assets/products/${loadedProduct.image2}`,
                    `/assets/products/${loadedProduct.image3}`,
                  ]}
                />
              </div>

              <div className="details-main-info">
                <div className="details-basic-info">
                  <h4>Producer: {loadedProduct.producer}</h4>
                  <h4>
                    Brand: {loadedProduct.brand} ({loadedProduct.subBrand})
                  </h4>
                  <h4>
                    Categories: {loadedProduct.categories} ({loadedProduct.subCategories})
                  </h4>
                  <h4>EAN: {loadedProduct.ean}</h4>
                  <h4>
                    Volumes: {loadedProduct.volumes} {loadedProduct.volumesUnit}
                  </h4>
                  <h4>Vegan: {loadedProduct.vegan}</h4>
                  <h4>Cruelty Free: {loadedProduct.crueltyFree}</h4>
                  <h4>Rating: {loadedProduct.rating}</h4>
                  <h4>Reviews: {loadedProduct.numberOfReviews}</h4>
                </div>
                <div className="details-updates">
                  <h5>Added: {loadedProduct.createdAt?.toDateString()}</h5>
                  <h5>by: {loadedProduct.createdByUserId}</h5>
                  <h5>Last update: {loadedProduct.lastEditedAt?.toDateString()} </h5>
                  <h5>by {loadedProduct.lastEditedByUserId}</h5>
                </div>
              </div>
            </div>

            <div className="details-actions">
              <IconButtonCmp icon={<FavoriteBorder />} />
              <LabelIconButtonCmp
                label="Report"
                icon={<RateReviewSharp />}
                iconPosition="end"
                color="#ff0000"
                type="button"
                variant="text"
              />
              <LabelIconButtonCmp
                label="See Reviews"
                icon={<VisibilitySharp />}
                iconPosition="end"
                type="button"
                variant="text"
              />
              <LabelIconButtonCmp
                label="Add Review"
                icon={<RateReviewSharp />}
                iconPosition="end"
                color="#387323"
                type="button"
                variant="text"
              />
            </div>
          </div>

          <div className="product-details-inci">
            <h3>INCI</h3>
            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
              {loadedProduct.inci.map((ingredient, index) => {
                return (
                  <ChipButtonCmp
                    label={ingredient.nameLatin}
                    key={index}
                    component={"a"}
                    href={`/inci-encyclopedia/${ingredient.id}`}
                    variant="filled"
                    onClick={() => {}}
                  />
                );
              })}
            </Stack>
          </div>

          <div className="product-details-description">
            <h3>DESCRIPTION </h3>
            <p>{loadedProduct.description}</p>
          </div>

          <div className="product-details-how-to-use">
            <h3>HOW TO USE</h3>
            <p>{loadedProduct.howToUse}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailsPage;
