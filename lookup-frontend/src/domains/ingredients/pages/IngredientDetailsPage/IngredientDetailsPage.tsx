import ImageCarouselCmp from "../../../../common/components/carousels/ImageCarouselCmp/ImageCarouselCmp";
import Ingredient from "../../interfaces/Ingredient.interface";
import LabelIconButtonCmp from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import SubHeadingCmp from "../../../../common/components/texts/SubHeadingCmp/SubHeadingCmp";
import { RateReviewSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import { useParams } from "react-router-dom";
import "./IngredientDetailsPage.scss";

const IngredientDetailsPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedIngredient, setLoadedIngredient] = useState<Ingredient | undefined>(undefined);
  const ingredientId = useParams().ingredientId;

  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/api/ingredients/${ingredientId}`, "GET");
        setLoadedIngredient(responseData.ingredient);
      } catch (err) {}
    };
    fetchIngredient();
  }, [sendRequest]);

  return (
    <div className="ingredient-details-page">
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      {isLoading && <ProgressSpinnerCmp asOverlay />}
      {!isLoading && loadedIngredient && (
        <>
          <h3 className="ingredient-details-heading">Ingredient details</h3>
          <MainHeadingCmp headingText={loadedIngredient.nameLatin} />
          <SubHeadingCmp subHeadingText={loadedIngredient.namePolish} />
          <SubHeadingCmp subHeadingText={loadedIngredient.nameEnglish} />

          <div className="ingredient-details-top">
            <div className="ingredient-details-main">
              <div className="details-main-info">
                <div className="details-basic-info">
                  <h4>Categories: {loadedIngredient.categories}</h4>
                  <h4>Origin: {loadedIngredient.origin}</h4>
                  <h4>Forms: {loadedIngredient.forms}</h4>
                  <h4>Potentially allergenic: {loadedIngredient.potentiallyAllergenic}</h4>
                  <h4>Pregnancy safe: {loadedIngredient.pregnancySafe}</h4>
                  <h4>Vegan: {loadedIngredient.vegan}</h4>
                </div>
                <div className="details-updates">
                  <h5>Added: {loadedIngredient.createdAt?.toDateString()}</h5>
                  <h5>by: {loadedIngredient.createdByUserId}</h5>
                  <h5>Last update: {loadedIngredient.lastEditedAt?.toDateString()} </h5>
                  <h5>by {loadedIngredient.lastEditedByUserId}</h5>
                </div>
              </div>

              <div className="details-main-images-wrapper">
                <ImageCarouselCmp
                  childrenSources={[
                    `/assets/ingredients/${loadedIngredient.image1}`,
                    `/assets/ingredients/${loadedIngredient.image2}`,
                    `/assets/ingredients/${loadedIngredient.image3}`,
                  ]}
                />
              </div>
            </div>

            <div className="details-actions">
              <LabelIconButtonCmp
                label="Report"
                icon={<RateReviewSharp />}
                iconPosition="end"
                color="#ff0000"
                type="button"
                variant="text"
              />
            </div>
          </div>

          <div className="ingredient-details-description">
            <h3>DESCRIPTION </h3>
            <p>{loadedIngredient.description}</p>
          </div>

          <div className="ingredient-details-concerns">
            <h3>CONCERNS</h3>
            <p>{loadedIngredient.concerns}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default IngredientDetailsPage;
