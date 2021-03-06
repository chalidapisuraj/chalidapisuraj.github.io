import React from 'react'
import '../App/App.css';
import {SidebarData} from '../Sidebar/SidebarData';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';


class SideProject extends React.Component{
    render(){
        let item = SidebarData.find(item => item.title === "Side Projects");
        return(
            <div className='pages'>
                <Banner 
                imageSrc = {item.imgSrc}
                thisIs = "My Side Project"
                descript= "This is a budding collection of side projects and experiments that I dabble in for fun in and outside of school! Feel free to take a look as I add more to this page :)"
                />
                <div className= "firstSection">
                    <Body 
                    title = 'Virtual Marketplace App Design'
                    dashColor = "#4B6CF8"
                    hasDash = "—"
                    intro="Working with a team of Google Engineers and a Facebook Data Scientist, I started to design some sample pages for a Virtual Marketplace. The app is meant to gather small/home businesses and streamline direct connections with their supporters."
                    first="Designed using Adobe XD."
                    />
                </div>
                <img className="img" src={require('../images/market_1.png')}/>
                <img className="img" src={require('../images/market_2.png')}/>
                <Body 
                title = 'Remote Soil Monitoring Robot'
                dashColor = "#4B6CF8"
                hasDash = "—"
                intro = "Imagine a GitHub contribution map but for water conservation and optimization. Sponsored by the undergraduate research program (UROP) and the Vice Chair of Undergraduate Studies of Computer Science."
                />
                <p className="text">If you are intrigued at this research, you can read more about it <a href={require('../images/SeniorDesign.pdf')}>here</a>.</p>
                <div className ="lastSection">
                    <video className="videos" muted controls autostart autoPlay src={require('../images/SeniorDesign.mp4')} type="video/mp4" />
                </div>
            </div>
        )
    }
}

export default SideProject;