import Link from "next/link";
import React from "react";
import classes from "./relatedProduct.module.css"

export default function RelatedProductCard(props) {
  const src = props.img;
  const porductID = props.id;

  const disCountPrice = (
    <>
      <p>{Number(props.price) - Number("props.disCount")}</p>
      <span className="ManPrice">{props.price}</span>
    </>
  );

  return (
    <div className={`${classes.ProductCard} ${classes.ProductCard1}`}>
      <Link href={`/Product/${porductID}`} className="d-block">
        <div className={`${classes.ImageBox}`}>
          {src === "" ? (
            <img src="/images/prduct.jpg" alt="" />
          ) : (
            <img src={props.img} alt="" />
          )}
        </div>

        <div className={`${classes.textPart}`}>
          <p className={`${classes.Pname}`}>{props.name}</p>
          <div className={`pb-2 ${classes.price}`}>
            {
              <div
                className="mb-1"
                dangerouslySetInnerHTML={{ __html: props.price }}
              />
            }

            <ul>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              ({props.star})
            </ul>
          </div>
        </div>

        <div className={`${classes.ProductBtn}`}>
          <button className="w-100">view</button>
        </div>
      </Link>
    </div>
  );
}
