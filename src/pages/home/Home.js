import React, { useState, useEffect } from 'react';
import {Container} from './StyledHome';
import {MovieList} from '../../components/MovieList' 
import {Movie} from '../../components/Movie' 
import { APIKey } from '../../config/key';
import { Link } from 'react-router-dom';



function Home() {

  const image_url = 'https://image.tmdb.org/t/p/w500'
  const [movies, setMovies] = React.useState([])
  
  useEffect(()=> {
        //consumindo api toda vez que o componente for recarregado
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  return (

    <Container> 

      <h1>FILMES MAIS POPULARES</h1>

      <MovieList>

        {movies.map(movie => {
          return(
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}><img alt={movie.title} src={`${image_url}${movie.poster_path}`}/></Link>
              <span>{movie.title}</span>
            </Movie>
          )
        })}

      </MovieList>


    </Container>

  )
}

export default Home;

