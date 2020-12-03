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
                <Body 
                title = 'Virtual Marketplace App Design'
                dashColor = "#4B6CF8"
                hasDash = "—"
                intro="Designed using Adobe XD. I dabbled in creating some pages for an app meant to gather small businesses and streamline direct connections with their supporters."
                />
                <Body 
                title = 'Remote Soil Monitoring Robot'
                dashColor = "#4B6CF8"
                hasDash = "—"
                intro = "Imagine a GitHub contribution map but for water conservation and optimization. Sponsored by the undergraduate research program (UROP) and the Vice Chair of Undergraduate Studies of Computer Science."
                />
                <p className="text">If you are intrigued at this research, you can read more about it <a href={require('../images/SeniorDesign.pdf')}>here</a>.</p>
                
            </div>
        )
    }
}

export default SideProject;