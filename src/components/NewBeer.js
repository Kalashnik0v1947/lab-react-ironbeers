import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeButton from '../assets/home-button.png'


const NewBeer = () => {

  const [image_url, setImage_Url] = React.useState('')
  const [name, setName] = React.useState('')
  const [tagline, setTagline] =  React.useState('')
  const [first_brewed, setFirst_Brewed] =  React.useState('')
  const [description, setDescription] =  React.useState('')
  const [brewersTips, setBrewersTips] =  React.useState('')
  const [attenuation_level, setAttenuation_Level] =  React.useState('')
  const [contributed_by, setContributed_By] =  React.useState('')
  const [error, setError] =  React.useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      image_url,
      name,
      tagline,
      description,
      first_brewed,
      brewersTips,
      attenuation_level,
      contributed_by,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then((response) => {
         navigate("/beers");
      })
      .catch((e) => {
    
        setError("There was an error, please try again");
      });
  };

  return (
    <div>
     <Link to='/'><img src={HomeButton} alt='homebtn' /></Link>
      <form onSubmit={handleSubmit}>
        {error !== "" && <p>{error}</p>}
        <div>
          <label htmlFor="name">Image: </label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={image_url}
            onChange={(e) => setImage_Url(e.target.value)}
          />
        </div>
           <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline: </label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="firstBrewed">First Brewed: </label>
          <input
            type="text"
            id="firstBrewed"
            name="firstBrewed"
            value={first_brewed}
            onChange={(e) => setFirst_Brewed(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="brewersTips">Brewers Tips: </label>
          <input
            type="text"
            id="brewersTips"
            name="brewersTips"
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="attenuationLevel">Attenuation Level: </label>
          <input
            type="number"
            id="attenuationLevel"
            name="attenuationLevel"
            value={attenuation_level}
            onChange={(e) => setAttenuation_Level(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contributedBy">Contributed By: </label>
          <input
            type="text"
            id="contributedBy"
            name="contributedBy"
            value={contributed_by}
            onChange={(e) => setContributed_By(e.target.value)}
          />
        </div>
        <button type="submit"> CREATE </button>
      </form>
    </div>
  );
};
export default NewBeer;