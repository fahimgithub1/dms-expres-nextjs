import Link from "next/link";
import React from "react";

export default function BlogCard(props) {
  return (
    <div className="col-lg-6">
      {/* <Link href={`/blog/${props.id}`}> */}
      <div className="BlogCard">
        <Link href={`/blog/${props.id}`}>
          <h4>{props.title}</h4>
        </Link>

        <ul>
          <li>
            <i className="fa-solid fa-user"></i>
            <span>Nasir</span>
          </li>

          <li>
            <i className="fa-solid fa-clock"></i>
            <span>January 19, 2022</span>
          </li>

          <li>
            <i className="fa-solid fa-briefcase"></i>
            <span> App Development</span>
          </li>
        </ul>

        <Link href={`/blog/${props.id}`}>
          <div className="ImageBox">
            <img
              // src={props.img}
              src="/blog1.jpg"
              alt=""
            />
          </div>
        </Link>

        <p>
          Freelancing Is A Good Way To Earn Extra Money If You Are Looking For
          Part-Time Income. If You Have The Skills And Are Willing To Work Hard,
          This Opportunity Might Be Right For You.
        </p>

        <Link className="Btn" href={`/blog/${props.id}`}>Read More</Link>
      </div>
      {/* </Link> */}
    </div>
  );
}
