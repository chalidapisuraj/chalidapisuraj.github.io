import React from 'react';
import '../App/App.css';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Tile from '../Tile/Tile';
import {SidebarData} from '../Sidebar/SidebarData';

export const tiles = [
    {name: "Tinder Case Study", imgSrc: require('../images/Tinder.png'), path: require('../pages/Tinder')},
    {name:"Panasonic Internship", imgSrc: require('../images/Panasonic.png'), path: require('../pages/Panasonic')},
    {name: "CoreLogic Internship", imgSrc: require('../images/CoreLogic.png'), path: require('../pages/CoreLogic')},
    {name: "About Me", imgSrc: require('../images/me.png'), path: require('../pages/AboutMe')},
    {name: "Side Projects", imgSrc: require('../images/side.png'), path: require('../pages/SideProjects')}
];

class Home extends React.Component {
    render(){
        const homeInfo = {
            title: 'Home',
            path: '/',
            cName: 'nav-text',
            imageSrc: require('../images/profile.png'),
            name: 'home',
            thisIs: 'Chalida Pisuraj',
            descript: "Currently seeking full-time positions as a Software Engineer or UI/UX Designer/Engineer. Recent UC Irvine Computer Science and Engineering grad.",
            section: "Recent Ventures"
        };


        return (
            <div className='home'>
                <Banner 
                imageSrc = {homeInfo.imageSrc}
                thisIs = {homeInfo.thisIs}
                descript = {homeInfo.descript}/>

                <div className="tileList">
                    <h2 className="sectionTitle">Recent Ventures</h2>
                
                    {SidebarData.slice(1).map((item) => {return <Tile 
                    tileImageSrc = {item.imgSrc}
                    name = {item.name}
                    path = {item.path}/>})}
                </div>
            </div>
        )
    }
}

export default Home;
