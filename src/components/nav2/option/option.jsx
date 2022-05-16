import React from 'react';
import "./optionStyle.css";
import Polygon from "./../../../images/Polygon.png";

function Option(link) {
  return (
    <>
      <div>
        <div><img src={Polygon} alt="img"/></div>
        <select className='optionWrapper'>
          <option className='link55'>{link}Nevropatolog</option>
        </select>
      </div>
    </>
  )
}

export default Option;