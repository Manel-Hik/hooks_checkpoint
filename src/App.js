import Button from 'react-bootstrap/Button';
import Description from './components/Description';
import {v4 as uuidv4 } from 'uuid';
import MovieList from './components/MovieList';
import React ,{useState} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Fiilter from './components/Fiilter';
import Description from './components/Description';

function App() {
const [keyword, setKeyword] = useState("")
const [newRate, setNewRate] = useState(1)

const [movies,setMovies]= useState([
{ id:uuidv4(),
  main_img:
"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nABUVQAVOry1zKBrZI4eauNGgI9.jpg",
title:"Nobody",
duration:"45min",
date:"2021",
rate:2,
genre:"crime",
description:"Hutch Mansell, un père et un mari frustré",
},
{ id:uuidv4(),
  main_img:
"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gg5F86ew2Qae6Pw9DnPAeqkttPo.jpg",
title:"Chaos Walking",
duration:"1h 49m",
date:"2020",
rate:5,
genre:"Sci-Fi",
description:"Dans un futur proche, les femmes ont disparu.",
},


{ id:uuidv4(),
main_img:
"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2MPQ9cZ1Pm1TCvYUz6Hdyrm2xpm.jpg",
title:"Raya et le dernier dragon",
duration:"1h 54m",
date:"2021",
rate:3 ,
genre:"Action",
description:"Il y a de cela fort longtemps, au royaume imaginaire de Kumandra, ",
},


{ id:uuidv4(),
  main_img:
"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gwoPBMQYhQhINjOD8M8jYs92jGI.jpg",
title:"Falcon et le Soldat de l'hiver",
duration:"50 min",
date:"2021",
rate:4 ,
genre:"Drama",
description:"Sam Wilson, alias Falcon, et Bucky Barnes, le Soldat de l’hiver",

}
])

const search=(text)=>{
  setKeyword(text)
}
const setRate=(rate)=>{
  setNewRate(rate)
}

const addMovie=(movie)=> {
  setMovies(movies.concat(movie))
    }
  return (
    <div className="App">
      <BrowserRouter>
      
      <Fiilter search={search} setRate={setRate} newRate={newRate}/>
      <MovieList  addMovie={addMovie}  movies={movies.filter(el=> el.rate >=newRate && el.title.toLowerCase().includes(keyword.toLowerCase().trim()))}/>
     <Route path="/description/:id" render={(props)=>  <Description {...props} movies ={movies}/>} />
     
      </BrowserRouter>
    </div>
  );
}

export default App;
