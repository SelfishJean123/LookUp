import { useEffect } from "react";
import List from "../../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/actions/productsActions";
import Spinner from "../../components/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";
import "./ProductsPage.scss";

const ProductsPage = () => {
  const { products, loading, error } = useSelector((state: any) => state.productsListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAllProducts());
  }, [dispatch]);

  return (
    <div className='products-page'>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Notification notificationType='error' notificationMessage={error} />
      ) : (
        <List items={products} />
      )}
    </div>
  );
};

export default ProductsPage;
