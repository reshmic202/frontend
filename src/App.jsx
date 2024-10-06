import './App.css';
import HomePage from './components/HomePage';

import Login from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter,Route,Routes, useNavigate, useNavigation} from 'react-router-dom'

function App() {


  const token=localStorage.getItem('token');
  if(token){
    window.location.href='/home'
  }

  return (  
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/login"></Route>        
        <Route element={<SignUp/>} path="/signUp"></Route>
        <Route element={<HomePage/>} path="/home"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
