import BgWrapper from "@/layouts/bgWrapper";
import React from "react";
import classes from "./selectedProduct.module.css";
import Link from "next/link";

export default function SelectedProduct() {
  const porductID = 2;
  const src = "";

  return (
    <BgWrapper>
      <h4 className={classes.title}>Most Populer Product</h4>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className={`ProductCard ${classes.productCard}`}>
            <div className={`ImageBox ${classes.imageBox}`}>
              <Link href={`/Product/${porductID}`} className="d-block">
                {src === "" ? (
                  <img src="/productSelected.webp" alt="" />
                ) : (
                  <img src={props.img} alt="" />
                )}
              </Link>
            </div>

            <div className="textPart">
              <Link href={`/Product/${porductID}`} className="d-block">
                <p className="Pname">
                  {/* {props.name} */}
                  FRENCH MONTAGNARD
                </p>
              </Link>

              <div className="price">
                {/* {Number("props.disCount") < Number(props.price) &&
                  Number("props.disCount") != 0 ? (
                    Math.floor(disCountPrice)
                  ) : (
                    <>
                      <p className="mb-2">{Math.floor(props.price)}</p>
                    </>
                  )} */}
                <p className="mb-2">38.90 TK</p>
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
                  {/* ({props.star}) */}
                  (3)
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className={`ProductCard ${classes.productCard}`}>
            <div className={`ImageBox ${classes.imageBox}`}>
              <Link href={`/Product/${porductID}`} className="d-block">
                {src === "" ? (
                  <img src="/productSelected.webp" alt="" />
                ) : (
                  <img src={props.img} alt="" />
                )}
              </Link>
            </div>

            <div className="textPart">
              <Link href={`/Product/${porductID}`} className="d-block">
                <p className="Pname">
                  {/* {props.name} */}
                  FRENCH MONTAGNARD
                </p>
              </Link>
              
              <div className="price">
                {/* {Number("props.disCount") < Number(props.price) &&
                  Number("props.disCount") != 0 ? (
                    Math.floor(disCountPrice)
                  ) : (
                    <>
                      <p className="mb-2">{Math.floor(props.price)}</p>
                    </>
                  )} */}
                <p className="mb-2">38.90 TK</p>
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
                  {/* ({props.star}) */}
                  (3)
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className={`ProductCard ${classes.productCard}`}>
            <div className={`ImageBox ${classes.imageBox}`}>
              <Link href={`/Product/${porductID}`} className="d-block">
                {src === "" ? (
                  <img src="/productSelected.webp" alt="" />
                ) : (
                  <img src={props.img} alt="" />
                )}
              </Link>
            </div>

            <div className="textPart">
              <Link href={`/Product/${porductID}`} className="d-block">
                <p className="Pname">
                  {/* {props.name} */}
                  FRENCH MONTAGNARD
                </p>
              </Link>
              
              <div className="price">
                {/* {Number("props.disCount") < Number(props.price) &&
                  Number("props.disCount") != 0 ? (
                    Math.floor(disCountPrice)
                  ) : (
                    <>
                      <p className="mb-2">{Math.floor(props.price)}</p>
                    </>
                  )} */}
                <p className="mb-2">38.90 TK</p>
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
                  {/* ({props.star}) */}
                  (3)
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className={`ProductCard ${classes.productCard}`}>
            <div className={`ImageBox ${classes.imageBox}`}>
              <Link href={`/Product/${porductID}`} className="d-block">
                {src === "" ? (
                  <img src="/productSelected.webp" alt="" />
                ) : (
                  <img src={props.img} alt="" />
                )}
              </Link>
            </div>

            <div className="textPart">
              <Link href={`/Product/${porductID}`} className="d-block">
                <p className="Pname">
                  {/* {props.name} */}
                  FRENCH MONTAGNARD
                </p>
              </Link>
              
              <div className="price">
                {/* {Number("props.disCount") < Number(props.price) &&
                  Number("props.disCount") != 0 ? (
                    Math.floor(disCountPrice)
                  ) : (
                    <>
                      <p className="mb-2">{Math.floor(props.price)}</p>
                    </>
                  )} */}
                <p className="mb-2">38.90 TK</p>
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
                  {/* ({props.star}) */}
                  (3)
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className={`ProductCard ${classes.productCard}`}>
            <div className={`ImageBox ${classes.imageBox}`}>
              <Link href={`/Product/${porductID}`} className="d-block">
                {src === "" ? (
                  <img src="/productSelected.webp" alt="" />
                ) : (
                  <img src={props.img} alt="" />
                )}
              </Link>
            </div>

            <div className="textPart">
              <Link href={`/Product/${porductID}`} className="d-block">
                <p className="Pname">
                  {/* {props.name} */}
                  FRENCH MONTAGNARD
                </p>
              </Link>

              <div className="price">
                {/* {Number("props.disCount") < Number(props.price) &&
                  Number("props.disCount") != 0 ? (
                    Math.floor(disCountPrice)
                  ) : (
                    <>
                      <p className="mb-2">{Math.floor(props.price)}</p>
                    </>
                  )} */}
                <p className="mb-2">38.90 TK</p>
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
                  {/* ({props.star}) */}
                  (3)
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className={`ProductCard ${classes.productCard}`}>
            <div className={`ImageBox ${classes.imageBox}`}>
              <Link href={`/Product/${porductID}`} className="d-block">
                {src === "" ? (
                  <img src="/productSelected.webp" alt="" />
                ) : (
                  <img src={props.img} alt="" />
                )}
              </Link>
            </div>

            <div className="textPart">
              <Link href={`/Product/${porductID}`} className="d-block">
                <p className="Pname">
                  {/* {props.name} */}
                  FRENCH MONTAGNARD
                </p>
              </Link>
              
              <div className="price">
                {/* {Number("props.disCount") < Number(props.price) &&
                  Number("props.disCount") != 0 ? (
                    Math.floor(disCountPrice)
                  ) : (
                    <>
                      <p className="mb-2">{Math.floor(props.price)}</p>
                    </>
                  )} */}
                <p className="mb-2">38.90 TK</p>
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
                  {/* ({props.star}) */}
                  (3)
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className={`ProductCard ${classes.productCard}`}>
            <div className={`ImageBox ${classes.imageBox}`}>
              <Link href={`/Product/${porductID}`} className="d-block">
                {src === "" ? (
                  <img src="/productSelected.webp" alt="" />
                ) : (
                  <img src={props.img} alt="" />
                )}
              </Link>
            </div>

            <div className="textPart">
              <Link href={`/Product/${porductID}`} className="d-block">
                <p className="Pname">
                  {/* {props.name} */}
                  FRENCH MONTAGNARD
                </p>
              </Link>
              
              <div className="price">
                {/* {Number("props.disCount") < Number(props.price) &&
                  Number("props.disCount") != 0 ? (
                    Math.floor(disCountPrice)
                  ) : (
                    <>
                      <p className="mb-2">{Math.floor(props.price)}</p>
                    </>
                  )} */}
                <p className="mb-2">38.90 TK</p>
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
                  {/* ({props.star}) */}
                  (3)
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className={`ProductCard ${classes.productCard}`}>
            <div className={`ImageBox ${classes.imageBox}`}>
              <Link href={`/Product/${porductID}`} className="d-block">
                {src === "" ? (
                  <img src="/productSelected.webp" alt="" />
                ) : (
                  <img src={props.img} alt="" />
                )}
              </Link>
            </div>

            <div className="textPart">
              <Link href={`/Product/${porductID}`} className="d-block">
                <p className="Pname">
                  {/* {props.name} */}
                  FRENCH MONTAGNARD
                </p>
              </Link>
              
              <div className="price">
                {/* {Number("props.disCount") < Number(props.price) &&
                  Number("props.disCount") != 0 ? (
                    Math.floor(disCountPrice)
                  ) : (
                    <>
                      <p className="mb-2">{Math.floor(props.price)}</p>
                    </>
                  )} */}
                <p className="mb-2">38.90 TK</p>
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
                  {/* ({props.star}) */}
                  (3)
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BgWrapper>
  );
}
