import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import tierra from './img/clima.jpg';

export default function App() {

  const [cities, setCities] = useState([]);
  
  const apiKey= '4ae2636d8dfbdc3044bede63951a019b';
  
  function removeAccents(str){
    const accents = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    return str.split('').map( s => accents[s] || s).join('').toString();	
  }

  function onSearch(ciudad) {
    if(cities.length > 5){
      setCities(cities.slice(1));
    }
    let selectedCity = removeAccents(ciudad);
    let verifyCity = cities.map(c => {
      let currentCity = removeAccents(c.name);
      if(currentCity.toLowerCase().includes(selectedCity.toLowerCase())){
        return true;
      }else { return false}
    })
    if(!verifyCity.includes(true)){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
          } else {
            alert("Ciudad no encontrada");
          }
        });
      }
    }
    
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

  return (
    <div className="App">
      <div className='App__imgcontainer'>
        <img className='App__back' src={tierra}/>
      </div>
      <div className='App__container'>
        <Nav onSearch={onSearch}/>
        {
          cities.length ? (<div className='App__ContainerDiv'>
          <div className='cardsBack'>            
            <img className='App__back2' src={tierra}/>            
          </div>
          <div className='divCards'>
            <Cards cities={cities} setCities={setCities} onClose={onClose}/>
          </div>
        </div>) : <div></div>
        }
        
      </div>
    </div>
  );
}
