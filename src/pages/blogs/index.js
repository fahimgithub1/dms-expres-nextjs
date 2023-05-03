import BlogLeftSide from "@/components/blogs/blogLeftSide";
import BlogRightSide from "@/components/blogs/blogRightSide";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";

export default function BlogList() {
  return (
    <>
      <HeaderCom title="Blogs" />

      <main>
        <Navber />

        <section className="MainBodyTop HerosSection sectionMarginBot pt-md-3 pt-lg-4">
          <div className="container mt-lg-2">
            <div className="row">
              <BlogLeftSide />
              <BlogRightSide />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
