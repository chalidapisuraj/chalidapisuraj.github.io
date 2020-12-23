import React from 'react';
import { Redirect } from 'react-router-dom';
import './Tile.css';


class Tile extends React.Component{
    render(){
        return(
            <div className="tile">
                <div className="image-container">
                    <a onclick={() => <Redirect to={this.props.path}/>}><img className="picture" src={this.props.tileImageSrc} /></a>
                </div>
                <h1>test</h1>
                <a className="tileName" onclick={() => <Redirect to={this.props.path}/>}>{this.props.name}</a>
            </div>
        )
    }
}

export default Tile;