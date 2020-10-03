import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import three from "./picsVideos/MealPlannerIcon.png"


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
                <p>This is a planner for your daily week. It includes a week layout that allows you to add your own meals or find them from the API used in the Search For Recipes tab. You can also add ingredients to your shopping list from the planner or manually. I created this website along with three groupmates in my CS48 class during Spring 2019. We used React, Node.js, the Edamame API, and MongoDB. </p>
                </div>
            </div>

        );
    }
}
export default Projects;