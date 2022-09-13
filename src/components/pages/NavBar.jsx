import React, { useState } from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/ItemContext';

export const NavBar = () => {

    const {theme, setTheme} = useContext(Context);

    const changeMode = () => {
        if(theme === 'light') {
            setTheme('dark')
        } else (
            setTheme('light')
        )
    }
    
/*     const themeToggle = () => {
        setToggleChange(!toggleChange);
    }; */

    return (

        <nav>
            <div className={theme === 'dark' ? 'NavHomeDark' : 'NavHomeLight' } >

                <Link to={'/'}>
                    <h1>Where in the world?</h1>
                </Link>
                <div 
                    className='NavSwitch' 
                    onClick={() => changeMode()}
                >
                    <i className="fa-solid fa-moon"></i>
                    <h4>Dark Mode</h4>
                </div>

            </div>
        </nav>

    )
}
