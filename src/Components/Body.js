import React, { Component } from 'react';
import Home from './Home'
import Images from './Images'
import Projects from './Projects'
import GuestBook from './GuestBook'
import Movies from './Movies'
import Graph from './graph'
import Courses from './Courses'

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if(activeTab===1){
            return<Home/>
        }
        else if(activeTab===2){
            return<Projects/>
        }
        else if(activeTab===3){
            return<Courses/>
        }
        else if(activeTab===4){
            return<Images/>
        }
        else if(activeTab===5){
            return<GuestBook/>
        }
        else if(activeTab===6){
            return<Movies/>
        }
        else if(activeTab===7){
            return<Graph/>
        }
    }
    render() {
        return (this.displayContent());
    }
}
export default Body;
