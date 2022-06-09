import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
