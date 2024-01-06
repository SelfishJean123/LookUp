import { Link } from "react-router-dom";
import Product from "../../models/Product.model";
import Rating from "../Rating/Rating";
import "./ProductDetails.scss";
import ChevronLeftIcon from "../_icons/ChevronLeftIcon";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className='product-details-component'>
      <div className='back-button-wrapper'>
        <Link to='/products' type='button' className='btn btn-dark'>
          <ChevronLeftIcon /> Go back to List
        </Link>
      </div>

      <div className='product-image'>
        <img src={`/assets${product?.image}`} alt='' />
      </div>

      <div className='product-info'>
        <h1 className='text-primary'>
          {product?.name}
          <br />
          <span>{product?.subname}</span>
        </h1>
        <h2>
          {product?.brand}
          <br />
          <span>{product?.subrand}</span>
        </h2>
        <h3>
          Category: <span>{`${product?.category} | ${product?.subcategory}`}</span>
        </h3>
        <h3>
          Volume: <span>{parseFloat((product?.volume || 0).toString())} ml</span>
        </h3>

        <div className='product-vegan-cf-info'>
          <div className='vegan-info'>
            <h3>
              Vegan: <span>{product?.vegan || "No Data"}</span>
            </h3>

            {product?.vegan === "YES (Vegan TM)" && (
              <img src='/assets/images/logos/VeganTM.png' alt='Vegan TradeMark' />
            )}
          </div>

          <div className='cf-info'>
            <h3>
              Cruelty free: <span>{product?.crueltyFree || "No Data"}</span>
            </h3>

            {product?.crueltyFree === "YES (PETA)" && (
              <img src='/assets/images/logos/CrueltyFree_Peta.png' alt='Cruelty Free Peta Logo' />
            )}
            {product?.crueltyFree === "YES (Leaping Bunny)" && (
              <img src='/assets/images/logos/CrueltyFree_LeapingBunny.png' alt='Cruelty Free Leaping Bunny Logo' />
            )}
          </div>
        </div>

        <h3>
          Average price: <span>{product?.price} PLN</span>
        </h3>
        <Rating rating={product?.rating || 0} reviews={product?.numReviews || 0} color={"#f8e825"} />
      </div>

      <div className='product-accordion accordion mt-5' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='false'
              aria-controls='collapseOne'>
              Description
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>{product?.description}</div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'>
              How to use
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>{product?.howToUse}</div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='true'
              aria-controls='collapseThree'>
              INCI
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse show'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>{product?.inci}</div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFour'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFour'
              aria-expanded='false'
              aria-controls='collapseFour'>
              Reviews
            </button>
          </h2>
          <div
            id='collapseFour'
            className='accordion-collapse collapse'
            aria-labelledby='headingFour'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
              plugin adds the appropriate classes that we use to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
