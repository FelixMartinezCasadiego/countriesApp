import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (

        <nav>
            <div className='NavHome'>

                <Link to={'/'}>
                    <h1>Where in the world?</h1>
                </Link>
                
                <div className='darKMode'>
                    <i className="fa-solid fa-moon"></i>
                    <h4>Dark Mode</h4>
                </div>

            </div>
        </nav>

    )
}
