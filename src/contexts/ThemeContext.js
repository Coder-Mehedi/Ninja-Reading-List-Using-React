import React, { createContext, useState } from 'react';
// import { themeReducer } from '../reducers/themeReducer';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [themes, setTheme ] = useState({
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'},
        red: { syntax: '#00f', ui: '#00f', bg: '#7261A3'}
    })
    const [ activeTheme, setActiveTheme ] = useState('light')

    const themeSetter = (theme) => {
        setActiveTheme(theme)
    }

    return(
        <ThemeContext.Provider value={{ themes, activeTheme, themeSetter }}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
