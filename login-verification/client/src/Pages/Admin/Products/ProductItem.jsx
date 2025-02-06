import React from "react";
import { NavLink } from "react-router-dom";

function ProductItem(props) {
  const { _id, title, image, price, category, discount, tax, desc } = props;
  return (
    <tr>
      <td>{title}</td>
      <td>
        <img src={image} className="img-fluid" alt="no image" height={100} width={100} />
      </td>
      <td>&#8377; {price}</td>
      <td>{category}</td>
      <td>{discount}%</td>
      <td>{tax}%</td>
      <td>
        <NavLink to={`/products/edit/${_id}`} className="btn btn-outline-info me-2">
          <i className="bi bi-pencil"></i>
        </NavLink>
        <button className="btn btn-outline-danger">
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
