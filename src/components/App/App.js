import React, { Component, useState } from 'react'; 
import './App.css';
import Navbar from '../Sidebar/Sidebar';
import Banner from '../Banner/Banner'; //Unused import
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Tinder from '../pages/Tinder';
import Panasonic from '../pages/Panasonic';
import CoreLogic from '../pages/CoreLogic';
import SideProject from '../pages/SideProjects';

//import 'bootstrap/dist/css/bootstrap.min.css'


//import logo from './logo.svg';

// Honestly a great first effort <3. I'll keep reviewing and testing it to see if I can make suggestions in my freetime
// Feel free to hit me up if you're stuck somewhere or somethings not working. I would have fun debugging with you over video chat!
// Hope these comments are helpful! I'll continue to make more! -- Chris S. :)

const [shouldShowSidebar, setShouldShowSidebar] = useState(false);

class App extends React.Component {
  render(){
    return (
    <div className ="App">
      <div className="header">
        <Router>
          {shouldShowSidebar && <Navbar />} {/* The usestate is quick to add out here if you want to hide/show this way */} 
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about-me' exact component={AboutMe}/>
              <Route path='/tinder-case-study' exact component={Tinder}/>
              <Route path='/panasonic-internship' exact component={Panasonic}/>
              <Route path='/corelogic-internship' exact component={CoreLogic}/>
              <Route path='/side-projects' exact component={SideProject}/>
            </Switch>
        </Router>
      </div>
    </div>
    );
  }
}

export default App;



