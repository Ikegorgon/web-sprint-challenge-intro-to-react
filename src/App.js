import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState();

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <div className="characters">
        {characters && CharacterMaker(characters)}
      </div>
    </div>
  );
}

function CharacterMaker(characters) {
  let characterList = characters.map(character => {
    return <Character data={character} />;
  });
  return characterList;
}

export default App;
