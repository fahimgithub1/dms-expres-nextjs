import BlogRightSide from "@/components/blogs/blogRightSide";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";

const TramsAndConditons = [
  {
    id: 1,
    title: "Return Policy",
    text: "DMS Expresshas been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 2,
    title: "Acceptance of our Terms",
    text: "DMS Expresshas been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 3,
    title: "Acceptance of our Terms",
    text: "DMS Expresshas been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 4,
    title: "Acceptance of our Terms",
    text: "DMS Expresshas been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
];

export default function FQAS() {
  return (
    <>
      <HeaderCom title="FQA's" />

      <main>
        <Navber />

        <section className="MainBodyTop HerosSection sectionMarginBot pt-lg-3">
          <div className="container mt-lg-2">
            <div className="row">
              <div className="col-md-8 col-lg-9 AboutUsLeft TermsAndCond">
                <h1 className="text-center mb-3 mb-md-4">FQA's</h1>

                {TramsAndConditons.slice(0, 1).map((item) => (
                  <div className="AboutUsPerDiv" key={item.id}>
                    <p>{item.text}</p>
                  </div>
                ))}

                <div class="accordion AboutUsPerDiv mb-4" id="accordionExample">
                  <h5 className="mb-4">Questions</h5>
                  {TramsAndConditons.map((item) => {
                    const id = "c" + item.id;
                    const target = "#c" + item.id;
                    return (
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={target}
                            aria-expanded="none"
                            aria-controls="collapseOne"
                          >
                            {item.title}
                          </button>
                        </h2>
                        <div
                          id={id}
                          class="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">{item.text}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {TramsAndConditons.slice(2, 5).map((item) => (
                  <div className="AboutUsPerDiv" key={item.id}>
                    <h5>{item.title}</h5>

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
