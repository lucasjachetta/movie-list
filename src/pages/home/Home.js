import React, { useState, useEffect } from 'react';
import {Container} from './StyledHome';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button'



function Home() {


  const navigate = useNavigate ()

  function Logout(){
    navigate('/')
  }
 

  return (

    <Container> 

      <Link to={'/popular'}><p>Os mais populares</p></Link>
      <Link to={'/top-rated'}><p>Os mais bem avaliados</p></Link>
      <Link to={'/upcoming'}><p>Os que estão por vir</p></Link>
      <Button onClick={Logout}>Sair</Button>

    </Container>

  )
}

export default Home;

