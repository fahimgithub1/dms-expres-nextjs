import Link from "next/link";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    // <footer classNameName="bgPadding mb-5 mb-lg-0">
    //   <div classNameName="container">
    //     <div classNameName="row">
    //       <div classNameName="col-lg-4 col-md-4">
    //         <h4>Customer Care</h4>

    //         <ul>
    //           <li>
    //             <Link href="/tramsAndConditon">How to Shop</Link>
    //           </li>
    //           <li>
    //             <Link href="/tramsAndConditon">Returns and Refunds</Link>
    //           </li>
    //           <li>
    //             <Link href="/contactus">Contact Us</Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div classNameName="col-lg-4 col-md-4">
    //         <h4>Ovendar</h4>

    //         <ul>
    //           <li>
    //             <Link href="/aboutUs">About Ovenar</Link>
    //           </li>
    //           <li>
    //             <Link href="/tramsAndConditon">Terms & Conditions</Link>
    //           </li>
    //           <li>
    //             <Link href="/privacyPolicy">Privacy Policy</Link>
    //           </li>
    //           <li>
    //             <Link href="/blogs">Ovendar Blog</Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div classNameName="col-lg-4 col-md-4">
    //         <h4>Follow Us</h4>

    //         <div classNameName="ContactDiv">
    //           <div classNameName="SocialIocn">
    //             <ul>
    //               <li>
    //                 <Link href="#" classNameName="facbookNav">
    //                   <i classNameName="fa-brands fa-facebook-f"></i>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="#" classNameName="tuitterNav">
    //                   <i classNameName="fa-brands fa-twitter"></i>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="#" classNameName="Youtube">
    //                   <i classNameName="fa-brands fa-youtube"></i>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="#" classNameName="Youtube">
    //                   <i classNameName="fa-brands fa-instagram"></i>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="#" classNameName="facbookNav">
    //                   <i classNameName="fa-brands fa-linkedin-in"></i>
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div>
    //     <img src="/images/payment.png" alt="Ovender Logo" />
    //   </div>

    //   <div classNameName="copWrite">
    //     <p classNameName="text-center">
    //       ©2022 Ovendar. All Rights Reserved. | Design & Development By:-
    //       Digital Marketing Solution (Pvt.) Ltd.
    //     </p>
    //   </div>
    // </footer>
    <footer className={`${classes.footer}`}>
      <div className={`container ${classes.BgPadding}`}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>services</h3>

            <ul>
              <li>
                <Link href="#">Faq</Link>
              </li>
              <li>
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/OrderTraking">Track Order</Link>
              </li>
              <li>
                <Link href="#">Return Policy</Link>
              </li>
              <li>
                <Link href="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/privacyPolicy">Terms and Condition</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>Information</h3>

            <ul>
              <li>
                <Link href="/howToShop">How To Order</Link>
              </li>
              <li>
                <Link href="#">Safe Payments</Link>
              </li>
              <li>
                <Link href="#">Why choose us</Link>
              </li>
              <li>
                <Link href="#">Our Documents</Link>
              </li>
              <li>
                <Link href="#">Product Delivery</Link>
              </li>
              <li>
                <Link href="#">Trade License: 00831</Link>
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
                    Baitus Sharif Mosjid Road, Cox's Bazar Sadar, Cox's Bazar,
                    Cox's Bazar Sadar , District: Cox's Bazar, Division:
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
                  Certificate of Incorporation: CH-14776/2022 CONNECT WITH US
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
          Copyright © DMS Exptess Australia All rights reserved. Developed By Memo
          Australia IT Team.
        </p>
      </div>
    </footer>
  );
}
