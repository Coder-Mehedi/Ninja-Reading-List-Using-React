import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    const { themes, activeTheme, themeSetter } = useContext(ThemeContext)
    const themeToUse = themes[activeTheme]
    console.log(themeToUse)

    return ( 
        <div className="navbar" style={{ background: themeToUse.bg, color: themeToUse.syntax }}>
            <button onClick={ () => themeSetter('light') }>Light</button>
            <button onClick={ () => themeSetter('dark') }>Dark</button>
            <button onClick={ () => themeSetter('red') }> Red</button>
            <h1>Ninja Reading List</h1>
            <p>Currenty You Have { books.length } books to get through.</p>
        </div>
     );
}
 
export default Navbar;
