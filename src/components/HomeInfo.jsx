import React from "react"


const InfoBox = ({ text, link, btnText }) => (
    <div>
        {text}
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
        <h1>2</h1>
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    ),
  
    }

// renderContent checks the currentStage and displays the corresponding content:
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}
export default HomeInfo