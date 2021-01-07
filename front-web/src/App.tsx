import { useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import NavBar from './Navbar';

function App() {

  useEffect(() => {

  },
  []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
