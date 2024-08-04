import { FC } from "react";
import { Link } from "react-router-dom";
import "./IngredientTileCmp.scss";

interface IngredientTileCmpProps {
  id: string;
  nameLatin: string;
  namePolish: string;
  nameEnglish: string;
}

const IngredientTileCmp: FC<IngredientTileCmpProps> = ({ id, nameLatin, namePolish, nameEnglish }) => {
  return (
    <div className="ingredient-tile-component">
      <Link to={id}>
        <h5 className="ingredient-tile-nameLatin" title={nameLatin}>
          {nameLatin}
        </h5>
        <h6 className="ingredient-tile-namePolish" title={namePolish}>
          {namePolish}
        </h6>
        <h6 className="ingredient-tile-nameEnglish" title={nameEnglish}>
          {nameEnglish}
        </h6>
      </Link>
    </div>
  );
};

export default IngredientTileCmp;
