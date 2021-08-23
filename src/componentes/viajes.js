import { useEffects, useState } from "react";
import "./viajes.css";
import counter from "./componentes/counter;"



const viajes = () => {
    const [characters,setCharacters]= useState ([])

    useEffects(() => {
      fetch("https://breakingbadapi.com/api/character")
      .then ((Response) =>Response.json())
      .then((data)) => setCharacters (data.results));
}, []);


return (
    <div className="container">
        <ul>
        {characters.map(({id, Image, name}) =>(
          <li key ={id}>
            {name} <img src={Image} alt="character" />
        </li>
        ))}
      </ul>
    </div> 
    );
};

export default App;
