import React from "react";
import style from "./ourpartners.module.css";

const Ourpartners = () => {
    return (
        <div className={style.partners_container}>
            <h2 className={style.partners_container_h2}>
                <span>Our Partners</span>
                <span>& Friends</span>
            </h2>

            <img className={style.partners_container_img} src="./partners.png" alt="" />
        </div>
    );
};

export default Ourpartners;
