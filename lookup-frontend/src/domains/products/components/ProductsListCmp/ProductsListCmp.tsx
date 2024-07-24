import ProductsListTileCmp from "../ProductsListTileCmp/ProductsListTileCmp";
import "./ProductsListCmp.scss";

const ProductsListCmp = () => {
  const products = [
    {
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 122,
      rating: 4.6,
      imgSrc: "nacomi.png",
    },
    {
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 321,
      rating: 2.2,
      imgSrc: "resibo-2.png",
    },
    {
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 12,
      rating: 1.8,
      imgSrc: "bio-oil.png",
    },
    {
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 83,
      rating: 4.9,
      imgSrc: "nacomi-mask.png",
    },
    {
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 59,
      rating: 3.1,
      imgSrc: "resibo-1.png",
    },
    {
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 75,
      rating: 4.7,
      imgSrc: "holika.png",
    },
    {
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 219,
      rating: 4.8,
      imgSrc: "biolaven-2.png",
    },
    {
      name: "Szampon do włosów Biolaven odzywczy",
      reviewsNumber: 27,
      rating: 1.6,
      imgSrc: "resibo-3.png",
    },
  ];

  return (
    <div className="products-list-component">
      <div className="products-list-tiles">
        {products.map((product) => (
          <ProductsListTileCmp
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
