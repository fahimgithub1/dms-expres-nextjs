import React from "react";
import ProductImages from "./productImages";
import ProductDetailsAction from "./productDetailsAction";

export default function ProductView(props) {
  return (
    <section className="MainBodyTop HerosSection sectionMarginBot productPages">
      <div className="container">
        <div className="row">
          <ProductImages images={props.singleProduct.data.images} />

          <ProductDetailsAction singleProduct={props} />
        </div>
      </div>
    </section>
  );
}
