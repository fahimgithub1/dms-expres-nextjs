import React from "react";
import classes from "./orderTraking.module.css";

export default function OrderInfo() {
  return (
    <div className={`MainBodyTop HerosSection ${classes.MainBodyTop}`}>
      <div className="container mb-0 mb-md-3 mb--lg-5 mt-md-0 pt-3 pt-md-3 pt-lg-4">
        <article className={`${classes.card} mb-3 mb-md-4 mb-lg-5`}>
          <header className={classes.cardHeader}> My Orders / Tracking </header>
          <div className={classes.cardBody}>
            <h6>Order ID: OD45345345435</h6>
            <article className={classes.card}>
              <div className={`${classes.cardBody} row`}>
                <div className="col">
                  {" "}
                  <strong>Estimated Delivery time:</strong> <br />
                  29 nov 2019{" "}
                </div>
                <div className="col">
                  {" "}
                  <strong>Shipping BY:</strong> <br /> BLUEDART, |{" "}
                  <i className="fa fa-phone"></i> +1598675986{" "}
                </div>
                <div className="col">
                  {" "}
                  <strong>Status:</strong> <br /> Picked by the courier{" "}
                </div>
                <div className="col">
                  {" "}
                  <strong>Tracking #:</strong> <br /> BD045903594059{" "}
                </div>
              </div>
            </article>

            <div className={classes.track}>
              <div className={`${classes.step} ${classes.active}`}>
                {" "}
                <span className={classes.icon}>
                  {" "}
                  <i className="fa fa-check"></i>{" "}
                </span>{" "}
                <span className={classes.text}>Order confirmed</span>{" "}
              </div>
              <div className={`${classes.step} ${classes.active}`}>
                {" "}
                <span className={classes.icon}>
                  {" "}
                  <i className="fa fa-user"></i>{" "}
                </span>{" "}
                <span className={classes.text}> Picked by courier</span>{" "}
              </div>
              <div className={classes.step}>
                {" "}
                <span className={classes.icon}>
                  {" "}
                  <i className="fa fa-truck"></i>{" "}
                </span>{" "}
                <span className={classes.text}> On the way </span>{" "}
              </div>
              <div className={classes.step}>
                {" "}
                <span className={classes.icon}>
                  {" "}
                  <i className="fa fa-box"></i>{" "}
                </span>{" "}
                <span className={classes.text}>Ready for pickup</span>{" "}
              </div>
            </div>

            <hr />

            {/* <ul className="row">
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img
                      src="https://i.imgur.com/iDwDQ4o.png"
                      className="img-sm border"
                    />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">
                      Dell Laptop with 500GB HDD <br /> 8GB RAM
                    </p>{" "}
                    <span className="text-muted">$950 </span>
                  </figcaption>
                </figure>
              </li>
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img
                      src="https://i.imgur.com/tVBy5Q0.png"
                      className="img-sm border"
                    />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">
                      HP Laptop with 500GB HDD <br /> 8GB RAM
                    </p>{" "}
                    <span className="text-muted">$850 </span>
                  </figcaption>
                </figure>
              </li>
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img
                      src="https://i.imgur.com/Bd56jKH.png"
                      className="img-sm border"
                    />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">
                      ACER Laptop with 500GB HDD <br /> 8GB RAM
                    </p>{" "}
                    <span className="text-muted">$650 </span>
                  </figcaption>
                </figure>
              </li>
            </ul> */}

            {/* <hr /> */}

            <a href="/" className={`btn ${classes.btnWarning}`} data-abc="true">
              {" "}
              <i className="fa fa-chevron-left"></i> Continue shopping
            </a>
          </div>
        </article>

        
        <article className={`${classes.card} mb-3 mb-md-4 mb-lg-5`}>
          <header className={classes.cardHeader}> My Orders / Tracking </header>
          <div className={classes.cardBody}>
            <h6>Order ID: OD45345345435</h6>
            <article className={classes.card}>
              <div className={`${classes.cardBody} row`}>
                <div className="col">
                  {" "}
                  <strong>Estimated Delivery time:</strong> <br />
                  29 nov 2019{" "}
                </div>
                <div className="col">
                  {" "}
                  <strong>Shipping BY:</strong> <br /> BLUEDART, |{" "}
                  <i className="fa fa-phone"></i> +1598675986{" "}
                </div>
                <div className="col">
                  {" "}
                  <strong>Status:</strong> <br /> Picked by the courier{" "}
                </div>
                <div className="col">
                  {" "}
                  <strong>Tracking #:</strong> <br /> BD045903594059{" "}
                </div>
              </div>
            </article>

            <div className={classes.track}>
              <div className={`${classes.step} ${classes.active}`}>
                {" "}
                <span className={classes.icon}>
                  {" "}
                  <i className="fa fa-check"></i>{" "}
                </span>{" "}
                <span className={classes.text}>Order confirmed</span>{" "}
              </div>
              <div className={`${classes.step} ${classes.active}`}>
                {" "}
                <span className={classes.icon}>
                  {" "}
                  <i className="fa fa-user"></i>{" "}
                </span>{" "}
                <span className={classes.text}> Picked by courier</span>{" "}
              </div>
              <div className={classes.step}>
                {" "}
                <span className={classes.icon}>
                  {" "}
                  <i className="fa fa-truck"></i>{" "}
                </span>{" "}
                <span className={classes.text}> On the way </span>{" "}
              </div>
              <div className={classes.step}>
                {" "}
                <span className={classes.icon}>
                  {" "}
                  <i className="fa fa-box"></i>{" "}
                </span>{" "}
                <span className={classes.text}>Ready for pickup</span>{" "}
              </div>
            </div>

            <hr />

            {/* <ul className="row">
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img
                      src="https://i.imgur.com/iDwDQ4o.png"
                      className="img-sm border"
                    />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">
                      Dell Laptop with 500GB HDD <br /> 8GB RAM
                    </p>{" "}
                    <span className="text-muted">$950 </span>
                  </figcaption>
                </figure>
              </li>
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img
                      src="https://i.imgur.com/tVBy5Q0.png"
                      className="img-sm border"
                    />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">
                      HP Laptop with 500GB HDD <br /> 8GB RAM
                    </p>{" "}
                    <span className="text-muted">$850 </span>
                  </figcaption>
                </figure>
              </li>
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img
                      src="https://i.imgur.com/Bd56jKH.png"
                      className="img-sm border"
                    />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">
                      ACER Laptop with 500GB HDD <br /> 8GB RAM
                    </p>{" "}
                    <span className="text-muted">$650 </span>
                  </figcaption>
                </figure>
              </li>
            </ul>

            <hr /> */}

            <a href="/" className={`btn ${classes.btnWarning}`} data-abc="true">
              {" "}
              <i className="fa fa-chevron-left"></i> Continue shopping
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
