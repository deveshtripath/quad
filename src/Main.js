import React,{useEffect,useState} from "react";
import './App.css';
import Product from "./Product"
import {
  Link
} from "react-router-dom";

function Main() {
    const [movie, setMovie] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=4');
    setMovie(await response.json());
    console.log(response.json());
  }

  useEffect(() => {
    getUsers();
}, []);


  return (
    <div className="">
    <div style={{textAlign:"center", display:"flex",justifyContent:"center", alignItems:"center"}}>
    <button>
    
    <Link to="/purcahse">To Purchase the film</Link> </button> Click on it.</div>
    
    {
        movie.map((curElem,i) =>{
          return(
            <div className=" bg-red-700">
              <Product
                image={curElem.show.image.medium}
                name={curElem.show.name}
                language={curElem.show.language}
                genres={curElem.show.genres}
              />
            </div>
          )
        })
      }
        </div>
    )
}

export default Main
