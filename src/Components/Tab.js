import React, { Component } from 'react';

export class Tab extends Component {
    addStyling = () => {
        if(this.props.tab.id === this.props.activeTab){
            return {backgroundColor:'gray'}
        }
        else{
            return {backgroundColor:'lightgray'}
        }
    }
    render() {
        return(
            <div className='tab'
            style={this.addStyling()}
            onClick={this.props.changeTab.bind(this, this.props.tab.id)}>
                <h4>{this.props.tab.title}</h4>
            </div>
        );
    }
}
export default Tab;
