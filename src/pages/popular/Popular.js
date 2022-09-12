import React, { useState, useEffect } from 'react';
import {Container, ButtonContainer} from './StyledPopular';
import {MovieList} from '../../components/MovieList' 
import {Movie} from '../../components/Movie' 
import { APIKey } from '../../config/key';
import { Link, useNavigate } from 'react-router-dom';
import Button from "../../components/Button"




function Popular() {

  const image_url = 'https://image.tmdb.org/t/p/w500'
  const [movies, setMovies] = React.useState([])
  const navigate = useNavigate ()
  
  useEffect(()=> {
        //consumindo api toda vez que o componente for recarregado
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])


  function HandleHome(){
    navigate('/home')
 }

  return (

    <Container> 

      <h1>OS MAIS POPULARES</h1>

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

      <ButtonContainer>

        <Button onClick={HandleHome}>Voltar</Button>

      </ButtonContainer>


    </Container>

  )
}

export default Popular;

