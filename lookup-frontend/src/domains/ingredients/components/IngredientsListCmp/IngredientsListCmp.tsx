import IngredientTileCmp from "../IngredientTileCmp/IngredientTileCmp";
import "./IngredientsListCmp.scss";

const IngredientsListCmp = () => {
  const ingredients = [
    {
      id: "001",
      nameLatin: "Aqua",
      namePolish: "Woda",
      nameEnglish: "Aqua",
    },
    {
      id: "002",
      nameLatin: "Cetearyl Alcohol",
      namePolish: "Cetearyl Alcohol",
      nameEnglish: "Cetearyl Alcohol",
    },
    {
      id: "003",
      nameLatin: "C15-19 Alkane",
      namePolish: "C15-19 Alkane",
      nameEnglish: "C15-19 Alkane",
    },
    {
      id: "004",
      nameLatin: "Butyrospermum Parkii Butter Parkii Butter",
      namePolish: "Masło Shea",
      nameEnglish: "Butyrospermum Parkii Butter Parkii Butter",
    },
    {
      id: "005",
      nameLatin: "Persea Gratissima Seed Oil",
      namePolish: "Persea Gratissima Seed Oil",
      nameEnglish: "Persea Gratissima Seed Oil",
    },
    {
      id: "006",
      nameLatin: "Shea Butter Ethyl Esters",
      namePolish: "Shea Butter Ethyl Esters",
      nameEnglish: "Shea Butter Ethyl Esters",
    },
    {
      id: "007",
      nameLatin: "Trehalose",
      namePolish: "Trehalose",
      nameEnglish: "Trehalose",
    },
    {
      id: "008",
      nameLatin: "Xylitol",
      namePolish: "Xylitol",
      nameEnglish: "Xylitol",
    },
    {
      id: "009",
      nameLatin: "Inositol",
      namePolish: "Inositol",
      nameEnglish: "Inositol",
    },
    {
      id: "010",
      nameLatin: "Vitis Vinifera Seed Oil",
      namePolish: "Vitis Vinifera Seed Oil",
      nameEnglish: "Vitis Vinifera Seed Oil",
    },
    {
      id: "011",
      nameLatin: "Glycerin",
      namePolish: "Glycerin",
      nameEnglish: "Glycerin",
    },
    {
      id: "012",
      nameLatin: "Pentylene Glycol",
      namePolish: "Pentylene Glycol",
      nameEnglish: "Pentylene Glycol",
    },
    {
      id: "013",
      nameLatin: "Potassium Cetyl",
      namePolish: "Potassium Cetyl",
      nameEnglish: "Potassium Cetyl",
    },
  ];

  return (
    <div className="ingredients-list-component">
      <div className="ingredients-list-tiles">
        {ingredients.map((ingredient, index) => (
          <IngredientTileCmp
            id={ingredient.id}
            key={index}
            nameLatin={ingredient.nameLatin}
            namePolish={ingredient.namePolish}
            nameEnglish={ingredient.nameEnglish}
          />
        ))}
      </div>
    </div>
  );
};

export default IngredientsListCmp;
