import BlogRightSide from "@/components/blogs/blogRightSide";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";

const TramsAndConditons = [
  {
    id: 1,
    title: "Product Dalivary Deatils",
    list: [],
    text: "DMS Expresshas been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 2,
    list: [
      {
        id: 1,
        text: "Find your desired product from our Daraz website or App.",
      },
      {
        id: 2,
        text: "From the product page click on Buy Now if you just want a single product to order",
      },
      {
        id: 3,
        text: "Click on Add To Cart if you want to add more products to the cart.",
      },
      {
        id: 4,
        text: "After adding all of your desired products in Cart > Go to the cart > select the products you want to order.",
      },
      {
        id: 5,
        text: "Click on the “Proceed to Checkout” button",
      },
      {
        id: 6,
        text: "Choose your preferred delivery method (Home Delivery/Collection Point) & use coupon voucher code if you have any.",
      },
      {
        id: 7,
        text: "To proceed for payment click on the “Proceed to Pay” button > Select a payment option before clicking the Confirm order",
      },
    ],
    title: "Acceptance of our Terms",
    text: "DMS Expresshas been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 3,
    id: 2,
    list: [],
    title: "Acceptance of our Terms",
    text: "DMS Expresshas been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 4,
    id: 2,
    list: [],
    title: "Acceptance of our Terms",
    text: "DMS Expresshas been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
];

export default function ProductDelivery() {
  return (
    <>
      <HeaderCom title="Product Delivery" />

      <main>
        <Navber />
        <section className="MainBodyTop HerosSection sectionMarginBot pt-lg-3">
          <div className="container mt-lg-2">
            <div className="row">
              <div className="col-md-8 col-lg-9 AboutUsLeft TermsAndCond">
                {TramsAndConditons.map((item) => (
                  <div className="AboutUsPerDiv" key={item.id}>
                    <h5>{item.title}</h5>
                    {item.list.length > 0 && (
                      <ul className="list">
                        {item.list.map((item2) => (
                          <li key={item2.id}>
                            <i className="fa fa-check"></i> {item2.text}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <BlogRightSide />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
