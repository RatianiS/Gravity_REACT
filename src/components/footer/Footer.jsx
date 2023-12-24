import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-container-pANDa-container">
                <p className="footer-container-pANDa-container-p">GRAVITY TEAM</p>
                <a className="footer-container-pANDa-container-a" href="">
                    About Us
                </a>
                <a className="footer-container-pANDa-container-a" href="">
                    Work With Us
                </a>
            </div>

            <div className="footer-img-container">
                <img className="footer-container-img" src="headLogo.png" alt="" />
                <p>©2022 Gravity Team. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
