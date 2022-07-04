import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import Footer from './components/Footer';



function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialURL = "https://rickandmortyapi.com/api/character"
  const fetchCharacters = (url) =>{
    //call api
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchCharacters(initialURL);
  }, [])
  
  const onPrevious = () => {
    fetchCharacters(info.prev);
  }
  const onNext = () => {
    fetchCharacters(info.next);
  }
  
  return (
    <>
    <Navbar brand='Ricky And Morty App' />
      <div className='container mx-auto'>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
