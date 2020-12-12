import React from 'react';
import './Tile.css';


class Tile extends React.Component {
    render(){
        const { path, tileImageSrc, name } = this.props; //Just re-recommending this here hahah
        return(
            <div className="tile">
                <div className="image-container">
                    <a href={this.props.path}><img className="picture" src={this.props.tileImageSrc} /></a>
                </div>
                {/* So just some feedback since it sounds like youre having problems with the tile.
                    You get a 404 on github.io when trying to access a page directly, and I think
                    it's because github Pages doesn't recognize the sub pages as individual html/md 
                    files (the root has an index.html and the sub pages are js files without an html doc)
                    
                    The simplest solution for now could be to add an onClick handler that 
                    does <Redirect to='/path' />
                    */}
                <a className="tileName" href={this.props.path}>{this.props.name}</a>
            </div>
        )
    }
}

export default Tile;