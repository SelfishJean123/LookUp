import ImageCarouselCmp from "../../../../common/components/carousels/ImageCarouselCmp/ImageCarouselCmp";
import LabelIconButtonCmp from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import SubHeadingCmp from "../../../../common/components/texts/SubHeadingCmp/SubHeadingCmp";
import { RateReviewSharp } from "@mui/icons-material";
import "./IngredientDetailsPage.scss";

const IngredientDetailsPage = () => {
  return (
    <div className="ingredient-details-page">
      <h3 className="ingredient-details-heading">Ingredient details</h3>
      <MainHeadingCmp headingText="Disodium EDTA" />
      <SubHeadingCmp subHeadingText="Sól dwusodowa kwasu wersenowego (etylenodiaminotetraoctowego)" />
      <SubHeadingCmp subHeadingText="Disodium EDTA" />

      <div className="ingredient-details-top">
        <div className="ingredient-details-main">
          <div className="details-main-info">
            <div className="details-basic-info">
              <h4>Category: Base ingredients</h4>
              <h4>Sub category: Chelators, Colorants, Humectants</h4>
              <h4>Origin: Plant</h4>
              <h4>Forms: powder, liquid</h4>
              <h4>Potentially allergenic: NO</h4>
              <h4>Pregnancy safe: YES</h4>
              <h4>Vegan: YES</h4>
            </div>
            <div className="details-updates">
              <h5>Added by: Katarzyna Ostaszewska</h5>
              <h5>Last update: 23/04/24 </h5>
              <h5>by Katarzyna Ostaszewska</h5>
            </div>
          </div>

          <div className="details-main-images-wrapper">
            <ImageCarouselCmp
              childrenSources={[
                `/assets/ingredients/ing-1.png`,
                `/assets/ingredients/ing-2.jpg`,
                `/assets/ingredients/ing-3.jpg`,
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
        <p>
          Trehalozowy krem przywracający równowagę o bogatej konsystencji z 3% ksylitolem, 2% inozytolem oraz
          neuropeptydem SNAP-8™ jest świetnym rozwiązaniem dla skór suchych, bardzo suchych i odwodnionych. Dostarcza
          skórze dawkę odżywienia, zapewniając jej natychmiastowy komfort, redukując uczucie ściągnięcia oraz
          nadwrażliwość spowodowaną przesuszeniem. Chroni lipidy naskórka przed czynnikami zewnętrznymi. Trehalozowy
          krem to komplementarny produkt do codziennego stosowania, który domyka rutynę pielęgnacyjną, tworząc zgrany
          duet z dowolnym serum z gamy Esteticus. Bogata formuła pozostawia ochronną warstwę, jednocześnie stanowiąc
          odżywczą bazę pod makijaż. Przeznaczony do stosowania na dzień i/lub na noc.
        </p>
      </div>

      <div className="ingredient-details-concerns">
        <h3>CONCERNS</h3>
        <p>
          Niewielką ilość kremu nałóż na twarz, szyję i dekolt, omijając okolice oczu. Dokładnie wmasuj do całkowitego
          wchłonięcia. Stosuj na oczyszczoną skórę rano lub/i wieczorem, w zależności od potrzeb. Dla kompleksowej
          ochrony skóry twarzy na dzień, po użyciu rekomendowane jest nałożenie kremu z filtrem SPF. Sprawdź nasz lekki
          krem lub lekką emulsję.
        </p>
      </div>
    </div>
  );
};

export default IngredientDetailsPage;
