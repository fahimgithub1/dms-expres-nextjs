import BgWrapper from "@/layouts/bgWrapper";
import BodyWrapper from "@/layouts/bodyWrapper";
import Lodding from "@/lib/lodding";
import PagesHeros from "@/lib/pagesHeros";
import ProductCard from "@/lib/productCard";
import { useGetProductsNameQuery } from "@/pages/xCallapi/apiSlices";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const img = "/product-image-search.png";

export default function SearchProductsBody() {
  const router = useRouter();
  const searchInput = router.query.searchData;

  const { data: searchProduct } = useGetProductsNameQuery(searchInput);

  let lodding = true;

  let mainBody = "";
  if (searchProduct != undefined) {
    if (searchProduct.data.length > 0) {
      lodding = false;
      mainBody = (
        <div className="row">
          {searchProduct.data.map((item) => (
            <Fragment key={item.id}>
              {
                <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    images={item.images}
                    name={item.name}
                    price={item.price}
                    disCount={item.cost}
                    sold={item.sold}
                    star={item.reviews.average_rating}
                    img={item.images != null ? item.images[0].url : comimg}
                  />
                  {}
                </div>
              }
            </Fragment>
          ))}
        </div>
      );
    }
  }

  return (
    <BodyWrapper>
      <PagesHeros img={img} />

      <div className="RewardsAndGift">
        <div className="row mt-2 mt-md-3 mt-lg-5">
          <BgWrapper>
            {!lodding && mainBody}
            {(lodding || searchInput === undefined) && <Lodding />}
          </BgWrapper>
        </div>
      </div>
    </BodyWrapper>
  );
}
