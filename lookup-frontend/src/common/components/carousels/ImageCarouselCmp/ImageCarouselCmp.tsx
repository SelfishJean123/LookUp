import Slider from "react-slick";
import { FC } from "react";
import "./ImageCarouselCmp.scss";

interface ImageCarouselCmpProps {
  childrenSources: string[];
}

const ImageCarouselCmp: FC<ImageCarouselCmpProps> = ({ childrenSources }) => {
  var settings = {
    customPaging: (index: number) => {
      return (
        <a className="carousel-thumbnail">
          <img src={childrenSources[index]} alt="" />
        </a>
      );
    },
    arrows: false,
    dots: true,
    dotsClass: "carousel-thumbnails slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="image-carousel-component" {...settings}>
      {childrenSources.map((childSource) => {
        return (
          <div className="carousel-image">
            <img src={childSource} alt="" />
          </div>
        );
      })}
    </Slider>
  );
};

export default ImageCarouselCmp;
