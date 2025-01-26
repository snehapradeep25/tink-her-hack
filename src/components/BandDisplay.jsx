import React from 'react'
import { band_list } from './bandlist';
import './BandDisplay.css'
const BandDisplay = () => {
    return (
      <div className="band-list">
        <h2>Band Collection</h2>
        <div className="band-items">
          {band_list.map((band) => (
            <div key={band.id} className="band-item">
            <img src={band.image} alt={band.bandname} className="band-image" />
            <h3>{band.bandname}</h3>
            <p>Rating: {band.rating} / 5</p>
            <p>Price: ${band.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BandDisplay;
  
