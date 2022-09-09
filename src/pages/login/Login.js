import React, { useState } from 'react';
import {Container, SubContainer} from './StyledLogin';
import Button from '../../components/Button'
import Input from '../../components/Input';


function Login() {

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();


  function GetEmail(e) {
    setEmail(e.target.value)
    
  }

  function GetPassword (e) {
    setPassword (e.target.value)
    
  }
  
  function LoginButton(){
   
    if (email === "admin@mixfiscal.com.br" && password === "mix@123456"){
      alert("Login efetuado")
    } else {
      alert("E-mail ou senha não cadastrados")
    }
  }
  
  
  return (
    <Container>

      <SubContainer>
      <h1>Bem vindo</h1>
        <Input onChange={GetEmail} type="email" class="inputEmail" name="inputEmail" required placeholder="Email"></Input>
        <Input onChange={GetPassword} type="password" class="inputSenha" name="inputSenha" required placeholder="Senha"></Input>
        <Button onClick={LoginButton}>Entrar</Button>    
      </SubContainer>   
    </Container>
  );
}

export default Login;


/*26 min*/