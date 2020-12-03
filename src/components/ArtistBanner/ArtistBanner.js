import React from 'react'
import './ArtistBanner.css';


class ArtistBanner extends React.Component {
    render(){
        return (
        <div className="artistBanner">
            <p className="artist">ARTIST</p>
            <h2 className="name">{this.props.name}</h2>
            <button className="resume"><a className="resumeText" href={require("../images/Chalida_Pisuraj_Resume-10232020.pdf")}> <b>RESUME</b> </a></button>
        </div>
        )
    }
}

export default ArtistBanner;