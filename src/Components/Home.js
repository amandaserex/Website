import React, { Component } from 'react';
import headshot from "./picsVideos/IMG_7764.jpeg"
import ScrollUpButton from "react-scroll-up-button";
export class Home extends Component {
    render() {      
        return (
            <div>
            <div className="header">
                <h3>Welcome!</h3>
            </div>
            <div className="body-home">
                <ScrollUpButton
                    StopPosition={0}
                    ShowAtPosition={150}
                    AnimationDuration={500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                />
                <img className="homepic" src={headshot} alt="" />
                <p>
                    <span className="tab"></span>Hi! My name is Amanda Serex and I am a fourth year Computer Science major at UCSB. I am from Fremont, California and hope to return to the Bay Area when I graduate. I love taking on problems and finding unique and efficent ways to solve them. I switched my major from Actuarial Science my Sophmore year after the increadibily hard discussion to stop playing colligiate volleyball. I am currently working hard to expand my project portfolio and am now very comfortable with Python, C++, Java, and Kotlin.</p>
            </div >
            </div>

        );
    }
}
export default Home;