import { setShortMethod } from "@/store/slices/filterWithPrice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./caragoris.module.css";
import PriceRangeSlider from "./priceRangeSlider";
// import CategoriFilerPrice from "./categoriFilerPrice";

export default function CatagoriSortby(props) {
  let shortOption = "";

  const dispatch = useDispatch();

  const totalItems = useSelector((state) => {
    return state.PriceProducts.quantity;
  });

  return (
    <>
      <div className={classes.CtagorisFilter}>
        <ul>
          <li>
            <button
              onClick={() => {
                shortOption = "A - Z";
                dispatch(setShortMethod(shortOption));
              }}
            >
              A - Z
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                shortOption = "Z - A";
                dispatch(setShortMethod(shortOption));
              }}
            >
              Z - A
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                shortOption = "Lowest";
                dispatch(setShortMethod(shortOption));
              }}
            >
              Lowest
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                shortOption = "Height";
                dispatch(setShortMethod(shortOption));
              }}
            >
              Height
            </button>
          </li>
        </ul>
        <div className={classes.priceFilter}>
          {/* <p>Price: </p> */}
          <PriceRangeSlider categori={props.categori} />
        </div>
      </div>
    </>
  );
}
