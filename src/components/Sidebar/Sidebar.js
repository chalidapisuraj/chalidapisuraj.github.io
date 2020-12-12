import React, {useState} from 'react';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import {IconContext} from 'react-icons';
import {tiles} from '../pages/Home';

// This feels like it should be a component, right?
// Sidebar.js makes me expect a Sidebar component. 
function Navbar(){
    //Ahh so this useState is only meant to toggle the sidebar.
    //If this was a component, its a bit more natural to show/hide.
    
    //What's actually cleaner, is to use a css property (display: block/none) to show/hide the sidebar
    // If you prefer inline-styling, style={{ display: shouldShowSidebar ? 'block' : 'none' }}
    // Checkout styled-components btw!! They're pretty slick at applying css styling to common components :)
    const [sidebar, setSidebar] = useState(true);
    const showSideBar = ()=> setSidebar(!sidebar);
    return (
    <>
        <IconContext.Provider value={{color: '#a0a0a0'}}>
            <div className = "navbar">
                <Link to="#" className = "menu-bars">
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle' onClick={showSideBar}>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    </>        
    );
};

export default Navbar;