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

          <SubContainer>

          <Link to={'/popular'}>
          <CategoryContainer>
              <img src={PopularImage}></img>
              <span>Os mais populares</span>
            </CategoryContainer>
          </Link>
          
          <Link to={'/top-rated'}>
          <CategoryContainer>
              <img src={TopRatedImage}></img>
              <span>Os mais bem avaliados</span>
            </CategoryContainer>
          </Link>
          
          
          <Link to={'/upcoming'}>
            <CategoryContainer>
              <img src={UpcomingImage}></img>
              <span>Os que estão por vir</span>
            </CategoryContainer>
          
          </Link>

          </SubContainer>

          <Button onClick={Logout}>Sair</Button>

    </Container>

  )
}

export default Home;

