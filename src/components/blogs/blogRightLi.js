import Link from "next/link";
import React from "react";

export default function BlogRightLi(props) {
  return (
    <li>
      <Link href={`/blog/${props.id}`}>
        <div className="img-box">
          <img src="/blog1.jpg" />
        </div>
        <p className="d-inline px-2">{props.title}</p>
      </Link>
    </li>
  );
}
