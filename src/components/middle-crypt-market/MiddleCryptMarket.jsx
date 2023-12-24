import React from "react";
import style from "./middle.module.css";

const MiddleCryptMarket = () => {
    return (
        <div className={style.middle_container}>
            <div className={style.middle_head_txt_container}>
                <h2 className={style.middle_head_txt_container_h2}>Crypto Market Making</h2>
                <p className={style.middle_head_txt_container_p}>
                    <span> We are a global crypto liquidity provider and algorithmic market</span>
                    <span> maker. We trade digital assets listed on Centralized Exchanges in</span>
                    <span> over 15 countries worldwide.</span>
                </p>
            </div>

            <div className={style.middle_assets_container}>
                <div className={style.middle_assets_container_1}>
                    <div className={style.middle_assets_container_1_txt_container}>
                        <h2 className={style.middle_assets_container_1_txt_container_h2}>
                            <span>Market Making For</span>
                            <span>Crypto Projects</span>
                        </h2>

                        <p className={style.middle_assets_container_1_txt_container_1p}>
                            <span>Accelerate your token’s journey by</span>
                            <span>boosting its liquidity</span>
                        </p>

                        <p className={style.middle_assets_container_1_txt_container_2p}>
                            <span> We invest in building long-term,</span>
                            <span> sustainable relationships and support our</span>
                            <span>projects in their growth journey with our</span>
                            <span>services, industry expertise and network.</span>
                        </p>
                        <a className={style.middle_assets_container_1_txt_container_atag} href="">
                            Learn more
                        </a>
                    </div>
                    <img
                        className={style.middle_assets_container_1_txt_container_img}
                        src="div.png"
                        alt=""
                    />
                </div>
            </div>

            <div className={style.middle_assets_container}>
                <div className={style.middle_assets_container_1}>
                    <img
                        className={style.middle_assets_container_1_txt_container_img}
                        src="pc.png"
                        alt=""
                    />

                    <div className={style.middle_assets_container_1_txt_container}>
                        <h2 className={style.middle_assets_container_1_txt_container_h2}>
                            <span>Market Making For</span>
                            <span>Crypto Projects</span>
                        </h2>

                        <p className={style.middle_assets_container_1_txt_container_1p}>
                            <span>Accelerate your token’s journey by</span>
                            <span>boosting its liquidity</span>
                        </p>

                        <p className={style.middle_assets_container_1_txt_container_2p}>
                            <span> We invest in building long-term,</span>
                            <span> sustainable relationships and support our</span>
                            <span>projects in their growth journey with our</span>
                            <span>services, industry expertise and network.</span>
                        </p>

                        <a className={style.middle_assets_container_1_txt_container_atag} href="">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleCryptMarket;
