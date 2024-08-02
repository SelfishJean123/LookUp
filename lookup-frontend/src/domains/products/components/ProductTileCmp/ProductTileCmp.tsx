import { FC, ReactNode, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { StarBorderRounded, StarHalfRounded, StarRateRounded } from "@mui/icons-material";
import "./ProductTileCmp.scss";

interface ProductTileCmpProps {
  id: string;
  name: string;
  reviewsNumber: number;
  rating: number;
  imgSrc: string;
}

const ProductTileCmp: FC<ProductTileCmpProps> = ({ id, name, reviewsNumber, rating, imgSrc }) => {
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
      <Link to={id}>
        <div className="product-list-tile-top">
          <div className="product-list-tile-img-wrapper">
            <img src={`/assets/products/${imgSrc}`} alt={name} className="product-list-tile-img" />
          </div>

          <div className="product-list-tile-rating">
            <h5 className="product-list-tile-reviews">REVIEWS: {reviewsNumber}</h5>
            <div className="product-list-tile-starts-box">{starsArray}</div>
          </div>
        </div>

        <div className="product-list-tile-info">
          <h5 className="product-list-tile-name" title={name}>
            {name}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default ProductTileCmp;
