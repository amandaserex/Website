import React, { Component } from 'react';
import firebase from '../config'
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";


const options = {
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '5px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: true,
    showFullscreenButton: true,
    showNextButton: false,
    showPrevButton: false,
    size: '40px'
  },
  thumbnails: {
    showThumbnails: false
  },
  settings: {
    disableKeyboardControls: true,
    disableWheelControls: true,
  }
}

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movieID: '',
      title: '',
      poster: '',
      director: '',
      rating: '',
      items: [],
      actors: [],
      page: 'movies',
      number: 8,
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    var myPage = this.state.page;
    const itemsRef = firebase.database().ref(myPage);
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          movieID: items[item].movieID,
          title: items[item].title,
          poster: items[item].poster,
          director: items[item].director,
          rating: items[item].rating,
          actors: items[item].actors
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  newList = (e) => {
    this.setState({
      page: e.target.value
    });
    var myPage = e.target.value;
    const itemsRef = firebase.database().ref(myPage);
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          movieID: items[item].movieID,
          title: items[item].title,
          poster: items[item].poster,
          director: items[item].director,
          rating: items[item].rating,
          actors: items[item].actors
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  searchTitle = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value
    });
    var myPage = this.state.page;
    const itemsRef = firebase.database().ref(myPage);
    itemsRef.orderByChild("title").equalTo(this.state.search).once('value', snapshot => {
      let items = snapshot.val();
      if (snapshot.exists()) {
        let newState = [];
        for (let item in items) {
          newState.push({
            id: item,
            movieID: items[item].movieID,
            title: items[item].title,
            poster: items[item].poster,
            director: items[item].director,
            rating: items[item].rating,
            actors: items[item].actors
          });
        }
        this.setState({
          items: newState,
          search: '',
          page:''
        });
      }
      else {
        alert("Does not include " + this.state.search);
        this.setState({
          search: '',
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var myPage = this.state.page;
    const itemsRef = firebase.database().ref(myPage);
    const itemsAll = firebase.database().ref('movies');
    let one = "https://www.omdbapi.com/?apikey=49f0efe2&i=" + this.state.movieID;
    const requestOne = axios.get(one);
    axios.all([requestOne]).then(axios.spread((...responses) => {
      if (requestOne == "False") {
        alert("Not a valid ID")
      }
      else {
        itemsRef.orderByChild("movieID").equalTo(this.state.movieID).once('value', snapshot => {
          if (snapshot.exists()) {
            alert("Movie already added!")
          }
          else {

            const thing = {
              movieID: this.state.movieID,
              title: responses[0].data.Title,
              poster: responses[0].data.Poster,
              director: responses[0].data.Director,
              rating: responses[0].data.imdbRating,
              actors: responses[0].data.Actors
            }
            console.log(thing)
            if ("movies" != myPage) {
              itemsAll.orderByChild("movieID").equalTo(this.state.movieID).once('value', snapshot => {
                if (!snapshot.exists()) {
                  itemsAll.push(thing);
                }
              });
            }
            itemsRef.push(thing);
            this.setState({
              movieID: '',
          });
            alert("Movie added!")
          }
        });
      }
    }));

  }


  render() {

    return (
      <div className="movies" >
        <div>
          <h1>Movies</h1>
          <div className="forms">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="movie">
                <b>Add Movie by ID</b>
              </label>
              <br></br>
              <input
                onChange={this.handleChange}
                value={this.state.movieID}
                type="text"
                name="movieID"
                placeholder="Movie ID"
                required
              />
              <br></br>
              <br></br>
              <button>Add</button>
            </form>
            <form className="titleSearch" onSubmit={this.searchTitle}>
              <label htmlFor="TitleSearch">
                <b>Search by Title</b>
              </label>
              <br></br>
              <input
                onChange={this.handleChange}
                value={this.state.search}
                type="text"
                name="search"
                placeholder="Movie Title"
                required
              />
              <br></br>
              <br></br>
              <button>Search</button>
            </form>
            <form className="titleSearch">
              <label htmlFor="lists">
                <b>Lists</b>
              </label>
              <br></br>
              <select name="page" onChange={this.newList}>
                <option value="movies" >All</option>
                <option value="wannaWatch" >Wanna Watch</option>
                <option value="haveWatched" >Have Watched</option>
                <option value="GraphViz" >GraphViz</option>
                required
          </select>
            </form>
          </div>
        </div>
        <div className="body-movies">
          <ul>
            {this.state.items.map((item) => {
              return (
                <div>
                  <SimpleReactLightbox>
                    <div>
                      <SRLWrapper options={options}>
                        <a href={item.poster} data-attribute="SRL"><img className="m" src={item.poster} alt={["Title: " + item.title + " | Rating: " + item.rating + " | Director: " + item.director + " | Actors: " + item.actors]} /></a>
                      </SRLWrapper>
                    </div>
                  </SimpleReactLightbox>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Movies;

