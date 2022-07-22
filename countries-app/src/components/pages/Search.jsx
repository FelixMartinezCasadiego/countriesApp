import React from 'react';
import '../../style.css';

export const Search = () => {
  return (
    <div className='searchMain'>
    
      <form className='formSearch'>
        <input type="text" placeholder='Search for a country...' required />
        <div className='btnSearch'>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </form>

      <div>
        <div className='filterSearch'>
          <p> Filter by Region </p>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>

    </div>
  )
}
