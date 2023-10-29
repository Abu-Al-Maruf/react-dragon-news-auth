import { useEffect, useState } from "react";
import News from "./News/News";

const AllNews = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setAllNews(data))
    }, [])



    return (
        <div className="mr-5">
            <h2 className="text-xl font-semibold text-[#403F3F]">Dragon News Home</h2>
            {
                allNews.map((news) => <News key={news._id} news={news}></News>)
            }
        </div>
    );
};

export default AllNews;