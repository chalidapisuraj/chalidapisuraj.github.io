import React, {PropTypes} from 'react';
import './Body.css';


class Body extends React.Component {
    render(){
        const { title, dashColor, hasDash, first, intro } = this.props;
        return(
            <div className="content">
                <h2 className="sectionTitle">{title}</h2>
                <h2 className="dash" style={{color: dashColor}}>{hasDash}</h2>
                <div className="mainBody">
                    <p className="intro">{intro}</p>
                    <p className="para">{first}</p>
                </div>
            </div>
        )
    }
}

export default Body;