import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, setCities, onClose}) {
  
  const closeAll = () => {
    setCities([]);
  }

  if(cities){
    return (
      <div className='cards'>
        <div className="botoncito">
            <button onClick={closeAll} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className='cards__div'>
          {cities.map(c => <Card
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id={c.id}
            /> )}
        </div>
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
