import { useRemovespecificCartMutation } from "@/pages/xCallapi/cardOrderSlice";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export default function CartSummaryTh(props) {
  const itemId = props.id;
  
  const [timer, setTimer] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(Cookies.get('authToken'));
    
  }, []);

  const [RemoveSpecificCart] = useRemovespecificCartMutation();

  const deletHandle = (event) => {
    event.preventDefault();
    RemoveSpecificCart({ cart_item_id: itemId, token })
      .unwrap()
      .then((response) => {
        console.log(response.massage);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.massage);
      });
      
    setTimer(
      setTimeout(() => {
        window.location.reload(true);
      }, 1000)
    );
  }

  return (
    <div className="CartSummaryProduct row">
      <div className="col-3">
        <img
          src={props.src}
          alt="product image"
        />
      </div>

      <div className="col-9">
        <span className="CartProductTitle">
          {" "}
          {props.name}
        </span>
        <form className="CartNavForm">
          <div className="CartProductQuantity">
            <label>Qty: </label>
            <span>{props.cartQuantity}</span>
          </div>

          <div className="CartProductQuantity">
            <button onClick={deletHandle}>
              <i className="fa-solid fa-delete-left"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
