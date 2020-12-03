import React from 'react';
import './Body.css';



class Body extends React.Component {
    render(){
        return(
            <div className="content">
                <h2 className="sectionTitle">{this.props.title}</h2>
                <h2 className="dash" style={{color: this.props.dashColor}}>{this.props.hasDash}</h2>
                <div className="mainBody">
                    <p className="intro">{this.props.intro}</p>
                    <p className="para">{this.props.first}</p>
                </div>
                
            </div>
        )
    }
}

export default Body;