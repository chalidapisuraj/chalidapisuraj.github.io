import React from 'react'
import '../App/App.css';
import {SidebarData} from '../Sidebar/SidebarData';
import ArtistBanner from '../ArtistBanner/ArtistBanner';
import Body from '../Body/Body';


class AboutMe extends React.Component{
    render(){
        let item = SidebarData.find(item => item.title === "About Me");
        return (
            <div className='pages'>
                <ArtistBanner /> 
                <h4 className="aboutSection">Image Gallery</h4>
                <img className="gallery" src={require('../images/about.png')} />
                <h4 className="aboutSection">Bio</h4>
                <p className="text">
                    Hello! I am a recent Computer Science & Engineering grad located in Sunnyvale, CA.
                    I am interested in roles pertaining to software engineering, UI/UX design or research, and technical program management. Willing to relocate anywhere.
                    This is my 3rd iteration of my personal website. This most current version is based on React. 
                    Feel free to check it out through my <a href="https://github.com/chalidapisuraj/chalidapisuraj.github.io">GitHub link</a> above. 
                </p>
                <p className="text">
                    My website is created based on my love for music and for Spotify as a platform. 
                    I am a believer that you can tell a bit about a person through their music. 
                    Their organizational skills, creativity, and taste can be seen by how they build their playlist, what they name it and what is in it. 
                    Spotify's UI/UX and iconic design palette was the inspiration. Having consulted Spotify's Branding Guidelines, I aimed to give a faithful spin to the platform.
                    So please check out my "playlists" and dive in deeper to my resume. 
                </p>
                <div className ="lastSection">
                    <p className="text">Feel free to contact me at: <strong>bee.pisu@gmail.com</strong></p>
                </div>
            </div>
        )
    }
}

export default AboutMe;
