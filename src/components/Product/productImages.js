import React, { useState } from "react";
import classes from "./productImages.module.css";

export default function ProductImages(props) {
  const [limit, setLimit] = useState(2);
  const [isShoeAllImages, setIsShoeAllImages] = useState(false);
  var isShowSeeMore = true;

  if (limit >= props.images.length) {
    isShowSeeMore = false;
  }

  const showAllImages = () => {
    if(!isShoeAllImages){
      setIsShoeAllImages(true);
    }else{
      setIsShoeAllImages(false);
    }
  };

  return (
    <div className="col-lg-7 col-md-12 col-sm-7">
      <div className="row">
        {props.images.slice(0, limit).map((item, index) => (
          <div className={`col-6 mb-3 ${classes.mainImage}`} key={index}>
            <img src={item.url} />

            <div className={`${classes.zoomDIv}`} onClick={showAllImages}>
              <i class="fa fa-light fa-magnifying-glass-plus"></i>
            </div>
          </div>
        ))}
      </div>

      {isShowSeeMore && (
        <button
          className={`${classes.seeMore}`}
          onClick={() => {
            setLimit(limit + 2);
          }}
        >
          See More
          <i class="fa-solid fa-chevron-down ps-2"></i>
        </button>
      )}

      {isShoeAllImages && (
        <div className={classes.allImages}>
          <div className="d-flex justify-content-end">
            <i class="fa-solid fa-xmark" onClick={showAllImages}></i>
          </div>
          {props.images.slice(0, limit).map((item, index) => (
            <img src={item.url} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
