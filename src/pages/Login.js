import React, { useState } from 'react';
import './Login.css';

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
      console.log("Login efetuado")
    } else {
      console.log("E-mail ou senha não cadastrados")
    }
  }
  
  
  return (
    <div>
      Bem Vindo
      <div>
        <input onChange={GetEmail} type="email" class="inputEmail" name="inputEmail" required placeholder="Email"></input>
        <input onChange={GetPassword} type="password" class="inputSenha" name="inputSenha" required placeholder="Senha"></input>
        <button onClick={LoginButton}>Entrar</button> 
        <p>{email}</p>
        <p>{password}</p>
      </div>
    </div>
  );
}

export default Login;


/*26 min*/