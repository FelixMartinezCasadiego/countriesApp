import React from 'react';
import { useState } from 'react';
import '../../style.css';
import { Link } from "react-router-dom";

export const Search = ({region}) => {

  const [ dropDown, setDropDown] = useState('none');

  const openButton = () =>{

    if( dropDown === 'none' ){
      setDropDown('block')
    } else {
      setDropDown('none')
    }
  }


  return (
    <div className='searchMain'>
    
      <form className='formSearch'>
        <input type="text" placeholder='Search for a country...' required />
        <div className='btnSearch'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </form>

      <div>
        <div className='filterSearch'>
          <p> Filter by Region </p>
          <button onClick={openButton}>
            <i className="fa-solid fa-angle-down"></i>
          </button>
          
          <div className="dropDownFilter" style={{display: dropDown}}>
            <ul>
              <Link to={`/region/africa`}>
                <li>
                  Africa
                </li>
              </Link>
              <Link to={'/region/america'}>
                <li>
                  America                
                </li>
              </Link>
              <Link to={"/region/asia"}>
                <li>
                  Asia
                </li>
              </Link>
              <Link to={"/region/europe"}>
                <li>
                  Europe
                </li>
              </Link>
              <Link to={"/region/oceania"}>
                <li>
                  Oceania
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
