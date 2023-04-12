import SectionWrapper from "@/layouts/sectionWrapper";
import React from "react";
import classes from "./threeDeals.module.css";
import Link from "next/link";

export default function ThreeDeals() {
  return (
    <SectionWrapper>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className={classes.getReady}>
            <h4 className={classes.titleDeal}>Get Ready</h4>

            <Link href="">
              <img src="/GET-READY.jpg" className={classes.dealImg} />
            </Link>

            <Link href="">
              <img src="/GET-READY2.jpg" className={classes.dealImg} />
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className={classes.dealCard}>
            <h4 className={classes.titleDeal}>best beals</h4>

            <Link href="">
              <img src="/BEST-DEALS.jpg" className={classes.dealImg} />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
