import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {HandleLogin} from '../../redux/auth';
import {Container, SubContainer} from './StyledLogin';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';



function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function GetEmail(e) {
    setEmail(e.target.value)
    
  }

  function GetPassword (e) {
    setPassword (e.target.value)
    
  }
  
  const HandleAuth = () => {

    dispatch(HandleLogin())
   
    
  } 

  return (
    <Container>

      <SubContainer>
      <h1>Bem-vindo ao <span className='logo'>Movie-List</span></h1>
        <Input 
        onChange={GetEmail} 
        type="email" 
        class="inputEmail" 
        name="inputEmail" 
        required placeholder="E-mail">
        </Input>
        
        <Input 
        onChange={GetPassword} 
        type="password" 
        class="inputSenha" 
        name="inputSenha" 
        required placeholder="Senha">
        </Input>
        
        <Button onClick={()=> HandleAuth()}>
          Entrar
        </Button>    
      
      </SubContainer>   
    </Container>
  );
}

export default Login;


