import { BrowserRouter, Routes as RT, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Details from './pages/details/Details';

function Routes() {
 
  return (
    <BrowserRouter>
        <RT>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/> 
        </RT>
    </BrowserRouter>
  );
}

export default Routes;

//os : após a / significa que podemos recuperar a informação