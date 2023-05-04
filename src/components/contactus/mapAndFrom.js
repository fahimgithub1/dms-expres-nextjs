import React from "react";
import MapBox from "./mapBox";
import ContactInfo from "./contactInfo";

export default function MapAndFrom() {
  return (
    <div className="MainBodyTop HerosSection sectionMarginBot">
      <div className="container ContactUSDiv">
        <h1 className="text-center">Find Us At Plant</h1>
        <h3 className="text-center">DMS Express</h3>
        <div className="row align-items-center">
          <MapBox />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
