import React from "react";
import SmalImagBlox from "./smalImagBlox";
import ReactImageMagnify from "react-image-magnify";

export default function ProductImages(props) {
  const frist_img = props.images[0];

  return (
    <div className="col-lg-7 col-md-7 col-sm-7">
      <div className="col-6">
        <div className="fluid__image-container">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: frist_img.url,
              },
              largeImage: {
                src: frist_img.url,
                width: 1200,
                height: 1800,
              },
              shouldUsePositiveSpaceLens: true,
            }}
          />
        </div>
      </div>

      <div className="SmallImg d-flex">
        {props.images.map((item) => {
          <SmalImagBlox key={item.id} smalHref={item.small_image_url} />;
        })}
      </div>
    </div>
  );
}
