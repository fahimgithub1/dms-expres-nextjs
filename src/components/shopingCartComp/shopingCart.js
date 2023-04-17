import ShopingListWrapper from "@/layouts/shopingListWrapper";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartCalculation from "./cartCalculation";
import CartTable from "./cartTable";
import { useGetCartDatilesQuery } from "@/pages/xCallapi/customerSlices";
import Lodding from "@/lib/lodding";
import Cookies from "js-cookie";

export default function ShopingCart(props) {
  const emptyCart = "/images/empty-cart.jpg";

  const token = Cookies.get('authToken');

  const { data: cartData, lodding } = useGetCartDatilesQuery(token);

  let cartLength = 0;
  let cartdata = "";
  if (cartData !== undefined && cartData !== null) {
    if (cartData.data !== null) {
      if (cartData.data.items.length > 0) {
        cartLength = cartData.data.items_count;
        cartdata = cartData;
      }
    }
  }

  return (
    <ShopingListWrapper>
      {(cartLength > 0 && !lodding) ? (
        <div>
          <CartTable cartdata={cartdata} />
          <CartCalculation cartdata={cartdata} />
        </div>
      ) : (
        <div className="emptyBox">
          <img className="emptyBoxImage" src={emptyCart} />
          <h4>No Item Available</h4>
        </div>
      )}

      {lodding && <Lodding />}

      <div className="btn-box CartPage d-flex">
        <div className="btn-box2">
          <Link href="/" className="def-btn">
            <i className="fa-solid fa-chevron-left"></i>
            Continue Shopping
          </Link>
        </div>

        <div>
          {cartLength > 0 ? (
            <button
              className="def-btn tab-next-btn ProceedToCheckout"
              id="proceedToCheckout"
              onClick={props.onShopingCartView}
            >
              Proceed to checkout <i className="fa-solid fa-chevron-right"></i>
              <i className="fa-light fa-cart-circle-check"></i>
            </button>
          ) : null}
        </div>
      </div>
    </ShopingListWrapper>
  );
}
