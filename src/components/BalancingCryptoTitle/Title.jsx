import React from "react";
import style from "./Title.module.css";

const Title = () => {
    return (
        <div className={style.title_container}>
            <h2 className={style.title_head_txt}>
                <span> Balancings</span> Crypto Markets
            </h2>

            <p className={style.title_middle_txt_container}>
                <span> Our fully automated proprietary quantitative trading software</span>
                <span> provides 24/7 liquidity to 170+ crypto assets across 25+</span>
                <span>centralized spot and derivative crypto exchanges.</span>
            </p>

            <button className={style.title_btn_footer}> GET IN TOUCH</button>
        </div>
    );
};

export default Title;
