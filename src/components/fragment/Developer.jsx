import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar3.png";
import {GitHub, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Shourya Gupta</h3>
                        <p>Full Stack developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science and Engineering Student at Techno International Newtown, West Bengal.</p>
                    <p>Graduating in 2024 and looking for a responsible position to gain practical knowledge</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <p>And a very athletic person with one of my favourite being volleyball.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://github.com/ShouryaBrahmastra"} title={"ShouryaBrahmastra"}>
                            <GitHub/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/Shourya_Nishi"}  title={"Shourya_Nishi"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/shourya-gupta-12911721b/"}  title={"ShouryaGupta-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/shouryagupta2002/"}  title={"shouryagupta2002"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"http://www.shouryagupta.co/"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;