import { FC, ReactNode, useEffect, useRef } from "react";
import { StarBorderRounded, StarHalfRounded, StarRateRounded } from "@mui/icons-material";
import "./ProductsListTileCmp.scss";

interface ProductsListTileCmpProps {
  name: string;
  reviewsNumber: number;
  rating: number;
  imgSrc: string;
}

const ProductsListTileCmp: FC<ProductsListTileCmpProps> = ({ name, reviewsNumber, rating, imgSrc }) => {
  const tileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tile = tileRef.current;

    if (tile) {
      const width = tile.offsetWidth;
      document.documentElement.style.setProperty("--tile-width", `${width}px`);
    }

    const handleResize = () => {
      if (tile) {
        const width = tile.offsetWidth;
        document.documentElement.style.setProperty("--tile-width", `${width}px`);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const starsArray: ReactNode[] = [];
  for (let i = 0; i < 5; i++) {
    starsArray.push(i < Math.round(rating) ? <StarRateRounded key={i} /> : <StarBorderRounded key={i} />);
  }

  return (
    <div className="product-list-tile-component" ref={tileRef}>
      <div className="product-list-tile-top">
        <div className="product-list-tile-img-wrapper">
          <img src={`http://localhost:5000/${imgSrc}`} alt={name} className="product-list-tile-img" />
        </div>

        <div className="product-list-tile-rating">
          <h4 className="product-list-tile-reviews">REVIEWS: {reviewsNumber}</h4>
          <div className="product-list-tile-starts-box">{starsArray}</div>
        </div>
      </div>

      <div className="product-list-tile-info">
        <h4 className="product-list-tile-name">{name}</h4>
      </div>
    </div>
  );
};

export default ProductsListTileCmp;
