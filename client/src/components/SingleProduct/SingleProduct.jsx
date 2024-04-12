import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/category/cat-1.png"
import "./SingleProduct.scss";
const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="" />
                </div>
                <div className="right">
                    <span className="name">parking name</span>
                    <span className="price">&#8377;49</span>
                    <span className="desc">address</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span >-</span>
                            <span>4</span>
                            <span >+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20} />
                            BOOK PARKING
                        </button>

                    </div>
                    <span className="divider" />
                    <div className="info-item">
                        <span className="text-bold">
                            CATEGORY:
                            <span>commercial parking (4 W)</span>
                        </span>
                        <span className="text-bold">
                            SHARE:
                            <span className="social-icons">
                            <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />

                            </span>
                        </span>


                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
