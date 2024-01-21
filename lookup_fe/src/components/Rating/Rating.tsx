import OutlineStarIcon from "../_icons/OutlineStarIcon";
import SolidStarIcon from "../_icons/SolidStarIcon";
import "./Rating.scss";

type RatingProps = {
  rating: number;
  reviews: number;
  color: string;
};

const Rating: React.FC<RatingProps> = ({ rating, reviews, color }) => {
  const iconsArray = [];
  for (let i = 0; i < 5; i++)
    iconsArray.push(i < Math.round(rating) ? <SolidStarIcon key={i} /> : <OutlineStarIcon key={i} />);

  return (
    <div className='rating-component'>
      <div className='rating-stars'>{iconsArray}</div>
      <div className='rating-reviews'>{reviews} reviews</div>
    </div>
  );
};

export default Rating;
