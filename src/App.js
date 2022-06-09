import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>

        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
