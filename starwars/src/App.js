import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="container">
        {this.state.starwarsChars.map(char => {
          return(
          <div className="characters">
            <h1>{char.name}</h1>
            <div className="columnContainer">
              <div className="halfColumn">
                <p>Height: {char.height}</p>
                <p>Mass: {char.mass}</p>
                <p>Hair Color: {char.hair_color}</p>
              </div>
              <div className="halfColumn">
                <p>Skin Color: {char.skin_color}</p>
                <p>Eye Color: {char.eye_color}</p>
                <p>Birth Year: {char.birth_year}</p>
                <p>Gender: {char.gender}</p>
              </div>
            </div>
          </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default App;
