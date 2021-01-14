import React from 'react'
import '../App/App.css';
import {SidebarData} from '../Sidebar/SidebarData';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Iframe from 'react-iframe'


class Tinder extends React.Component{
    render(){
        let item = SidebarData.find(item => item.title === "Tinder Case Study");
        return(
            <div className='pages'>
                <Banner 
                imageSrc = {item.imgSrc} 
                thisIs = "My Tinder Case Study"
                descript = "I created an in-app date activity suggestion feature tailored to each match based on participants metadata. This was designed using Adobe XD and Figma."
                />
                <div className= "firstSection">
                    <Body 
                    title = "Date Suggestion Feature"
                    dashColor = "#f74f73"
                    hasDash = "—"
                    intro = "We both swiped right and hopefully after some pleasant conversation there will be a date. Fingers crossed it's not something repetitive and generic."
                    first = "Coming up with a date idea that will impress can be a bit difficult. I wanted to create a feature that can suggest a date by utilizing the input of both parties while taking advantage of Tinder's geolocation data."
                    />  
                </div>
                <img className="img" src ={require('../images/tinder_preview2.png')} />
                <Body 
                title = "What makes a good date?"
                dashColor = "#f74f73"
                hasDash = "—"
                intro = "I brainstormed a few factors that I thought would make a great date. Surveying UC Irvine students, I was able to narrow down which caused the most concern."
                first="Below shows that although cost is a concern most people have it is not the most important. Engaging in something interactive proves to be the main goal of successful date."
                />
                <div className="graphTitles">
                    <h2 className="sectionTitle">What are some of the factors you consider when planning a date?</h2>
                    <h2 className="sectionTitle">What is the MOST important factor when planning a date?</h2>
                </div>
                <img className="img" src = {require('../images/tinder_1.png')} />
                <p className="caption">Data was sampled from 246 people</p>
                <Body 
                title = "Making the feature"
                dashColor = "#f74f73"
                hasDash = "—"
                intro ="The 5 categories I chose to focus on were: time of day, cost, duration, distance, and general type of activities the user is interested in. I examined Tinder's interface and design choices and tried to integrate it into my own design. For the Settings, the same sliding scale mechanism is used with the addition of buttons to grey out activities upon selection. Icons were chosen to parallel the styles seen in the current in-chat features."
                />
                <div className="sideImages">
                    <img className="img" src={require('../images/tinder_draft_3.png')} />
                    <img className="img" src={require('../images/tinder_draft_4.png')}/>
                </div>
                <p className="caption">Sketches and early mockups</p>
                <Body 
                title = "High Fidelity Designs"
                dashColor = "#f74f73"
                hasDash = "—"
                first ="Below are the designs I made through Adobe XD. I utilized Tinder's color gradient themes seen in the recently added Prompts feature to suggest dates in a particular category. Beneath would be specific suggestion that best fit both their preferences. Each suggestion is equipped with basic information of the location and a Suggest button."
                />
                <img className="img" src={require('../images/tinder_3.png')}/>
                <img className="img" src={require('../images/tinder_4.png')}/>
                <Body 
                title = "Feel free to try out the prototype below"
                dashColor = "#f74f73"
                hasDash = "—"
                />
                <Iframe className="figma"
                url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fj1xjAM7jKKbmukqFHKxj7O%2FTinder-Study-Case%3Fnode-id%3D23%253A1%26scaling%3Dscale-down"
                style="border: 1px solid rgba(0, 0, 0, 0.1);" 
                width="100%"
                height="700"
                allowFollowScreen
                />
                <Body 
                title = "Moving Foward"
                dashColor = "#f74f73"
                hasDash = "—"
                intro="As I continue to improve on this project, I would like to expand on the following questions:"
                />
                <div className ="lastSection">
                    <ol className="list">
                        <li>How would we suggest more activities?</li>
                        <li>How much information should the suggestion provide?</li>
                        <li>How many suggestions should be made in order to avoid the user feeling overwhelmed?</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Tinder;