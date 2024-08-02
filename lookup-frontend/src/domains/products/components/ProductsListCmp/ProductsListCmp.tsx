import ProductTileCmp from "../ProductTileCmp/ProductTileCmp";
import "./ProductsListCmp.scss";

const ProductsListCmp = () => {
  const products = [
    {
      id: "001",
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 122,
      rating: 4.6,
      imgSrc: "nacomi.png",
    },
    {
      id: "002",
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 321,
      rating: 2.2,
      imgSrc: "resibo-2.png",
    },
    {
      id: "003",
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 12,
      rating: 1.8,
      imgSrc: "bio-oil.png",
    },
    {
      id: "004",
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 83,
      rating: 4.9,
      imgSrc: "nacomi-mask.png",
    },
    {
      id: "005",
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 59,
      rating: 3.1,
      imgSrc: "resibo-1.png",
    },
    {
      id: "006",
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 75,
      rating: 4.7,
      imgSrc: "holika.png",
    },
    {
      id: "007",
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 219,
      rating: 4.8,
      imgSrc: "biolaven-2.png",
    },
    {
      id: "008",
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 27,
      rating: 1.6,
      imgSrc: "resibo-3.png",
    },
  ];

  return (
    <div className="products-list-component">
      <div className="products-list-tiles">
        {products.map((product, index) => (
          <ProductTileCmp
            id={product.id}
            key={index}
            name={product.name}
            reviewsNumber={product.reviewsNumber}
            rating={product.rating}
            imgSrc={product.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsListCmp;
