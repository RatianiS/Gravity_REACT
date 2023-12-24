import React from "react";
import style from "./stats.module.css";

const Stats = () => {
    return (
        <div className={style.stats_container}>
            <div className={style.Stats_head_titles}>
                <h2 className={style.Stats_head_titles_h2}>About Gravity Team</h2>

                <p className={style.Stats_head_titles_p}>
                    <span> At Gravity Team, we are on the mission to balance the supply</span>
                    <span> and demand across crypto markets worldwide. We are a crypto</span>
                    <span> native market maker founded by traders, developers, and </span>
                    <span>innovators who are strong believers and supporters of the future</span>
                    <span> of decentralization and digital assets.</span>
                </p>
            </div>

            <div className={style.stats_grid_container}>
                <div className={style.stats_grid_container_items}>
                    <p className={style.stats_grid_container_items_p}>~$100 billion</p>
                    <p className={style.stats_grid_container_items_2p}>
                        <span>cumulative trading</span>
                        <span>volume to date</span>
                    </p>
                </div>

                <div
                    style={{
                        backgroundImage: "linear-gradient(#665dcd, #5fa4e6, #d2ab67)",
                        borderRadius: "5px",
                    }}
                    className={style.stats_grid_container_items}
                >
                    <p className={style.stats_grid_container_items_p}>0.8%</p>
                    <p className={style.stats_grid_container_items_2p}>
                        <span>of the global crypto</span>
                        <span>spot trading volume</span>
                    </p>
                </div>
                <div className={style.stats_grid_container_items}>
                    <p className={style.stats_grid_container_items_p}>~30</p>
                    <p className={style.stats_grid_container_items_2p}>
                        <span>Gravity Teammates</span>
                        <span>(& growing)</span>
                    </p>
                </div>
                <div className={style.stats_grid_container_items}>
                    <p className={style.stats_grid_container_items_p}>25+</p>
                    <p className={style.stats_grid_container_items_2p}>
                        <span>leading global and </span>
                        <span>local crypto exchanges</span>
                    </p>
                </div>
                <div className={style.stats_grid_container_items}>
                    <p className={style.stats_grid_container_items_p}>2017</p>
                    <p className={style.stats_grid_container_items_2p}>start, cripto-natives</p>
                </div>
                <div className={style.stats_grid_container_items}>
                    <p className={style.stats_grid_container_items_p}>1,200+</p>
                    <p className={style.stats_grid_container_items_2p}>crypto-asset pairs</p>
                </div>
                <div className={style.stats_grid_container_items}>
                    <p className={style.stats_grid_container_items_p}>24/7</p>
                    <p className={style.stats_grid_container_items_2p}>liquidity</p>
                </div>
                <div className={style.stats_grid_container_items}>
                    <p className={style.stats_grid_container_items_p}>5 billion+</p>
                    <p className={style.stats_grid_container_items_2p}>trades done to date</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
