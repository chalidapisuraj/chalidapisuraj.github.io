import React from 'react'
import '../App/App.css';
import {SidebarData} from '../Sidebar/SidebarData';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';


class Panasonic extends React.Component{
    render(){
        let item = SidebarData.find(item => item.title === "Panasonic Internship");
        return(
            <div className='pages'>
                <Banner 
                imageSrc = {item.imgSrc}
                thisIs = "My Panasonic Internship"
                descript= "Panasonic Avionics Web Development Intern from October 2019 to April 2020. Unfortunately cut short due to the COVID-19 pandemic."
                />
                <div className= "firstSection">
                    <Body 
                    title = 'Panasonic Avionics HQ @ Lake Forest, CA'
                    dashColor = "#0056aa"
                    hasDash = "—"
                    intro = "I interned as part of the Technical Services team. Some of the activities I did included creating content using the Adobe Creative Cloud, creating Python scripts to help automate the training audit process, and using Linux to help streamline data transfer from IFE (In-Flight Entertainment) racks."
                    first = "My most favorite experience was conducting a user experience/journey research for an internal mobile application resulting in a complete change in direction, due to previous misconception. See below!  ↓"
                    />
                </div>
                <img className="img" src = {require('../images/panasonic_highlight.png')}/>
                <Body 
                title = "Internship Highlight"
                dashColor = "#0056aa"
                hasDash = "—"
                intro = "My favorite project was spearheading an app idea to ease the burden of the aircraft maintenance crew. Panasonic takes care of every airline that carries Panasonic IFE. Due to FAA regulations and the sheer amount of aircrafts each crew member has to go through in a single 2-hour turnaround time, having a tool that can better optimize their time to the repair work while streamlining procedures seemed like a hole-in-one!"
                />
                <div className ="lastSection">
                    <Body 
                    title = "Researching @ LAX"
                    dashColor = "#0056aa"
                    hasDash = "—"
                    intro = "I conducted interviews with the maintenance crews and shadowed them through a typical day to note repetitive tasks and concerns that can be addressed in the app. The initial concerns that my managers thought warranted the production of this app was shown to be miniscule in the daily tasks of the crew. After my research, our team completely changed directions."
                    first = "It was very exciting to be walking on the tarmac of LAX, entering hangars, and persuing empty planes occupied by waiting flight attendants."
                    />
                </div>
            </div>
        )
    }
}

export default Panasonic;