import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import three from "./picsVideos/download.png"
import two from "./picsVideos/download-1.png"
import one from "./picsVideos/download-2.png"


export class Projects extends Component {
    render() {
        return (
            <div className="body-projects">
                <ScrollUpButton
                    StopPosition={0}
                    ShowAtPosition={150}
                    AnimationDuration={500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                />
                <h3>  A few of my favorite projects.</h3>
                <div className="individual">
                <a href="https://cs48-s20-s3-t2-prod.herokuapp.com/"><img src={three} className="pic" alt="" /></a>
                <a href="https://cs48-s20-s3-t2-prod.herokuapp.com/" >Meal Planner</a>
                </div>
                <div className="individual">
                <a href="https://github.com/amandaserex/cs130a-pa2" ><img src={one} className="pic" alt="" /></a>
                <a href="https://github.com/amandaserex/cs130a-pa2" >Quash Lab - CS130a</a>
                </div>
                <div className="individual">
                <a href="https://github.com/amandaserex/cs64-lab4" ><img src={two} className="pic" alt="" /></a>
                <a href="https://github.com/amandaserex/cs64-lab4" >MIPS Usage</a>
                </div>
            </div>

        );
    }
}
export default Projects;