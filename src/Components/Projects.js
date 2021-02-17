import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import three from "./picsVideos/MealPlannerIcon.png"
import graphs from "./picsVideos/Graphs.png"
import geopics from "./picsVideos/GeoPics.jpg"

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
                <h3> Projects </h3>
                <div className="individual">
                <a className = "ProjectName" target="_blank" href="https://cs48-s20-s3-t2-prod.herokuapp.com/" >Meal Planner</a>
                <a href="https://cs48-s20-s3-t2-prod.herokuapp.com/" target="_blank"><img src={three} className="icon" alt="" /></a>
                <p>This is a meal prep site created using React in a team setting. The site includes a search from a recipe API and stores information in MongoDB that is displayed in a weekly calendar. Each entry has its recipe and ingredients linked to it that can be directly added to the shopping cart.</p>
                </div>
                <a className = "ProjectName" target="_blank" href="https://github.com/amandaserex/photo-categorization" >Photo Categorization</a>
                <a href="https://github.com/amandaserex/photo-categorization" target="_blank"><img src={graphs} className="icon" alt="" /></a>
                <p>This project was my final project for CS165B in Summer 2020. The code identifies pictures by using SIFT features and then using a classifier to identify what photo category it is.</p>
                <a className = "ProjectName" target="_blank" href="https://github.com/amandaserex/GeoPics" >Google Maps Photo Forum</a>
                <a href="https://github.com/amandaserex/GeoPics" target="_blank"><img src={geopics} className="iconGeoPic" alt="" /></a>
                <p>Social media forum using the Google Maps API that allows images and captions to be posted on the map and gives users the ability to like them. </p>
            </div>

        );
    }
}
export default Projects;