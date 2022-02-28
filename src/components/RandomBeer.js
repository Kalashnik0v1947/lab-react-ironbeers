import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import HomeButton from '../assets/home-button.png'

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = React.useState([])
   
    React.useEffect(() =>{
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) =>{
            setRandomBeer(response.data)
        })
        .catch((err) => console.log("axios error:", err))
    }, []);


    return(
   
<div>
<Link to='/'><img src={HomeButton} alt='homebtn' /></Link>
<div>
      <img  style={{width:"100px", position: "relative"}} src={randomBeer.image_url} alt='beer'/>
  <p>{randomBeer.name}</p>
  <p>{randomBeer.tagline}</p>
  <p>{randomBeer.first_brewed}</p>
  <p>{randomBeer.attenuation_level}</p>
  <p>{randomBeer.description}</p>
  <p>{randomBeer.contributed_by}</p>   
  </div>
    </div>
    )
}

export default RandomBeer