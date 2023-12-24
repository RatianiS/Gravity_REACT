import React from "react";
import style from "./header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.header_logo} src="headLogo.png" alt="head logo" />

            <div className={style.header_a_tags_container}>
                <a className={style.header_a_tags} href="">
                    ABOUT US
                </a>
                <a className={style.header_a_tags} href="">
                    OUR SERVICES
                </a>
                <a className={style.header_a_tags} href="">
                    WORK WITH US
                </a>
                <a className={style.header_a_tags} href="">
                    BLOG
                </a>
            </div>

            <div className={style.header_btn_container}>
                <div className={style.header_btn_circle}></div>
                <button className={style.header_btn}>GET IN TOUCH</button>
            </div>
        </header>
    );
};

export default Header;
