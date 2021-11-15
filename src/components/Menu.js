import React from 'react';
import '../styles/Menu.css';

const Menu = ({handleActive, handleComplete, handleAll}) => {
    return (
        <div className="menu-container">
            <button onClick={handleAll}  className="button-first">All</button>
            <button onClick={handleActive}>Active</button>
            <button onClick={handleComplete} className="button-end">Complete</button>
        </div>
    )
}

export default Menu
