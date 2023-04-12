import Link from "next/link";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import classes from './productDetailsAction.module.css';

export default function ProductShare() {
  return (
    <div className={`${classes.productShare}`}>
      <span>Share Link:</span>
      <div className={`${classes.social}`}>
        <FacebookShareButton url={window.location.href}>
          <Link href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </FacebookShareButton>

        <TwitterShareButton url={window.location.href}>
          <Link href="#">
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </TwitterShareButton>
        
        <WhatsappShareButton url={window.location.href}>
          <Link href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
        </WhatsappShareButton>
        
        <LinkedinShareButton url={window.location.href} source={"hello"}>
          <Link href="#">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </LinkedinShareButton>
      </div>
    </div>
  );
}
