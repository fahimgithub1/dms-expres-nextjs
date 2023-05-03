import React from "react";
import BlogRightLi from "./blogRightLi";
import Link from "next/link";

const blogNews = [
  {
    id: 1,
    icon: "fa-solid fa-envelope update_news_icon",
    title: "Objectively communicate business core",
  },
  {
    id: 2,
    icon: "fa-solid fa-globe update_news_icon",
    title: "Objectively communicate business core",
  },
  {
    id: 3,
    icon: "fa-solid fa-film update_news_icon",
    title: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 4,
    icon: "fa-solid fa-bullhorn update_news_icon",
    title: "Minimalist Chandelier",
  },
];

export default function BlogRightSide() {
  return (
    <div className="col-lg-3 col-md-4 ">
      <div className="RecentBlog">
        <h3>Oure Recent Blog Post</h3>
        <ul>
          {blogNews.map((item) => (
            <BlogRightLi
              key={item.id}
              id={item.id}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>

      <div className="RecentBlog">
        <h3>Oure Recent Update News</h3>
        <ul>
          {blogNews.map((item, index) => (
            <li key={index}>
              <Link href={`/blog/${item.id}`}>
                <i className={`${item.icon}`}></i>
                <p className="d-inline px-2">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="RecentBlog">
        <h3>Our Dedicated Services</h3>
        <ul>
          {blogNews.map((item, index) => (
            <li key={index}>
              <Link href={`/blog/${item.id}`}>
                <i className={`${item.icon}`}></i>
                <p className="d-inline px-2">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
