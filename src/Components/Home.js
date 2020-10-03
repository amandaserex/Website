import React, { Component } from 'react';
import lake from "./picsVideos/lake.jpeg"
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
                <img className="homepic" src={lake} alt="" />
                <p>
                    <span className="tab"></span>Hi! My name is Amanda Serex and I am a fourth year Computer Science major at UCSB.
                    I love taking on problems and finding unique and efficent ways to solve them. I switched my major from Actuarial Science my sophmore year after the increadibily hard discussion to stop playing colligiate volleyball. I am currently working hard to expand my project portfolio. I am now very comfortable with Python, C++, and Java. I am also learning Kotlin for my App development class for my Android Application. I have a strong math and stats background as well. 
                    <br/> <span className="tab"></span>I am from Fremont, California and hope to return to the Bay Area when I graduate. In my personal life I enjoy going to the beach with my friends and hiking. I am also an avid waterskiier and love spending time at the lake. I played volleyball and swam most of my life and have continued to do both despite no longer being part of an organization. I will never forget the teamwork and leadership skills I learned during those years. </p>
            </div >
            </div>

        );
    }
}
export default Home;