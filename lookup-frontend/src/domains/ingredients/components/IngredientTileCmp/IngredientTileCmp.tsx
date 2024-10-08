import Ingredient from "../../interfaces/Ingredient.interface";
import { FC } from "react";
import { Link } from "react-router-dom";
import "./IngredientTileCmp.scss";

interface IngredientTileCmpProps {
  ingredient: Ingredient;
}

const IngredientTileCmp: FC<IngredientTileCmpProps> = ({ ingredient }) => {
  return (
    <div className="ingredient-tile-component">
      <Link to={ingredient.id}>
        <div className="ingredient-tile-info">
          <h5 className="ingredient-tile-nameLatin" title={ingredient.nameLatin}>
            {ingredient.nameLatin}
          </h5>
          <h6 className="ingredient-tile-namePolish" title={ingredient.namePolish}>
            {ingredient.namePolish}
          </h6>
          <h6 className="ingredient-tile-nameEnglish" title={ingredient.nameEnglish}>
            {ingredient.nameEnglish}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default IngredientTileCmp;
