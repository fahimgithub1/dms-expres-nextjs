import SectionWrapper from "@/layouts/sectionWrapper";
import Lodding from "@/lib/lodding";
import ProductCard from "@/lib/productCard";
import SectionTitle from "@/lib/sectionTitle";
import { useGetAllProductsQuery } from "@/pages/api/apiSlices";
import React, { useState } from "react";

let comimg = require("../../../public/images/prduct.jpg")


export default function DailyProduct() {
  const [limit, setLimit] = useState(4);
  const { data: productInfo, isLoading, error } = useGetAllProductsQuery();
  var totalProduct = null

  const handleLimit = () => {
    setLimit(limit + 12);
  };

  let productDiv = ''
  if (productInfo !== undefined) {
    totalProduct = productInfo.data.length
    productDiv = productInfo.data.slice(0, limit).map((item) => (
      <div className="col-6 col-md-3 col-sm-4 w-20" key={item.id}>
        <ProductCard
          key={item.id}
          id={item.id}
          images={item.images}
          name={item.name}
          price={item.price}
          disCount={item.cost}
          sold={item.sold}
          star={item.reviews.average_rating}
          img={item.images != null?item.images[0].url: comimg}
        />
      </div>
    ));
  }

  return (
    <SectionWrapper>
      <SectionTitle title="You may like" />

      <div className="row">
        {productDiv}

        {error && <p>data not found !!</p>}
        {isLoading && <Lodding />}
      </div>

      <div className="DailyDiscovBTn">
        { (limit < totalProduct) && <button onClick={handleLimit}>See More</button>}
      </div>
    </SectionWrapper>
  );
}
