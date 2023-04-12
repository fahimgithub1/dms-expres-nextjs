import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  useAddToCartMutation,
  useAddToWishListMutation,
} from "@/pages/api/cardOrderSlice";
import classes from "./productCard.module.css";

export default function ProductCard(props) {
  const src = props.img;
  const porductID = props.id;

  const disCountPrice = (
    <>
      <p>{Number(props.price) - Number("props.disCount")}</p>
      <span className="ManPrice">{props.price}</span>
    </>
  );

  return (
    <div className={`ProductCard ${classes.productCard}`}>
      <div className={`ImageBox ${classes.imageBox}`}>
        <Link href={`/Product/${porductID}`} className="d-block">
          {src === "" ? (
            <img src="/productSelected.webp" alt="" />
          ) : (
            <img src={props.img} alt="" />
          )}
        </Link>
      </div>

      <div className="textPart">
        <Link href={`/Product/${porductID}`} className="d-block">
          <p className={`${classes.Pname}`}>
            {!props.name ? "FRENCH MONTAGNARD" : props.name}
          </p>
        </Link>

        <div className="price">
          {Number("props.disCount") < Number(props.price) &&
          Number("props.disCount") != 0 ? (
            Math.floor(disCountPrice)
          ) : (
            <>
              <p className="mb-2">{Math.floor(props.price)}</p>
            </>
          )}
          {!props.price && <p className="mb-2">38.90 TK</p>}

          <ul>
            <li>
              {" "}
              <i className="fas fa-star"></i>{" "}
            </li>
            <li>
              {" "}
              <i className="fas fa-star"></i>{" "}
            </li>
            <li>
              {" "}
              <i className="fas fa-star"></i>{" "}
            </li>
            <li>
              {" "}
              <i className="fas fa-star"></i>{" "}
            </li>
            <li>
              {" "}
              <i className="fas fa-star"></i>{" "}
            </li>
            {!props.star ? <>(3)</> : <>({props.star})</>}
          </ul>
        </div>
      </div>
    </div>
  );
}
