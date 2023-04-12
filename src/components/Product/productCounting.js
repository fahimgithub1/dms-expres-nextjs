import React from "react";
import classes from "./productDetailsAction.module.css";

export default function ProductCounting(props) {
  return (
    <form>
      <div className="row g-xl-4 g-3">
        <div className="col-lg-8 col-md-12 col-sm-4">
          <div>
            <label>QTY</label>
            <div className={`${classes.productCount}`}>
              <div className={`${classes.quantity} rapper-quantity`}>
                <input
                  className={`${classes.input}`}
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  value={props.quantity}
                  readOnly
                />

                <div className={`${classes.quantityNav}`}>
                  {props.quantity >= 2 ? (
                    <div
                      className={`${classes.quantityButton} quantity-down`}
                      onClick={() => props.quanityHandler("minus")}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </div>
                  ) : (
                    <div
                      className={`${classes.quantityButton} quantity-down disable`}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </div>
                  )}

                  {props.quantity <= 7 ? (
                    <div
                      className={`${classes.quantityButton} quantity-up`}
                      onClick={() => props.quanityHandler("plus")}
                      disable={false}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  ) : (
                    <div
                      className={`${classes.quantityButton} disable`}
                      disable={false}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
