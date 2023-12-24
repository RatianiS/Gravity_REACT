import React from "react";
import "./jointeam.css";

const Jointeam = () => {
    return (
        <div className="jointeam-container">
            <h2 className="jointeam-container-h2">
                <span>Join</span>
                <span>Gravity Team</span>
            </h2>
            <div className="jointeam-container-p-container">
                <p className="jointeam-container-p-container-p">
                    <span> Join our community of innovators, problem solvers and</span>
                    <span>owners who apply scientific discovery techniques to</span>
                    <span>make crypto markets a better place for everyone.</span>
                </p>

                <p className="jointeam-container-p-container-p">
                    <span> As we emphasize it in our name – Gravity Team, we are</span>
                    <span> a team. A team of bright, talented people, each masters</span>
                    <span> of their specialty, curious about the world and eager to </span>
                    <span> solve the new exciting cryptocurrency market problems,</span>
                    <span> build cool stuff and have fun whilst doing so!</span>
                </p>
                <a className="jointeam-container-p-container-a" href="">
                    Learn more about working with us
                </a>
            </div>
        </div>
    );
};

export default Jointeam;
