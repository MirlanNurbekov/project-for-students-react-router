import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ButtonsPage from './Pages/ButtonsPage';
import ListOfUsers from './Pages/ListOfUsers';
import Error from './Pages/Error';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/buttonspage' element={<ButtonsPage/>} />
        <Route path='/users' element={<ListOfUsers/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
