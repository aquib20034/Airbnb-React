import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import CardsData from './records/Cards';

// import whiskerson from './images/mr-whiskerson.png'
// import felix from './images/felix.png'
// import fluffykins from './images/fluffykins.png'
// import pumpkin from './images/pumpkin.png'

// import katie from './images/katie-zaferes.png'

import JokesData from './records/Jokes';
function App() {
  
  // const jokes = JokesData.map(function(joke){
  //   return <Joke 
  //             setup={joke.setup}
  //             punchline={joke.punchline}
  //           />
  // })

  const cards = CardsData.map(function(item){
      return <Card 
      key={item.id}
      {...item}
    />

  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
        </section>
     
     
      {/* <Card 
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="Whatever you want"
        title="Life Lessons with Katie Zaferes"
        price={136}
      /> */}




      {/* <div className='joke-main'>
        {jokes}
      </div> */}

      {/* <div className="joke-main">
        <Joke 
          setup="I got my daughter a fridge for her birthday." 
          punchline="I can't wait to see her face light up when she opens it."
        />
        <Joke 
          setup="How did the hacker escape the police?" 
          punchline="He just ransomware!"
        />
        <Joke 
          setup="Why don't pirates travel on mountain roads?" 
          punchline="Scurvy"
        />
        <Joke 
          setup="Why do bees stay in the hive in the winter?" 
          punchline="Swarm"
        />
      </div> 
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
      </div>*/}

    </div>
  );
}

export default App;
