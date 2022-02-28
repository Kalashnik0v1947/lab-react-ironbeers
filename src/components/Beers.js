import React from 'react'
import { Link , useParams} from "react-router-dom";
import HomeButton from '../assets/home-button.png'
// import { useEffect, useState } from 'react';
import axios from 'axios';
import { Divider, Input } from 'antd';


const Beers = () => {

    const [beers, setBeers] = React.useState([])
    const {name} = useParams()
    const [foundBeer, setFoundBeer] = React.useState(null)
 
    React.useState(()=> {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${name}`)
        .then((res) => setFoundBeer(res.data))
        .catch((err) => console.log(err));
    }, [name]);

    React.useEffect(() => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            setBeers(response.data)
        })
        .catch((err)=> console.log("axios error:",err))
    }, []);



    return(
        <div>
        <header>
            <Link to='/'><img src={HomeButton} alt='homebtn' /></Link>
        </header>
        <div style={{width:"30vw", margin:"0 auto"}}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input 
        placeholder="Search" 
        type="text" 
        // onChange={handleKeyword} 
        />
    </div>
<ul>
    {beers.map((beer)=>{
        return(
            <div>
                <li>
                    <img style={{width: "50px"}} src={beer.image_url} alt="beer"/>
                    <h2>{beer.name}</h2>
                    <h4>{beer.tagline}</h4>
                    <p>Contributed By: {beer.contributed_by}</p>
                    <Link to={beer._id}>More Info</Link>
                </li>
            </div>
        )
    })}
</ul>
        </div>
    )
}


export default Beers