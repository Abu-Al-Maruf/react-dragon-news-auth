import AllNews from "../../AllNews/AllNews";
import NewsLeft from "../../NewsLeft/NewsLeft";
import NewsRight from "../../NewsRight/NewsRight";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="p-12">
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-14">
        <div>
          <NewsLeft></NewsLeft>
        </div>
        <div className="md:col-span-2">
          <AllNews></AllNews>
        </div>
        <div>
          <NewsRight></NewsRight>
        </div>
      </div>
    </div>
  );
};

export default Home;
