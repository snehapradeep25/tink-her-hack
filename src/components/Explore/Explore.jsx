import React from 'react';
import './Explore.css';
import { band_list } from '../../assets/assests';

const Explore = ({category,setCategory}) => {
  return (
    <div className="explore" id="explore">
      <h1>Explore</h1>
      <p className="explore-text">
        Say goodbye to endless searches and awkward cold calls, search from our diverse collection of talented individulas ready to make your event unforgettable
      </p>
      <div className="explore-list">
        {band_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.band_name?"All":item.band_name)} key={index} className="explore-list-item">
              <img className={category === item.band_name?"active":""} src={item.band_image} alt="" />
              <p>{item.band_name}</p>
            </div>
          );
        })}
      </div>
      <div className="explore-square-list">
        {band_list.map((item, index) => (
          <div 
            onClick={() => setCategory(prev => prev === item.band_name ? "All" : item.band_name)} 
            key={index} 
            className={`explore-square-item ${category === item.band_name ? 'active' : ''}`}
          >
            <img src={item.band_image} alt={item.band_name} />
            <p>{item.band_name}</p>
          </div>
        ))}
      </div>

      
      <hr />
    </div>
  );
};

export default Explore;
