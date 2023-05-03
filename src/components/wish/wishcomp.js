import ShopingListWrapper from "@/layouts/shopingListWrapper";
import Link from "next/link";
import React from "react";
import WishTable from "./wishTable";
import { useGetWishListQuery } from "@/pages/xCallapi/cardOrderSlice";
import Lodding from "@/lib/lodding";
import Cookies from "js-cookie";

export default function Wishcomp() {
  const emptyCart = "/images/empty-cart.jpg";

  const token = Cookies.get('authToken');

  const { data: wishData, lodding, error } = useGetWishListQuery(token);

  let wishContent = "";
  if (wishData != undefined) {
    wishContent =
      wishData.data.length > 0 ? (
        <>
          <WishTable wishData={wishData} />
        </>
      ) : (
        <div className="emptyBox">
          <img className="emptyBoxImage" src={emptyCart} />
          <h4>No Item Available</h4>
        </div>
      );
  }

  return (
    <ShopingListWrapper>
      {(lodding || wishData === undefined) && <Lodding />}
      {!lodding && wishContent}

      <div className="btn-box CartPage d-flex">
        <div className="btn-box2">
          <Link href="/" className="def-btn">
            <i className="fa-solid fa-chevron-left"></i>
            Continue Shopping
          </Link>
        </div>
      </div>
    </ShopingListWrapper>
  );
}
