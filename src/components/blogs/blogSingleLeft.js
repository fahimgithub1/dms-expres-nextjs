import React from "react";

export default function BlogSingleLeft(props) {
  return (
    <div className="col-lg-9 col-md-8 BlogSingle">
      <div>
        <h3>{props.title}</h3>

        <div className="text-center">
          <img
            // src={props.src}
            src="/blog1.jpg"
            alt=""
          />
        </div>

        <p>{props.helight}</p>

        <p>{props.para}</p>
      </div>

      <div>
        <h3>{props.title}</h3>

        <p>{props.helight}</p>

        <p>{props.para}</p>
      </div>
    </div>
  );
}
