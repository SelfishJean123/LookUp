import Ingredient from "../../entities/Ingredient";
import IngredientTileCmp from "../IngredientTileCmp/IngredientTileCmp";
import { FC } from "react";
import "./IngredientsListCmp.scss";

interface IngredientsListCmpProps {
  ingredients: Ingredient[];
}

const IngredientsListCmp: FC<IngredientsListCmpProps> = ({ ingredients }) => {
  return (
    <div className="ingredients-list-component">
      <div className="ingredients-list-tiles">
        {ingredients.map((ingredient, index) => (
          <IngredientTileCmp ingredient={ingredient} key={index} />
        ))}
      </div>
    </div>
  );
};

export default IngredientsListCmp;
