import { useState, useEffect } from 'react';
import axios from 'axios'; //external library, using get() function to get https request
import { CLIENT_URL } from "../services/sw-api"

// this file is where logic will come together, and render the results
function StarShipContainer() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(CLIENT_URL); 
          const {results} = response.data;
          setStarships(results);
      }
      catch (error) {
          console.log(error);
      }
  
  }

  fetchData();
}, []);

    return(
      <div className="container" style={{ marginTop: 25 }}>

      {
          starships.map((starship) => {
              const {name} = starship;
              return <div className="card"><p>{name}</p></div>
          })
      }

      </div>

    )
}

export default StarShipContainer