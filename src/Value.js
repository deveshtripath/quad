import React,{useEffect,useState} from "react";
import './App.css';
import Moviepage from "./Moviepage"

function Value() {
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
        <div>
            {
        movie.map((curElem,i) =>{
          
          return(
            
            <div className=" bg-red-700">
              <Moviepage
                key={i}
                id={curElem.show.id}
                name={curElem.show.name}
                language={curElem.show.language}
                genres={curElem.show.genres}
                officialSite={curElem.show.officialSite}
                rating={curElem.show.rating.average}
                image={curElem.show.image.medium}
                summary={curElem.show.summary}
              />
            </div>
          )
        })
      }
        </div>
    )
}

export default Value
