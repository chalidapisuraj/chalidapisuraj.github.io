import React from 'react'
import '../App/App.css';
import {SidebarData} from '../Sidebar/SidebarData';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import CoreImageStrip from '../images/core_1.png';
import Footer from '../Footer/Footer';


class CoreLogic extends React.Component{
    render(){
        let item = SidebarData.find(item => item.title === "CoreLogic Internship");
        return(
            <div>
            <div className='pages'>
                <Banner 
                imageSrc = {item.imgSrc}
                thisIs = "My CoreLogic Internship"
                descript= "CoreLogic Information Security Intern from June 2018 to December 2018. I interned as part of the Technology Solutions Group."
                />
                <div className= "firstSection">
                    <Body 
                    title = 'CoreLogic HQ @ Irvine, CA'
                    dashColor = "#FF1616"
                    hasDash = "—"
                    intro = "Some of the projects I did included building an automated HTTP header scanner, creating phishing awareness campaigns, and desiging e-learning training courses."
                    />
                </div>
                <img className="img" src = {CoreImageStrip}/>
                <Body 
                title = 'Internship Highlight'
                dashColor = "#FF1616"
                hasDash = "—"
                intro = "One of the larger non-coding projects I got to lead was creating 2000+ promotional prints that was released to all domestic and international branches educating employees on tailgaiting. As part of that campaign, we also distributed fortune cookies with punny information security tips and tricks. Another project was helping create and being the voice-over for a phishing e-learning training course which phishing click rate from 10% to 5%."
                />
                <div className ="lastSection">
                    <Body 
                    title = 'HTTP Header Scanner'
                    dashColor = "#FF1616"
                    hasDash = "—"
                    intro = "The HTTP Header Scanner was a fun project to tackle because I had to figure out creative ways to scour all of CoreLogic's subdiaries' websites to run the scanner on. My mentors allowed me full freedom to try different methods and languages and I chose to do it in Python which was the first time I had written a Python script for such a large enterprise!"
                    />
                </div>
            </div>
        </div>
        )
    }
}

export default CoreLogic;