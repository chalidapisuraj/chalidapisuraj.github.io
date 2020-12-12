import React from 'react'; //import React, { PropTypes } from 'react';
import './Body.css';
//You can have just one or two empty lines between files and class definitions. Just cleaner code hahah 

//So the way this class is constructed is requiring you to do 'this.props' repeatedly.
// You could just tack this on line 8 and be good to go
class Body extends React.Component {
    // const { title, dashColor, hasDash, first, intro } = this.props;
    render(){
        return(
            <div className="content">
                {/*<h2 className="sectionTitle">{title}</h2> FTW ;)*/}
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
//Not to be super picky for something just meant to present your resume, but usually this format has propTypes
//Body.propTypes = {
// title: PropTypes.string,
// dashColor: PropTypes.string,
// hasDash: PropTypes.string, //Shouldn't this be a boolean? Seems like in other files you have it as '-'
// first: PropTypes.string,
// intro: PropTypes.string
//}


export default Body;