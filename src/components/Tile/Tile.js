import React, {useState, useEffect} from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Tile.css';


class Tile extends React.Component{
    render(){
        return(
            <div className="tile">
                <div className="image-container">
                    <Link to={this.props.path}>
                        <img className="picture" src={this.props.tileImageSrc} />
                    </Link>
                </div>
                <p>
                    <Link to={this.props.path}>
                        <span className="tileName">{this.props.name}</span>
                    </Link>
                </p>
            </div>
        )
    }
}

export default Tile;
