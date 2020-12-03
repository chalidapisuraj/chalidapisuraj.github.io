import React from 'react'
import '../App/App.css';
import {SidebarData} from '../Sidebar/SidebarData';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';

class AboutMe extends React.Component{
    render(){
        let item = SidebarData.find(item => item.title === "About Me");
        return (
            <div className='pages'>
                <Banner 
                imageSrc = {item.imgSrc}
                thisIs = "Chalida Pisuraj"
                descript= "Fun fact: My legal name is a combination of my siblings' names. Charlie + Tida = Chalida! Chalida also happens to be a fairly uncommon Thai name."
                />
                <Body 
                title = 'Hello!'
                dashColor = " #00ba61"
                hasDash = "—"
                intro = "I am a recent UC Irvine grad with a B.S. in Computer Science & Engineering (porque no los dos, right?). During my years in college and through my internships, I have come to love designing and front-end development. I am always looking for all sorts of technical roles because I am firm believer of the saying, 'Don't knock it till you try it!'"
               
                />
                <p className="text">Some things I enjoy/care about outside of work are:</p>
                <ol className="aboutList">
                    <li>Finding the best birria tacos</li>
                    <li>Donating blood (I am closing in on 2 gallons!)</li>
                    <li>Botanical gardens</li>
                    <li>Stationery</li>
                    <li>Believing that life is too short not to indulge in the food you want</li>
                    <li>Formula 1 racing and basketball</li>
                    <li>College students discounts</li>
                </ol>
                <p className="text">Feel free to contact me at: <strong>bee.pisu@gmail.com</strong></p>
                <img className="img" src = {require('../images/about_4.png')}/>
                
            </div>
        )
    }
}

export default AboutMe;
