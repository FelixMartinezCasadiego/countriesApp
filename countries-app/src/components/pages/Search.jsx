import React from 'react';
import { useState } from 'react';
import '../../style.css';
import { Link } from "react-router-dom";

export const Search = () => {

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
              <li>

              <Link to={"/region/africa"}>
                Africa
              </Link>

              </li>
              <li>
                <Link to={"/region/americas"}>
                  America
                </Link>
                
              </li>
              <li>
                <Link to={"/region/asia"}>
                  Asia
                </Link>
              </li>
              <li>
                <Link to={"/region/europe"}>
                  Europe
                </Link>
              </li>
              <li>
                <Link to={"/region/oceania"}>
                  Oceania
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
