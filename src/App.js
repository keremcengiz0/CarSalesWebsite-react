import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>                                                                       
          <Route exact path='/' element = {<Home/>}> </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;