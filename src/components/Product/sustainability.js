import SectionWrapper from "@/layouts/sectionWrapper";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";
import classes from "./sustainability.module.css";

export default function Sustainability() {
  return (
    <SectionWrapper>
      <div className="d-flex justify-content-center">
        <SectionTitle title="cimalp, committed to the planet" />
      </div>

      <div className="row">
        <div className="col-md-4 p-1">
          <div className={`${classes.sustaCard}`}>
            <h4>Make It Last</h4>
            <p>
              Our R&D team strives to design built-to-last clothing and
              equipment . THEY ARE WORN, BUT THEY STILL HAVE LIFE. One of the
              most responsible things we can do as a company is giving clothes.
            </p>
          </div>
        </div>

        <div className="col-md-4 p-1">
          <div className={`${classes.sustaCard}`}>
            <h4>Sustainable Performance</h4>
            <p>
              Gear that provides comfort and performance for athletes while
              preserving the environment. Cimalp has been providing and
              protecting Adventurers since 1964 and is willing to do so for a
              long time.
            </p>
          </div>
        </div>

        <div className="col-md-4 p-1">
          <div className={`${classes.sustaCard}`}>
            <h4>Eco-Friendly Desig</h4>
            <p>
              Our organic dyes and pigments are mostly bio-sourced, our clothing
              is PFC free, and our fabrics are Bluesign® or Oeko-Tex® certified.
              Wearing one of these nature-friendly garments is a sign.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
