import React from 'react'; 
import './App.css';
import Navbar from '../Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Tinder from '../pages/Tinder';
import Panasonic from '../pages/Panasonic';
import CoreLogic from '../pages/CoreLogic';
import SideProject from '../pages/SideProjects';


class App extends React.Component {
  render(){
    return (
    <div className ="App">
      <div className="header">
        <Router>
          <Navbar />
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



