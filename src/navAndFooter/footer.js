import Link from "next/link";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`${classes.footer}`}>
      <div className={`container ${classes.BgPadding}`}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>Pages</h3>

            <ul>
              <li>
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/contactUs">Contact Us</Link>
              </li>
              <li>
                <Link href="returnPolicy">Return Policy</Link>
              </li>
              <li>
                <Link href="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/tramsAndConditon">Terms and Condition</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>Information</h3>

            <ul>
              <li>
                <Link href="/FQAs">Faq</Link>
              </li>
              <li>
                <Link href="/OrderTraking">Track Order</Link>
              </li>
              <li>
                <Link href="/howToOrder">How To Order</Link>
              </li>
              {/* <li>
                <Link href="#">Safe Payments</Link>
              </li>
              <li>
                <Link href="#">Our Documents</Link>
              </li> */}
              <li>
                <Link href="/productDelivery">Product Delivery</Link>
              </li>
              <li>
                <a>Trade License: 00831</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>Contact us</h3>

            <ul>
              <li>
                <Link href="#">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <span>
                    Baitus Sharif Mosjid Road,
                    Cox's Bazar Sadar , Cox's Bazar,
                    Chattogram
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-phone"></i>
                  <span>01731099824</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-solid fa-envelope"></i>
                  <span>admin@memocosmetica.com</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Certificate: CH-14776/2022
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>Social links</h3>

            <ul className={`${classes.solcilaLink}`}>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${classes.CopyWrite}`}>
        <p>
          Copyright © DMS Exptess Australia All rights reserved. Developed By
          DMS IT Team.
        </p>
      </div>
    </footer>
  );
}
