import './App.css';
import AuthContextProvider from './AuthContext';
import AboutUs from './components/About';
import Contact from './components/Contact';
import Findjobs from './components/Findjobs';
import HomePage from './components/HomePage';
import Jobpost from './components/Jobpost';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import {BrowserRouter,Route,Routes, useNavigate, useNavigation} from 'react-router-dom'

function App() {


  const token=localStorage.getItem('token');
  if(token){
    window.location.href='/home'
  }

  return (  
    <div>
      <AuthContextProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Login/>} path="/login"></Route>        
        <Route element={<SignUp/>} path="/signUp"></Route>
        <Route element={<HomePage/>} path="/home"></Route>
        <Route element={<Jobpost/>} path="/jobPosting"></Route>
        <Route element={<Findjobs/>} path="/findJobs"></Route>
        <Route element={<Contact/>} path="/contact"></Route>
        <Route element={<AboutUs/>} path="/about"></Route>
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
