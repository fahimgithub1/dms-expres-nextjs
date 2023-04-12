import React, { useState } from "react";
import AddToCartAndWish from "./addToCartAndWish";
import ProductCounting from "./productCounting";
import ProductShare from "./productShare";
import classes from "./productDetailsAction.module.css";

export default function ProductDetailsAction(props) {
  const productInfo = props.singleProduct.singleProduct.data;
  let inStock = productInfo.in_stock;
  const [quantity, setQuantity] = useState(1);

  // for incrment and disciment producnt
  const quanityHandler = (props) => {
    if (props === "plus" && quantity < 8) {
      setQuantity(quantity + 1);
    } else if (props === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={`col-lg-4 col-md-7 col-sm-6 product-view-area ${classes.productViewSrea}`}>
      <div className="part-txt">
        <h2 className={`${classes.mainProductTitle}`}>{productInfo.name}</h2>
        <p>{productInfo.short_description}</p>

        <div className={`${classes.review}`}>
          <span className={`${classes.star}`}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="rating-amount">
            ({productInfo.reviews.average_rating}) Reviews
          </span>
        </div>

        <p className={`${classes.price}`}>{Number(productInfo.price)} TK</p>

        <ul className={`${classes.shortDetails}`}>
          <li>
            Availability: 
            {inStock === true ? (
              <span> In stock</span>
            ) : (
              <span> Out of stock</span>
            )}
          </li>
        </ul>

        <ProductCounting quanityHandler={quanityHandler} quantity={quantity} />
        <AddToCartAndWish productInfo={productInfo}  quantity={quantity} />
        <ProductShare />
      </div>
    </div>
  );
}
