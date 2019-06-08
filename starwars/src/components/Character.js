import React, { Component } from 'react';
import './StarWars.css';

function Character(props) {
    return(
        <div className="character">
            <h1>{props.char.name}</h1>
            <div className="columnContainer">
            <div className="halfColumn">
                <p>Height: {props.char.height}</p>
                <p>Mass: {props.char.mass}</p>
                <p>Hair Color: {props.char.hair_color}</p>
                <p>Skin Color: {props.char.skin_color}</p>
            </div>
            <div className="halfColumn">
                <p>Eye Color: {props.char.eye_color}</p>
                <p>Birth Year: {props.char.birth_year}</p>
                <p>Gender: {props.char.gender}</p>
                <a href={"https://www.google.com/search?q=" + props.char.name} target="_blank"><p>Google Me!</p></a>
            </div>
            </div>
        </div>
    );
}

export default Character;