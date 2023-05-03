import { useGetAllProductsQuery } from "@/pages/xCallapi/apiSlices";
import { useGetWishListQuery } from "@/pages/xCallapi/cardOrderSlice";
import { useGetCartDatilesQuery } from "@/pages/xCallapi/customerSlices";
import Link from "next/link";
import { useState } from "react";
import CartSummary from "./cartSumary";
import CustomerProfile from "./customerProfile";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function MidNav() {
  const [productSearch, setProductSearch] = useState("");
  const { data: allProduct } = useGetAllProductsQuery();
  const router = useRouter();

  let searceResult = null;

  if (allProduct != undefined) {
    searceResult = (
      <div className="sercehSuggest">
        <ul>
          {productSearch.length > 0
            ? allProduct.data
                .filter((data) =>
                  data.name.toLowerCase().includes(productSearch)
                )
                .map((item) => (
                  <li
                    onClick={(e) => {
                      setProductSearch(item.name);
                      setProductSearch("");
                    }}
                  >
                    <Link href={`/searchProducts/${productSearch}`}>
                      {item.name}
                    </Link>
                  </li>
                ))
            : null}
        </ul>
      </div>
    );
  }

  // let token = null
  const token = !Cookies.get("authToken") ? null : Cookies.get("authToken");

  // wish itme
  const { data: wishtItems, lodding, error } = useGetWishListQuery(token);
  let wishlength = 0;
  if (wishtItems != undefined) {
    wishlength = wishtItems.data.length;
  }

  const { data: cartData } = useGetCartDatilesQuery(token);

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

  const submitSearch = (event) => {
    event.preventDefault();
    setProductSearch("");
    router.push(`/searchProducts/${productSearch}`);
  };

  return (
    <div className="MidNev">
      <div className="container">
        <div className="row">
          <div className="logo col-2 text-center">
            <Link href="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="Serchber productSearch col-7">
            <form action="" onSubmit={submitSearch}>
              <input
                type="text"
                placeholder="Search Your Product....."
                onChange={(e) => {
                  setProductSearch(e.target.value);
                }}
                value={productSearch}
              />

              <label onClick={submitSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
            </form>

            {searceResult}
          </div>

          <div className="SelectedIocn col-3">
            <div className="IconDiv NavCart Chartnonem">
              <i className="fa-solid fa-cart-shopping"></i>
              <div>
                <p className="Count">{cartLength}</p>
                <Link href="/shopingCart">
                  <p>My Cart</p>
                </Link>
              </div>

              <CartSummary cartdata={cartdata} />
            </div>

            <div className="IconDiv">
              <Link href="/wish" className="IconDiv lovehide Chartnone">
                <i className="fa-regular fa-heart"></i>
                <div>
                  <p className="Count">{wishlength}</p>
                  <p>My Wish</p>
                </div>
              </Link>
            </div>

            {token === null && (
              <div className="IconDiv">
                <i className="fa-regular fa-user"></i>
                <div>
                  <Link href="/login">
                    <p>Login</p>
                  </Link>
                  <Link href="/login">
                    <p>Register</p>
                  </Link>
                </div>
              </div>
            )}

            {token !== null && <CustomerProfile />}
          </div>
        </div>
      </div>
    </div>
  );
}
