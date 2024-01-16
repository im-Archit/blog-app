import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import { ButtonToggle, ButtonToolbar } from 'reactstrap';
import Base from './components/Base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import Services from './pages/Services';
import Privateroute from './components/Privateroute';
import Userdashboard from './pages/Userdashboard';
import ProfileInfo from './components/ProfileInfo';


function App() {
  return (

    <BrowserRouter>
    <ToastContainer position="bottom-center"  autoClose={3000} />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Signup />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/services" element={<Services />} />

        <Route path='/user' element={<Privateroute />} >
            <Route path='dashboard' element={<Userdashboard/>}></Route>
            <Route path='ProfileInfo' element={<ProfileInfo/>}></Route>

        </Route>
        
      </Routes>
    
    </BrowserRouter>


    );
}

export default App;
