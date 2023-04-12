import React, { useState } from "react";
import LaptopMenu from "./laptopMenu";

export default function BottomNev() {
    const [isLaptopMenuShow, setIsLaptopMenuShow] = useState(true);

    const laptopCategoriHandler = () => {
        if (!isLaptopMenuShow) {
          setIsLaptopMenuShow(true);
        } else {
          setIsLaptopMenuShow(false);
        }
      };

  return (
    <div className="BottomNev">
      <div className="container">
        <div className="row">
          <div className="DestopNavCtagoris col-2">
            <span>All Categories</span>

            {isLaptopMenuShow && (
              <i
                className="fa-solid fa-bars CatagorisIcinHide"
                onClick={laptopCategoriHandler}
              ></i>
            )}

            {!isLaptopMenuShow && (
              <i className="fa fa-xmark" onClick={laptopCategoriHandler}></i>
            )}

            {!isLaptopMenuShow && (
              <LaptopMenu setIsLaptopMenuShow={setIsLaptopMenuShow} />
            )}
          </div>

          <div className="horizontal-menu col-10">
            <ul>
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/blogs">Blog</a>
              </li>
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/OrderTraking">Order Traking</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
