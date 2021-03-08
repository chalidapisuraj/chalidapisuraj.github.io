import React from 'react'
import './Banner.css';


class Banner extends React.Component {
    render(){
        return (
        <div className="banner">
            <img className="feature" src={this.props.imageSrc} />
            <p className="playlist">PLAYLIST</p>
            <h2 className="thisIs">This Is {this.props.thisIs}</h2>
            <p className="info">{this.props.descript}</p>
            <button className="resume"><a className="resumeText" href={require("../images/Pisuraj_SW_Resume_012921.pdf")}> <b>RESUME</b> </a></button>
            <div className="iconList">
                <a href="https://www.linkedin.com/in/chalida-pisuraj/"><img className="icons" src={require("../images/linkedin.svg")}/></a>
                <a href="https://github.com/chalidapisuraj"><img className="icons" src={require("../images/github.svg")}/></a>
                <a href="https://open.spotify.com/playlist/37i9dQZF1EpjwqrA4q0iU9?si=oT90uQrLQq2qPXiFAyvbzA"><img className="icons" src={require("../images/spotify.svg")}/></a>
            </div>
        </div>
        )
    }
}

export default Banner;