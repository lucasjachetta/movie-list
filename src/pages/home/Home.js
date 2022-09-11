import React, { useState } from 'react';
import {Container} from './StyledHome';
import {MovieList} from '../../components/MovieList' 
import {Movie} from '../../components/Movie' 



function Home() {

  // const [movies, setMovies] = React.useState([]);

  const movies = [
    {
      id: 1,
      title: 'Spider Man',
      image_url: 'https://cf.shopee.com.br/file/281ba06d0544c436dde9cca9d0ad447a',
      url:'https://www.google.com/'
    },

    {
      id: 2,
      title: 'Spider Man',
      image_url: 'https://cf.shopee.com.br/file/281ba06d0544c436dde9cca9d0ad447a',
      url:'https://www.google.com/'
    },

    {
      id: 3,
      title: 'Spider Man',
      image_url: 'https://cf.shopee.com.br/file/281ba06d0544c436dde9cca9d0ad447a',
      url:'https://www.google.com/'
    }

  ]


  return (

    <Container> 

      <h1>Filmes</h1>

      <MovieList>

        {movies.map(movie => {
          return(
            <Movie key={movie.id}>
              <a href={movie.url}><img alt={movie.title} src={movie.image_url}/></a>
              <span>{movie.title}</span>
            </Movie>
          )
        })}

      </MovieList>


    </Container>

  )
}

export default Home;

