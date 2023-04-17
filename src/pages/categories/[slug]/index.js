import MainBody from "@/components/categories/mainBody";
import PaymentOffer from "@/components/home/paymentOffer";
import SectionWrapper from "@/layouts/sectionWrapper";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import { useGetAllCategorisQuery } from "@/pages/xCallapi/apiSlices";
import { useRouter } from "next/router";
import React from "react";

export default function Categories() {
  const router = useRouter();
  const slug = router.query.slug;

  let categori = "";

  const { data: Catagoris } = useGetAllCategorisQuery();

  if (Catagoris !== undefined) {
    Catagoris.data.map((item) => {
      if (item.slug === slug) {
        return (categori = item);
      }
    });
  }

  const productParameters = {
    categoriName: categori.name,
    categorID: categori.id,
  };

  return (
    <>
      <HeaderCom title={`Categorie ${slug}`} />

      <main>
        <Navber />
        <SectionWrapper sectionClass="MainBodyTop HerosSection">
          <MainBody productParameters={productParameters} categori={categori} />
        </SectionWrapper>
        <PaymentOffer />
        <Footer />
      </main>
    </>
  );
}
