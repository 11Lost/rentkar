import logo from './logo.svg';
import './App.css';
import Navbar from './container/Nav/Navbar';
import { Offer } from './container/section1/Offer';
import { Butoon } from './container/section2/Butoon';
import { Card } from './container/section3/Card';
function App() {
  return (
    <>
     <nav>
      <Navbar/>
      </nav>
      <main>
      <Offer/>
      <Butoon/>
      <Card/>
      </main>


    
    </>
  );
}

export default App;
