import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.jpg";
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>PARK </h1>
                <h1>KING </h1>
                <p>Solving your day to day Parking Problem</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Book Now</div>
                </div>

            </div>
            <img className="banner-img" src={BannerImg} alt=""  />
        </div>
    </div>;
};

export default Banner;
