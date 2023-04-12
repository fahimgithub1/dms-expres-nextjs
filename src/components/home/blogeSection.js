import SectionWrapper from "@/layouts/sectionWrapper";
import BlogCard from "@/lib/blogCard";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";

export default function BlogeSection() {
  return (
    <SectionWrapper>
        <SectionTitle title="Latest Blogs" />
      <div className="row">
        <div className="col-lg-6">
          <div className="p-2">
            <BlogCard />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="p-2">
            <BlogCard />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="p-2">
            <BlogCard />
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="p-2">
            <BlogCard />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
