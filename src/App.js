import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';


import whiskerson from './images/mr-whiskerson.png'
import felix from './images/felix.png'
import fluffykins from './images/fluffykins.png'
import pumpkin from './images/pumpkin.png'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      {/* <Card /> */}

      <div className="contacts">
      <Contact 
       img={whiskerson}
       name="Mr. Whiskerson"
       phone="(212) 555-1234"
       email="mr.whiskaz@catnap.meow"
      />
      <Contact 
       img={fluffykins}
       name="Fluffykins"
       phone="(212) 555-2345"
       email="fluff@me.com"
      />

      <Contact 
       img={felix}
       name="Felix"
       phone="(212) 555-4567"
       email="thecat@hotmail.com"
      />

      <Contact 
       img={pumpkin}
       name="Pumpkin"
       phone="(0800) CAT KING"
       email="pumpkin@scrimba.com"
      />
      </div>

    </div>
  );
}

export default App;
