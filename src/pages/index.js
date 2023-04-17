import Categoris from "@/components/home/categoris";
import DailyProduct from "@/components/home/dailyProduct";
import Heros from "@/components/home/heros";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import HeaderCom from "../lib/header";
import ThreeDeals from "@/components/home/threeDeals";
import SelectedProduct from "@/components/home/selectedProduct";
import PaymentOffer from "@/components/home/paymentOffer";
import BlogeSection from "@/components/home/blogeSection";

export default function Home() {
  return (
    <>
      <HeaderCom title="Ovendar Shopping Site" />
      <main>
        <Navber />
        <Heros />
        <ThreeDeals />
        <Categoris /> 
        <SelectedProduct />
        <DailyProduct />
        <BlogeSection />
        <PaymentOffer />
        <Footer />
      </main>
    </>
  );
}
