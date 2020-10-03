import React, { Component } from 'react';
import Pictures from "./Pictures";
import SimpleReactLightbox from "simple-react-lightbox";
import ScrollUpButton from "react-scroll-up-button";



export class Images extends Component {
    render() {
        return (
            <div>
            <div className="header">
                <h3>I love to take photos!</h3>
            </div>
            <div className="body-images">
                <ScrollUpButton
                    StopPosition={0}
                    ShowAtPosition={150}
                    AnimationDuration={500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                />
                <SimpleReactLightbox>
                    <Pictures />
                </SimpleReactLightbox>
            </div>
            </div>

        );
    }
}
export default Images;