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
                <img style={{
                    resizeMode: "contain",
                    height: 400,

                }}
                    src={lake} alt="" />
                <p>
                    Hi! My name is Amanda Serex and I am a third year Computer Science student at UCSB.
                    I love taking on problems and finding unique and efficent ways to solve them. I
                    have been playing sports my whole life so I am a strong team player and spend
                    a lot of time outside. I love to spend time at the beach with friends, going water
                    skiing and hiking. I am currently working hard to expand my project portfolio as well.
            </p>
            </div >
            </div>

        );
    }
}
export default Home;