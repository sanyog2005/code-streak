import "./Product.scss";
import prod from "../../../assets/category/cat-1.png"
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">Parking</span>
            <span className="price">&#8377;49</span>

        </div>
    </div>;
};

export default Product;
