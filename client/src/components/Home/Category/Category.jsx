import { useNavigate } from "react-router-dom";
import "./Category.scss";
import cat1 from "../../../assets/category/cat-1 .jpg"
import cat2 from "../../../assets/category/cat-2.jpg"
import cat3 from "../../../assets/category/cat-3.jpg"
import cat4 from "../../../assets/category/cat-4.jpg"

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat1} alt=""  />
                    
                </div>
                <div className="category">
                    <img src={cat2} alt="" />
                </div>
                <div className="category">
                    <img src={cat3} alt="" />
                </div>
                <div className="category">
                    <img src={cat4} alt="" />
                </div>
            </div>
        </div>
    );
};
//import

export default Category;