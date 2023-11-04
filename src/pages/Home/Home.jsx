
import Footer from "../../components/Footer/Footer";
import Features from "../../components/Features/Features";
import Faq from "../../components/Faq/Faq";
import Search from "../../components/Search/Search";
import Slider from "../../components/Slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
     <Search></Search>
     <Features></Features>
    
     <Faq></Faq>
     <Footer></Footer>
    </div>
  );
};

export default Home;