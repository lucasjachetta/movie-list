import React, { useState, useEffect } from 'react';
import {Container, SubContainer, CategoryContainer} from './StyledHome';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button'
import UpcomingImage from '../../assets/upcoming.svg'
import TopRatedImage from '../../assets/top-rated.svg'
import PopularImage from '../../assets/popular.svg'



function Home() {


  const navigate = useNavigate ()

  function Logout(){
    navigate('/')
  }
 

  return (

    <Container> 

          <h1>Escolha os filmes que deseja listar</h1>

          <SubContainer>

          <Link to={'/popular'}>
          <CategoryContainer>
              <img src={PopularImage}/>
              <span>Os que estão em alta</span>
            </CategoryContainer>
          </Link>
          
          <Link to={'/top-rated'}>
          <CategoryContainer>
              <img src={TopRatedImage}/>
              <span>Aclamados pela crítica</span>
            </CategoryContainer>
          </Link>
          
          
          <Link to={'/upcoming'}>
            <CategoryContainer>
              <img src={UpcomingImage}/>
              <span>Os que estão por vir</span>
            </CategoryContainer>
          
          </Link>

          </SubContainer>

          <Button onClick={Logout}>Sair</Button>

    </Container>

  )
}

export default Home;

