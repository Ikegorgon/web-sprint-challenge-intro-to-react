import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const characters = [];
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [active, setActive] = useState();

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        response.data.forEach(element => {
          characters.push(element);
        });
        console.log(characters);
      })
      .catch(error => {
        console.error(error);
      });
  });

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
    </div>
  );
}

export default App;
