import React, { useState, useEffect } from 'react';
import {Container, SubContainer, CategoryContainer} from './StyledHome';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button'



function Home() {


  const navigate = useNavigate ()

  function Logout(){
    navigate('/')
  }
 

  return (

    <Container> 

          <SubContainer>

          <Link to={'/popular'}>
            <CategoryContainer>Os mais populares</CategoryContainer>
          </Link>
          
          <Link to={'/top-rated'}>
            <CategoryContainer>Os mais bem avaliados</CategoryContainer>
          </Link>
          
          
          <Link to={'/upcoming'}>
            <CategoryContainer>
              <img src='../../assets/upcoming.svg'></img>
              <span>Os que estão por vir</span>
            </CategoryContainer>
          
          </Link>

          </SubContainer>

          <Button onClick={Logout}>Sair</Button>

    </Container>

  )
}

export default Home;

