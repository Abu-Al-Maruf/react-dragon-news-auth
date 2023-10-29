import PropTypes from "prop-types";
import { FaBookmark, FaShare } from "react-icons/fa";
const News = ({ news }) => {
  console.log(news);
  return (
    <div className="border rounded-md mt-5">
      <div className="bg-[#F3F3F3] flex items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <img className="w-10 rounded-full" src={news?.author?.img} alt="" />
          <div>
            <h1>{news?.author?.name}</h1>
            <span>{news?.author?.published_date}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 cursor-pointer text-gray-500">
          <FaBookmark></FaBookmark>
          <FaShare></FaShare>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-[#403F3F] text-xl font-bold">{news?.title}</h2>
        <img className="mt-6 rounded-md" src={news?.image_url} alt="" />
        <p className="text-[#706F6F] mt-10">{news?.details}</p>
        <a className="text-orange-600 font-semibold" href="#">Read More</a>
      </div>
    </div>
  );
};

News.propTypes = {
  news: PropTypes.array,
};
export default News;
