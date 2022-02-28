import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import HomeButton from '../assets/home-button.png'


const OneBeer = () => {

  const [beer, setBeer]= React.useState([])
  const { id }= useParams();

  React.useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response);
        setBeer(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <header>
            <Link to='/'><img src={HomeButton} alt='homebtn' /></Link>
        </header>
<img style={{width:"150px", position: "relative"}} src={beer.image_url} alt='Beer'/>
  <p>Name: {beer.name}</p>
  <p>Tagline: {beer.tagline}</p>
  <p>First Brewed: {beer.first_brewed}</p>
  <p>Attenuation Level: {beer.attenuation_level}</p>
  <p>Description: {beer.description}</p>
  <p>Contributed By: {beer.contributed_by}</p>
    </div>
  )
};

export default OneBeer;