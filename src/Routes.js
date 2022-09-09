import {Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function Routes(){
        <Routes>
            <Route path='/' element={Login}/>
            <Route path='/home' element={Home}/>
        </Routes>
}

export default Routes;