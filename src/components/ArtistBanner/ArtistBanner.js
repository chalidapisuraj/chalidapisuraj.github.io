import React from 'react'
import './ArtistBanner.css';


class ArtistBanner extends React.Component {
    render(){
        return (
        <div className="artistBanner">
            <div className="section">
                <p className="artist">ARTIST</p>
                <img className="verified" src={require("../images/check.svg")}/>
            </div>
            <h2 className="name">Chalida Pisuraj</h2>
            <button className="resume"><a className="resumeText" href={require("../images/Chalida_Pisuraj_Resume-10232020.pdf")}> <b>RESUME</b> </a></button>
            <a href="https://www.linkedin.com/in/chalida-pisuraj/"><img className="icons" src={require("../images/linkedin.svg")}/></a>
            <a href="https://github.com/chalidapisuraj"><img className="icons" src={require("../images/github.svg")}/></a>
            <a href="https://open.spotify.com/playlist/37i9dQZF1EpjwqrA4q0iU9?si=oT90uQrLQq2qPXiFAyvbzA"><img className="icons" src={require("../images/spotify.svg")}/></a>
        </div>
        )
    }
}

export default ArtistBanner;