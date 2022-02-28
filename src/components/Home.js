import React from "react";
import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import NewBeer from "../assets/new-beer.png";
import RandomBeer from "../assets/random-beer.png";

const Home = () => {
    
  return (
      <div>
        <img src={Beers} alt='beers'/>
        <Link to="/beers">
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          facilisi nullam vehicula ipsum. Hac habitasse platea dictumst
          vestibulum rhoncus est pellentesque. {" "}
        </p>
        <img src={RandomBeer} alt='beers'/>
        <Link to="/random-beer"><h2>Random Beer</h2></Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          facilisi nullam vehicula ipsum. Hac habitasse platea dictumst
          vestibulum rhoncus est pellentesque. {" "}
        </p>
        <img src={NewBeer} alt='beers'/>
        <Link to="/new-beer"><h2>New Beer</h2></Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          facilisi nullam vehicula ipsum. Hac habitasse platea dictumst
          vestibulum rhoncus est pellentesque. {" "}
        </p>
      </div>
  );
};

export default Home;
