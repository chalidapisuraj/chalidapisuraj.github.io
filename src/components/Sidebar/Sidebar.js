import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import {IconContext} from 'react-icons';


function getWindowDimensions() {
  const { innerWidth: width} = window;
  return {
    width
  };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

function Navbar(){
    const [sidebar, setSidebar] = useState(true);
    const showSideBar = ()=> setSidebar(!sidebar);
    const {width} = useWindowDimensions();
    const validSize = 1187;
    if(width >= validSize){
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
    }
    else{
        return (
        <>
            <IconContext.Provider value={{color: '#a0a0a0'}}>
                <div className = "navbar">
                    <Link to="#" className = "menu-bars">
                        <FaIcons.FaBars onClick={showSideBar}/>
                    </Link>
                </div>
                <nav className={!sidebar ? 'nav-menu active' : 'nav-menu'}>
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
    }
    
};

export default Navbar;