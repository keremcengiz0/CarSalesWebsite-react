import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CurrentUserAdverts from './components/Advert/CurrentUserAdverts';

function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar></Navbar> 
        <Routes>                                                                       
          <Route exact path='/' element = {<Home/>}> </Route>
          <Route exact path='/auth' element = {<Auth/>} ></Route>
          <Route exact path='/users/:userId/adverts' element = {<CurrentUserAdverts/>} ></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;