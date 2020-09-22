import React, { Component } from 'react';
import './App.css'
import Body from './Components/Body'
import TabList from './Components/TabList'
import firebase from './config'

export class App extends Component {
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
  }
  
  this.changeTab = (id) => {
  this.setState({
    activeTab: id
  })
}
}
render() {
  const tabs = [
    {
      id: 1,
      title: 'Home',
    },
    {
      id: 2,
      title: 'Images',
    },
    {
      id: 4,
      title: 'Projects',
    },
    {
      id: 5,
      title: 'Guest Book',
    },
    {
      id:6,
      title: 'Movies'
    },
    {
      id:7,
      title: 'Movie Graph'
    }
  ]
  return (
    <div className="body">
      <div className="Header">
        <h1>Amanda Serex's Portfolio</h1>
      </div>
      <div className="nav-bar">
        <TabList tabs={tabs}
          changeTab={this.changeTab}
          activeTab={this.state.activeTab} />
      </div>
      <div className="main-body">
        <Body activeTab={this.state.activeTab} />
      </div>
    </div>
  );
}
}
export default App;
