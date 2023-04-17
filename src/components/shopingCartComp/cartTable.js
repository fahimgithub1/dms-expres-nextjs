import { useUpdateCartMutation } from "@/pages/xCallapi/cardOrderSlice";
import React, { useEffect, useState } from "react";
import CartTr from "./cartTr";
import Cookies from "js-cookie";

export default function CartTable(props) {
  const cartData = props.cartdata.data;
  var raw = {
    qty: {},
  };

  const token = Cookies.get("authToken");

  const UpsateCard = () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json	");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: "follow",
    };

    fetch(
      "https://ovendar.memocosmetica.com/api/checkout/cart/update?token=true",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch(
        (error) => console.log("error", error)
        // alert("not enough item in stoke")
      );

    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {cartData.items.map((item) => (
              <CartTr
                key={item.id}
                id={item.id}
                img={item.product.images[0].medium_image_url}
                name={item.product.name}
                price={item.product.price}
                total={item.total}
                quantity={item.quantity}
                raw={raw}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-center">
        <button onClick={UpsateCard} className="mt-4 text-end updateCart">
          Update cart
        </button>
      </div>
    </>
  );
}
