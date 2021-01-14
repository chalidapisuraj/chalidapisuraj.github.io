import React from 'react';
import '../App/App.css';
import Banner from '../Banner/Banner';
import Tile from '../Tile/Tile';
import {SidebarData} from '../Sidebar/SidebarData';


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
