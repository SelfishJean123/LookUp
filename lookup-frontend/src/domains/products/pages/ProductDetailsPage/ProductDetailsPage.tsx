import ChipButtonCmp from "../../../../common/components/buttons/ChipButtonCmp/ChipButtonCmp";
import IconButtonCmp from "../../../../common/components/buttons/IconButtonCmp/IconButtonCmp";
import ImageCarouselCmp from "../../../../common/components/carousels/ImageCarouselCmp/ImageCarouselCmp";
import LabelIconButtonCmp from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import SubHeadingCmp from "../../../../common/components/texts/SubHeadingCmp/SubHeadingCmp";
import { Favorite, FavoriteBorder, RateReviewSharp, VisibilitySharp } from "@mui/icons-material";
import { Stack } from "@mui/material";
import "./ProductDetailsPage.scss";

const ProductDetailsPage = () => {
  return (
    <div className="product-details-page">
      <h3 className="product-details-heading">Product details</h3>
      <MainHeadingCmp headingText="Trehalozowy krem przywracający równowagę" />
      <SubHeadingCmp subHeadingText="3% ksylitolu, 2% inozytolu, neuropeptyd SNAP-8, o bogatej konsystencji, odżywienie i nawilżenie" />

      <div className="product-details-top">
        <div className="product-details-main">
          <div className="details-main-images-wrapper">
            <ImageCarouselCmp
              childrenSources={[
                `/assets/products/basic-1.jpg`,
                `/assets/products/basic-2.jpg`,
                `/assets/products/basic-3.jpg`,
              ]}
            />
          </div>

          <div className="details-main-info">
            <div className="details-basic-info">
              <h4>Producer: Basic Lab Dermocosmetics</h4>
              <h4>Brand: Basic Lab Complemetis</h4>
              <h4>Category: Face creams (moisturizing)</h4>
              <h4>EAN: 76192730431343</h4>
              <h4>Volume: 40 ml, 30 ml</h4>
              <h4>Price: 25.95 PLN</h4>
              <h4>Vegan: YES</h4>
              <h4>Cruelty Free: YES</h4>
              <h4>Rating:</h4>
              <h4>Reviews: 124 </h4>
            </div>
            <div className="details-updates">
              <h5>Added by: Katarzyna Ostaszewska</h5>
              <h5>Last update: 23/04/24 </h5>
              <h5>by Katarzyna Ostaszewska</h5>
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
          <ChipButtonCmp
            label={"Aqua"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Cetearyl Alcohol"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"C15-19 Alkane"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Butyrospermum Parkii Butter"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Persea Gratissima Seed Oil"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Shea Butter Ethyl Esters "}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Xylitol"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Trehalose"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Inositol"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Inositol"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Vitis Vinifera Seed Oil"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Glycerin"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Pentylene Glycol"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Potassium Cetyl"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Phosphate Coco"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Caprylate/Caprate Cetyl"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Palmitate Acetyl Octapeptide-3"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Borago Officinalis Seed Oil"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
          <ChipButtonCmp
            label={"Cannabis Sativa Seed Oil"}
            component={"a"}
            href={"/inci-encyclopedia/0009"}
            variant="filled"
            onClick={() => {}}
          />
        </Stack>
      </div>

      <div className="product-details-description">
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

      <div className="product-details-how-to-use">
        <h3>HOW TO USE</h3>
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

export default ProductDetailsPage;
