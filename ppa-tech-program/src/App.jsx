import React from 'react'
import './app.css'
import Banner from "./components/Banner/Banner"
import InPerson from "./components/InPerson/InPerson"
import FeatureCard from './components/FeatureCard/FeatureCard';

function App() {
  const FeatureCards=[
    {
      "id":1,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-1.png",
      "title":"Work and Learn In-Office."
    },
    {
      "id":2,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-2.png",
      "title":"Build Full Stack Applications with complexity of Scale"
    },
    {
      "id":3,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-3.png",
      "title":"Collaborate with mentors and Peers in an innovation lab"
    },
    {
      "id":4,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-4.png",
      "title":"Gain Internship/Full Time Opportunities with Partner Orgs."
    },
    {
      "id":5,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-5.png",
      "title":"In-depth Practice Based Learning with rigorous coursework"
    },
    {
      "id":6,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-6.png",
      "title":"Accredited Certification of Tech Fellowship Program"
    }
  ];
  return (
    <div className="App">
      <div className="tech-fellowship-banner-container">
        <Banner/>
      </div>
      <div className="in-person-container">
        <InPerson/>
      </div>
      <div className="feature-container">
        <h3 className='feature-heading'>Features</h3>
        <p className='feature-para'>Gain Hands-on experience of building Full Stack Applications at scale, with teams in our innovation lab. </p>
        <div className="in-person-card-container">
          {FeatureCards.map((featurecard)=>(
            <FeatureCard key={featurecard.id} title={featurecard.title} imgsrc={featurecard.imgsrc} id={featurecard.id}/>
          ))}
        </div>
        <div className='div-center-btn'> 
          <button className='apply-now-btn btn-center'>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
