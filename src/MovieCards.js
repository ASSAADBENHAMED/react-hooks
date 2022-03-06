import React from 'react'
import "./moviescard.css";
import ReactStars from 'react-star-rating-component'; 
const MovieCards = ({movie}) => {
  return (
    <div>
     <div className='title'> {movie.title}</div> <br></br>
      <img src={movie.posterURL} width="250" /><br></br>
      {movie.description}<br></br><br></br>
      <ReactStars value={movie.rating} starCount={10}/>
       
    </div>
  )
}
export default MovieCards