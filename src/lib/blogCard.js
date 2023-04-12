import React from "react";
import classes from "./blogCard.module.css";
import Link from "next/link";

export default function BlogCard() {
  return (
    <div className={`row ${classes.blogCard}`}>
      <div className={`col-8`}>
        <Link href="">
          <h4>
            360-degree video: How Microsoft deployed a datacenter to the bottom
            of the ocean
          </h4>
        </Link>

        <p>
          360-degree video: How Microsoft deployed a datacenter to the bottom of
          the ocean360-degree video: How Microsoft deployed a datacenter to the
          bottom of the ocean
        </p>

        <Link href="" className={`${classes.bolgBtn}`}>
          Read More
        </Link>
      </div>
      
      <div className={`col-4 ${classes.imageBox}`}>
        <Link href=''>
          <img src="/blog1.webp" />
        </Link>
      </div>
    </div>
  );
}
