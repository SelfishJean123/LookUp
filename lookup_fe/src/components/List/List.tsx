import React from "react";
import ListTile from "../ListTile/ListTile";
import Product from "../../models/Product.model";
import "./List.scss";

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
            <a className='page-link' href='#'>
              &laquo;
            </a>
          </li>
          <li className='page-item active'>
            <a className='page-link' href='#'>
              1
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              4
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              5
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              &raquo;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
