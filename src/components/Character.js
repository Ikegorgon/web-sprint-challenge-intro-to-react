// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Character = (props) => {
    const [homeWorldLocation, setHomeWorldLocation] = useState();
    useEffect (() => {
        axios.get(props.data.homeworld)
        .then(response => setHomeWorldLocation(response.data.name))
        .catch(err => console.log(err))
    });
    return (
        <ParentDiv>
            {console.log(props.data.films)}
            <Name>{props.data.name}</Name>
            <Info>Born {props.data.birth_year}</Info>
            <Info>From: {homeWorldLocation}</Info>
            <Info>Gender: {props.data.gender}</Info>
            <Info>Height: {props.data.height}</Info>
            <Info>Mass: {props.data.mass}</Info>
            <Info>Hair Color: {props.data.hair_color}</Info>
            <Info>Eye Color: {props.data.eye_color}</Info>
            <Info>Skin Color: {props.data.skin_color}</Info>
            <Films>Showed in {props.data.films.map(film => `- ${film} \n`)}</Films>
        </ParentDiv>
    )
}
/*
name={character.name} 
birth_year={character.birth_year} 
eye_color={character.eye_color} 
films={character.films} 
gender={character.gender} 
hair_color={character.hair_color} 
height={character.height} 
homeworld={character.homeworld} 
mass={character.mass} 
skin_color={character.skin_color}
*/
const ParentDiv = styled.div `
    border: 4px solid #222222;
    width: 40%;
    min-width: 300px;
    margin: 2rem auto;
    background-color: #443e3ebf;
    padding: 1rem;
`;
const Name = styled.h2 `
    width: auto;
    margin: 0.5rem auto 1rem auto;
    width: 70%;
    color: #443e3e;
    text-shadow: 1px 1px 10px #ffffff;
    font-size: 3rem;
    border-bottom: 2px solid #222222;
`;
const Info = styled.p `
    
    color: #cccccc;
    width: 90%;
    margin: auto;
`;
const Films = styled.p `
    color: #cccccc;
    width: 70%;
    margin: auto;
`;

export default Character;