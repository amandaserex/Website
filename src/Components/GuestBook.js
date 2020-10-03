import React, { Component } from 'react';
import firebase from '../config'



export class GuestBook extends Component {
    doIt(item){
        if(item.post=="no"){
            return;
        }
        else{
            return <h5> Message: {item.message} </h5>;
        }
    }
    doItAbout(item){
        if(item.description==""){
            return;
        }
        else{
            return <h5>Bio: {item.description}</h5>;
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    componentDidMount() {
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    name: items[item].name,
                    description: items[item].description,
                    message: items[item].message,
                    post: items[item].post,
                    email: items[item].email,
                    day: items[item].day
                });
            }
            this.setState({
                items: newState
            });
        });
    }
    handleSubmit(e) {
        var today = new Date().toLocaleDateString();
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            name: this.state.name,
            description: this.state.description,
            message: this.state.message,
            post: this.state.post,
            email: this.state.email,
            day: this.state.day
        }
        alert('Form was submitted!');
        itemsRef.push(item);
        this.setState({
            name: '',
            description: '',
            message: '',
            post: '',
            email: '',
            day: today
        });
    }
    constructor(props) {
        var today = new Date().toLocaleDateString();
        super(props);
        this.state = {
            name: '',
            description: '',
            message: '',
            post: '',
            email: '',
            day: today,
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {

        return (
            <div className="GuestBook">
                <div className="form">
                    <h1>Please Sign In</h1>
                    <style jsx="true">
                        {`
            input,
            textarea {
              width: 80%;
            }
          `}
                    </style>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">
                            <b>*Your name:</b>
                        </label>
                        <br></br>
                        <input
                            onChange={this.handleChange}
                            value={this.state.name}
                            type="text"
                            placeholder="Name (3-19 characters)"
                            name="name"
                            minLength="3"
                            maxLength="19"
                            required
                        ></input>
                        <br></br>
                        <br></br>
                        <label htmlFor="description">
                            <b>About you:</b>
                        </label>
                        <br></br>

                        <input
                            onChange={this.handleChange}
                            value={this.state.description}
                            type="textarea"
                            placeholder="About you (less than 100 characters)"
                            name="description"
                            maxLength="100"
                        ></input>
                        <br></br>
                        <br></br>
                        <label htmlFor="message">
                            <b>*Message to me:</b>
                        </label>
                        <br></br>
                        <input
                            onChange={this.handleChange}
                            value={this.state.message}
                            type="textarea"
                            placeholder="Message (15-500 characters)"
                            name="message"
                            minLength="15"
                            maxLength="499"
                            required
                        ></input>
                        <br></br>
                        <br></br>
                        <label htmlFor="post">
                            <b>*Make this message viewable to the public?</b>
                        </label>
                        <br></br>
                        <select name="post" onChange={this.handleChange}>
                            <option>Yes/No</option>
                            <option value="yes" >Yes</option>
                            <option value="no" >No</option>
                            required
                    </select>
                        <br></br>
                        <br></br>
                        <label htmlFor="email">
                            <b>Your email:</b>
                        </label>
                        <br></br>
                        <input
                            onChange={this.handleChange}
                            value={this.state.email}
                            type="text"
                            placeholder="Email"
                            name="email"
                        ></input>
                        <br></br>
                        <br></br>
                        
                        <button>Submit</button>
                        
                        
                    </form>
                </div>
                <div className="book">
                    <h1>Other Visitors</h1>
                    <ul>
                        {this.state.items.map((item) => {
                            return (
                                <div className="entry">
                                    <h5>{item.name}    {item.day}</h5>
                                    <p> {this.doItAbout(item)} {this.doIt(item)} </p>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
export default GuestBook;