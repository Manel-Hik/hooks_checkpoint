import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


 const MovieCard = ({movie}) => {
    return (
  

  <Card  style={{ width: '18rem' }}>
  <Card.Img  src={movie.main_img} style={{width:'18rem'}}/>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <h5>{movie.duration}</h5>
    <h5>{movie.date}</h5>
    <Card.Text>
    {movie.description}
    <Link to ={`/description/${movie.id}`} > <button> Description</button> </Link>

    </Card.Text>
    <h5>{movie.genre}</h5>
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
        />
          </Card.Body>
</Card>
        
  
        )
    
}
export default MovieCard;
