import { render } from '@testing-library/react';
import React from 'react';
import '../App/App.css';
import './Footer.css';


class Footer extends React.Component{
    render(){
        const {album, title} = this.props;
        return(
            <div className="bar">
                <div className="pages">
                    <img className="previousAlbum" src={album} />
                    <p className="previousTitle">{title}</p>
                </div>
            </div>
        )
    }   
}

export default Footer;