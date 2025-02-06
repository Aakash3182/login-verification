import React from "react";

function Product(props) {
  const { _id, title, image, price } = props;
  return (
    <div className="col-md-4 col-sm-6 col-lg-3">
      <div className="card">
        <img src={image} alt="no product" className="card-img-top" />
        <div className="card-body">
          <h6 className="text-secondary"> {title} </h6>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Price:</strong>
              <span className="float-end text-success"> &#8377; {price} </span>
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn btn-sm btn-outline-secondary float-end">
            <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
