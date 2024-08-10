import Product from "../../entities/Product";
import ProductTileCmp from "../ProductTileCmp/ProductTileCmp";
import { FC } from "react";
import "./ProductsListCmp.scss";

interface ProductsListCmpProps {
  products: Product[];
}

const ProductsListCmp: FC<ProductsListCmpProps> = ({ products }) => {
  console.log(products);
  return (
    <div className="products-list-component">
      <div className="products-list-tiles">
        {products.map((product, index) => (
          <ProductTileCmp product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductsListCmp;
