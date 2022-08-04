import React from 'react';
import { useState } from 'react';
import '../../style.css';
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from '../../hooks/useForm';

export const Search = () => {

  const navigate = useNavigate(); // Obtener navegación

  //const location = useLocation(); // Obtener información de ubicación

  const [ dropDown, setDropDown] = useState('none');

  const { searchCountry, onInputChange} = useForm({
    searchCountry: ''
  });

  const onSubmit = (e) =>{
    e.preventDefault();
    if(searchCountry.trim().length <= 1) return;

    navigate(`/?q=${searchCountry.toLowerCase()}`)
  }

  const openButton = () =>{

    if( dropDown === 'none' ){
      setDropDown('block')
    } else {
      setDropDown('none')
    }
  }


  return (
    <div className='searchMain'>
    
      <form className='formSearch' onSubmit={onSubmit} /* onSubmit={onSubmit} */>
        <input 
          type="text" 
          placeholder='Search for a country...' 
          required 
          name='searchCountry'
          value={searchCountry}
          onChange={onInputChange}
        />
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
