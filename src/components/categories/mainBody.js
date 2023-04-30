import React from "react";
import CatagoriProducts from "./catagoriProducts";
import CatagoriSortby from "./catagoriSortby";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilterProductsQuery } from "@/pages/xCallapi/apiSlices";
import { setProduct, setQuentity } from "@/store/slices/filterWithPrice";

export default function MainBody(props) {
  const dispatch = useDispatch();

  let isItemAvilable = true;
  const reduxData = useSelector((state) => {
    return state.PriceProducts.price;
  });
  const price = reduxData.price;

  const productParameters = props.productParameters;
  const { data: CatagorisProduct, lodding } = useGetFilterProductsQuery({
    productParameters,
    price,
  });

  let quantity = 0;
  if (CatagorisProduct != undefined) {
    console.log("CatagorisProduct")
    console.log(CatagorisProduct)
    dispatch(setQuentity(quantity));

    if (CatagorisProduct.data.length > 0) {
      dispatch(setProduct(CatagorisProduct.data));
      quantity = CatagorisProduct.data.length;
      dispatch(setQuentity(quantity));
    }

    if (CatagorisProduct.data.length === 0) {
      isItemAvilable = false;
    }
  }


  return (
    <div className="pt-lg-4 pt-md-3">
      <div className="AllProduct">
        <CatagoriSortby categori={props.categori}  />
        <CatagoriProducts isItemAvilable={isItemAvilable} lodding={lodding} />
      </div>
    </div>
  );
}
