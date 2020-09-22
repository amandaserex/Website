import React, { Component } from 'react';
import Modal from 'react-widget-modal';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';



export class Light extends Component {
  constructor(){
    super();
    this.state={visible:false};
  }
  componentDidMount() {
    this.setState({
      visible: false
    });
  }
   showModal = () => {
    this.setState({
      visible: true,
    });
  };
  
   handleOk = (e) =>{
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  
   handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  
  render() {

    console.log("using light");
    return (
      <div>
        <a onClick={this.showModal} ><img className="m" src={this.state.poster} alt={["Title: " + this.state.title + " | Rating: " + this.state.rating + " | Director: " + this.state.director + " | Actors: " + this.state.actors]} /></a>
        <Modal
        className="modal"
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Display</p>
          
        </Modal>
      </div>
    );
  }
}



export default Light;