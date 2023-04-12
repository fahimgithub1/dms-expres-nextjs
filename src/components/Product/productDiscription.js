import React from "react";
import classes from "./productDesciption.module.css";
import SectionWrapper from "@/layouts/sectionWrapper";

export default function ProductDiscription(props) {
  const discition = props.singleProduct.data;

  return (
    <SectionWrapper>
      <h2 className={`sectionTitle ${classes.sectionTitle2}`}>Description</h2>

      <div className="ProductDatiles">
        <div className="row">
          <div className={`col-6 ${classes.TechnicalFocus}`}>
            <div className="row">
              <div className="col-6">
                <ul className={`${classes.FristList}`}>
                  <li>
                    <span>NAME:</span> <span>COSMIQUES</span>
                  </li>
                  <li>
                    <span>FITTING:</span> <span>CLASSIC</span>
                  </li>
                  <li>
                    <span>INSULATION:</span> <span>ALL SEASONS</span>
                  </li>
                  <li>
                    <span>STRETCHABILITY:</span> <span>HIGH</span>
                  </li>
                </ul>
              </div>

              <div className="col-6">
                <ul>
                <li>
                    <span>NAME:</span> <span>COSMIQUES</span>
                  </li>
                  <li>
                    <span>FITTING:</span> <span>CLASSIC</span>
                  </li>
                  <li>
                    <span>INSULATION:</span> <span>ALL SEASONS</span>
                  </li>
                  <li>
                    <span>STRETCHABILITY:</span> <span>HIGH</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-6">
            <p>{discition.description}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
