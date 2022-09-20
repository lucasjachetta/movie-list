import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HandleLogin, SetLoginError} from '../../redux/auth';
import {Container, SubContainer} from './StyledLogin';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';



function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {logged, loginError} = useSelector(state => state.auth)

  useEffect(()=>{
    console.log("logged", logged)
    console.log("loginError",loginError)
    
    if (logged){
      navigate('/home')
    } 
    
    if (loginError) {
      alert("E-mail ou senha não cadastrados")
      dispatch(SetLoginError(false))
    }
  },[logged, loginError, navigate])


  function GetEmail(e) {
    setEmail(e.target.value)
    
  }

  function GetPassword (e) {
    setPassword (e.target.value)
    
  }
  
  const HandleAuth = () => {

    dispatch(HandleLogin({email, password}))
   
    
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


