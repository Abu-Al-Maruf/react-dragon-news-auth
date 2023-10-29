import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NewsLeft = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])


    return (
        <div className="sticky top-10">
            <h2 className="text-xl font-semibold text-[#403F3F]">All Caterogy</h2>
            {
                categories.map((category) => <NavLink className="block text-[#9F9F9F] text-lg font-medium mt-7" to={`/category/${category.id}`} key={category.id}>{category.name}</NavLink> )
            }
        </div>

    );
};

export default NewsLeft;