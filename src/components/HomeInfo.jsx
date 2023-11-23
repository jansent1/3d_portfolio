import React from "react"
import { Link } from "react-router-dom";
import { arrow } from '../assets/icons';


const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
           {btnText}
           <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

// based on which stage the plane is, the different contents will be rendered:
// every statement will display a different pop up with info and links.
const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I am <span className="font-semibold">Teun</span>👋
        <br/>
        A Software Engineer from the Netherlands.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Worked on many different projects. Recently accomplished and credited Full Stack Developer."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="I've led multiple projects to succes over the years. Curious about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done or looking for a dev? I'm just a few keystrokes away."
            link="/contact"
            btnText="Let's talk"
        />
    ),
  
    }

// renderContent checks the currentStage and displays the corresponding content:
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}
export default HomeInfo