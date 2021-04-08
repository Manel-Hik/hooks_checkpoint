import React, {useState} from 'react'
import MovieCard from './MovieCard'
import {Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './AddModal';



const MovieList = ({movies, addMovie}) =>
 {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<React.Fragment>
<div className="container">

  {movies.map(el => <MovieCard movie={el}/>)} 
</div>
<div >
<button onClick={handleShow}>Add movie </button>
  <AddModal show={show} handleClose={handleClose} addMovie={addMovie}/>
</div>
</React.Fragment>
    )
}

export default MovieList
