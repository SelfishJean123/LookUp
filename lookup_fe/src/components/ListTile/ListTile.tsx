import { Link } from "react-router-dom";
import Product from "../../models/Product.model";
import Rating from "../Rating/Rating";
import "./ListTile.scss";

type ListTileProps = {
  item: Product;
};

const ListTile: React.FC<ListTileProps> = ({ item }) => {
  return (
    <div className='list-tile-component col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
      <div className='tile-wrapper'>
        <Link className='tile-link' to={`/products/${item._id}`}>
          <div className="tile-image-wrapper">
            <img src={`/assets${item.image}`} alt='' />
          </div>

          <h4>{item.brand}</h4>
          <h5>{item.name}</h5>
        </Link>

        <Rating rating={item.rating} reviews={item.numReviews} color={"#f8e825"} />
      </div>
    </div>
  );
};
export default ListTile;
