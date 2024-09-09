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
        const responseData = await sendRequest(`https://lookup-backend.joanna-hornung.art/api/products/${productId}`, "GET");
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
                    `https://lookup-backend.joanna-hornung.art/${loadedProduct.image1}`,
                    `https://lookup-backend.joanna-hornung.art/${loadedProduct.image2}`,
                    `https://lookup-backend.joanna-hornung.art/${loadedProduct.image3}`,
                  ]}
                />
              </div>

              <div className="details-main-info">
                <div className="details-basic-info">
                  <h4>
                    Producer: <span>{loadedProduct.producer}</span>
                  </h4>
                  <h4>
                    Brand:
                    <span>{loadedProduct.brand}</span>
                    <span>({loadedProduct.subBrand})</span>
                  </h4>
                  <h4>
                    Categories:
                    {loadedProduct.categories.map((categorie, index) => (
                      <span key={index}>
                        {index ? " / " : ""}
                        {categorie.name}
                      </span>
                    ))}
                  </h4>
                  <h4>
                    Sub categories:
                    {loadedProduct.subCategories.map((subCategorie, index) => (
                      <span key={index}>
                        {index ? " / " : ""}
                        {subCategorie.name}
                      </span>
                    ))}
                  </h4>
                  <h4>
                    EAN: <span>{loadedProduct.ean}</span>
                  </h4>
                  <h4>
                    Volumes:
                    {loadedProduct.volumes.map((volume, index) => (
                      <span key={index}>
                        {index ? " / " : ""}
                        {volume.name}
                      </span>
                    ))}
                    <span>{loadedProduct.volumesUnit}</span>
                  </h4>
                  <h4>
                    Vegan: <span>{loadedProduct.vegan ? "YES" : "NO"}</span>
                  </h4>
                  <h4>
                    Cruelty Free: <span>{loadedProduct.crueltyFree ? "YES" : "NO"}</span>
                  </h4>
                  <h4>
                    Rating: <span>{loadedProduct.rating}</span>
                  </h4>
                  <h4>
                    Reviews: <span>{loadedProduct.numberOfReviews}</span>
                  </h4>
                </div>
                <div className="details-updates">
                  <h5>
                    Added: <span>{new Date(loadedProduct.createdAt).toLocaleDateString().replace(/\./g, " / ")}</span>
                  </h5>
                  <h5>
                    by: <span>{loadedProduct.createdByUserId}</span>
                  </h5>
                  <h5>
                    Last update:
                    <span>{new Date(loadedProduct.lastEditedAt).toLocaleDateString().replace(/\./g, " / ")}</span>
                  </h5>
                  <h5>
                    by <span>{loadedProduct.lastEditedByUserId}</span>
                  </h5>
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
