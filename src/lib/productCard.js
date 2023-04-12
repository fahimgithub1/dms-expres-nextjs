import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  useAddToCartMutation,
  useAddToWishListMutation,
} from "@/pages/api/cardOrderSlice";
import classes from "./productCard.module.css"

export default function ProductCard(props) {
  const [timer, setTimer] = useState(null);

  const src = props.img;
  const porductID = props.id;
  const product_id = props.id;
  const quantity = 1;

  const [addToCart] = useAddToCartMutation();
  const [addToWishList] = useAddToWishListMutation();

  const isBrowser = typeof window !== "undefined";
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(isBrowser ? localStorage.getItem("token") : null);
  }, []);

  const AddCartInfo = {
    product_id,
    quantity: quantity,
    token,
  };

  const refresh = () => window.location.reload(true);

  const addCartItemsHandler = (e) => {
    e.preventDefault();
    addToCart(AddCartInfo)
      .unwrap()
      .then((response) => {
        console.log(response.massage);
      })
      .catch((error) => {
        console.log(error.massage);
      });

    setTimer(
      setTimeout(() => {
        refresh();
      }, 1000)
    );
  };

  const addWishItemsHandler = (e) => {
    e.preventDefault();

    addToWishList({ product_id, token })
      .unwrap()
      .then((response) => {
        console.log(response.massage);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setTimer(
      setTimeout(() => {
        refresh();
      }, 1000)
    );
  };

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
          <p className="Pname">
            {/* {props.name} */}
            FRENCH MONTAGNARD
          </p>
        </Link>

        <div className="price">
          {/* {Number("props.disCount") < Number(props.price) &&
                  Number("props.disCount") != 0 ? (
                    Math.floor(disCountPrice)
                  ) : (
                    <>
                      <p className="mb-2">{Math.floor(props.price)}</p>
                    </>
                  )} */}
          <p className="mb-2">38.90 TK</p>
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
            {/* ({props.star}) */}
            (3)
          </ul>
        </div>
      </div>
    </div>
  );
}
