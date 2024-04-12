import React from "react";

import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                     A website to ensure smart & effective real-time management of local as well as domestic parking slots. Where users can rent their idle parking areas for a given amount of time to those in need & can earn through it(domestic). As well as organizing the street parking slots(local).
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            New Delhi , India
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 9560231025</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: codestreak001@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">commercial parking (4 wheeler)</span>
                    <span className="text">commercial parking (2 wheeler)</span>
                    <span className="text">EV charging </span>
                    <span className="text">rented parking (4 wheeler)</span>
                    <span className="text">rented parking (2 wheeler)</span>
                    
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                  
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us now</span>
                    
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        CODE STREAK
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
