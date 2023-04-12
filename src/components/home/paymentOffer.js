import React from "react";
import classes from "./paymentOffer.module.css";
import SectionWrapper from "@/layouts/sectionWrapper";

export default function PaymentOffer() {
  return (
    <SectionWrapper>
      <div className={`row align-items-center ${classes.paymentOffer}`}>
        <div
          className={`col-6 justify-content-center ${classes.paymentOfferCard} ${classes.w20}`}
        >
          <img src="/freeDelevery.webp" />
          <p>FREE DELIVERY</p>
          <b>FROM £100</b>
        </div>

        <div
          className={`col-6 justify-content-center ${classes.paymentOfferCard} ${classes.w20}`}
        >
          <img src="/FREE RETURNS.webp" />
          <p>FREE RETURNS + EXCHANGES</p>
        </div>

        <div
          className={`col-6 justify-content-center ${classes.paymentOfferCard} ${classes.w20}`}
        >
          <img src="/PAYMENT.jpg" />
          <p>PAYMENT</p>
          <b>PAYPAL</b>
        </div>

        <div
          className={`col-6 justify-content-center ${classes.paymentOfferCard} ${classes.w20}`}
        >
          <img src="/APPROVED.webp" />
          <p>APPROVED BY</p>
          <b>MOUNTAIN PROFESSIONALS</b>
        </div>

        <div
          className={`col-6 justify-content-center ${classes.paymentOfferCard} ${classes.w20}`}
        >
          <img src="/SECURED.webp" />
          <p>PAYMENT</p>
          <b>SECURED</b>
        </div>
      </div>
    </SectionWrapper>
  );
}
