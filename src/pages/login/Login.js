import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {handleLogin} from '../../redux/auth';
import {Container, SubContainer} from './StyledLogin';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';



function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();


  function GetEmail(e) {
    setEmail(e.target.value)
    
  }

  function GetPassword (e) {
    setPassword (e.target.value)
    
  }
  
  const handleAuth = () => {

    dispatch(handleLogin())
   
    // if (email === "lucas@gmail.com.br" && password === "123456ljp"){
    //   navigate('/home')
    // } else {
    //   alert("E-mail ou senha não cadastrados")
    // }
  } 

  return (
    <Container>

      <SubContainer>
      <h1>Bem-vindo ao <span className='logo'>Movie-List</span></h1>
        <Input onChange={GetEmail} type="email" class="inputEmail" name="inputEmail" required placeholder="E-mail"></Input>
        <Input onChange={GetPassword} type="password" class="inputSenha" name="inputSenha" required placeholder="Senha"></Input>
        <Button onClick={()=> handleAuth()}>Entrar</Button>    
      </SubContainer>   
    </Container>
  );
}

export default Login;


