import Banner from "../../components/layout/banner/Banner";
import Header from "../../components/layout/header/Header";
import CategorySellerCards from "./categorysellercards/CategorySellerCards";
import About from "./about/About";
import Words from "./words/Words";
import Commodities from "./commodities/Commodities";
import Explore from "./explore/Explore";
import Trading from "./trading/Trading"
import FingerTips from "./fingertips/FingerTips";
import Footer from "../../components/layout/footer/Footer";
import { FooterDivider } from "../../components/layout/footer/FooterDivider";
import BottomFooter from "../../components/layout/footer/BottomFooter";

function HomePageComponents() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CategorySellerCards />
      <About />
      <Words />
      <Commodities />
      <Explore />
      <Trading />
      <FingerTips />
      <Footer />
      <FooterDivider />
      <BottomFooter />
    </div>
  );
}

export default HomePageComponents;
