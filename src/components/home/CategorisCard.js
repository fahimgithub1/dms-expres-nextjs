import Link from "next/link";
import React from "react";
import classes from "./categorisSection.module.css"

export default function CategorisCard(props) {
  const categoiesID = props.slug
  return (
    <div className={`${classes.caragorisCard} text-center`}>
      <Link href={`/categories/${categoiesID}`} className="d-block text-center">
        <img src={props.img} alt="" />
        <p>{props.name}</p>
      </Link>
    </div>
  );
}
