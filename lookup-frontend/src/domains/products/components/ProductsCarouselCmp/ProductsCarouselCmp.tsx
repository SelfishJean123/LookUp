import Product from "../../interfaces/Product.interface";
import Slider from "react-slick";
import { FC } from "react";
import { Link } from "react-router-dom";
import "./ProductsCarouselCmp.scss";

interface ProductsCarouselCmpProps {
  productItems: Product[];
}

const ProductsCarouselCmp: FC<ProductsCarouselCmpProps> = ({ productItems }) => {
  var settings = {
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      {productItems.length > 4 ? (
        <Slider className="product-carousel-component" {...settings}>
          {productItems.map((product, index) => {
            return (
              <div className="product-carousel-item" key={index}>
                <div className="carousel-item-img">
                  <img src={`http://localhost:5000/${product.image1}`} />
                </div>

                <div className="carousel-item-title">
                  <Link to={`/products-catalogue/${product.id}`}>
                    <h6 title={product.name}>{product.name}</h6>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <div className="product-no-carousel-component">
          {productItems.map((product, index) => {
            return (
              <div className="product-no-carousel-item" key={index}>
                <div className="no-carousel-item-img">
                  <img src={`http://localhost:5000/${product.image1}`} />
                </div>

                <div className="no-carousel-item-title">
                  <Link to={`/products-catalogue/${product.id}`}>
                    <h6 title={product.name}>{product.name}</h6>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProductsCarouselCmp;
