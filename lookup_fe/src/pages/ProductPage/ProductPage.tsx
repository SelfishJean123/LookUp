import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSingleProduct } from "../../store/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import "./ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useSelector((state: any) => state.productDetailsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getSingleProduct(id || ""));
  }, [dispatch, id]);

  return (
    <div className='product-page'>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Notification notificationType='error' notificationMessage={error} />
      ) : (
        <ProductDetails product={product} />
      )}
    </div>
  );
};

export default ProductPage;
