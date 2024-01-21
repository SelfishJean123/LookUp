import React from "react";
import ListTile from "../ListTile/ListTile";
import Product from "../../models/Product.model";
import "./List.scss";
import { Link } from "react-router-dom";

type ListProps = {
  items: Product[];
};

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className='list-component py-5'>
      <div className='list-items d-flex flex-wrap'>
        {items.map((item, index) => (
          <ListTile item={item} key={index} />
        ))}
      </div>
      <div className='list-pagination'>
        <ul className='pagination pagination-md'>
          <li className='page-item disabled'>
            <Link className='page-link' to='#'>
              &laquo;
            </Link>
          </li>
          <li className='page-item active'>
            <Link className='page-link' to='#'>
              1
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to='#'>
              2
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to='#'>
              3
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to='#'>
              4
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to='#'>
              5
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to='#'>
              &raquo;
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
