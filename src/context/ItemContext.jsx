import React, { createContext, useState } from 'react';


export const Context = createContext();

export const ItemsProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    return (
        <Context.Provider 
            value={{theme, setTheme}} 
        > 
        
            {children} 
        
        </Context.Provider>
    )
}

