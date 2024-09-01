import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './app.css'
import Banner from "./components/Banner/Banner"
import InPerson from "./components/InPerson/InPerson"
import FeatureCard from './components/FeatureCard/FeatureCard';
import OutlineCard from './components/OutlineCard/OutlineCard';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CourseCurriculum from './components/CourseCurriculum/CourseCurriculum';
import ProjectsCards from './components/ProjectsCards/ProjectsCards';
import PricingCard from './components/PricingCard/PricingCard';

function App() {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

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

  const OutlineCards=[
    {
      "id":1001,
      "imgsrc":["./src/assets/img/outline-card-icons/outline-card-icon-1.png"],
      "title":"Be a Frontend Developer",
      "topics":["Master HTML, CSS, and JavaScript to create dynamic and responsive web pages.", 
        "Dive into ReactJS to build interactive user interfaces."]
    },
    {
      "id":2001,
      "imgsrc":["./src/assets/img/outline-card-icons/outline-card-icon-2.png"],
      "title":"Be a Backend Developer",
      "topics":["Learn NodeJS or Java Springboot, API Design and Fundamentals of Data Structures and Algorithms"]
    },
    {
      "id":3001,
      "imgsrc":["./src/assets/img/outline-card-icons/outline-card-icon-3.png"],
      "title":"Be a Code Reviewer and Design Expert",
      "topics":["Learn Computer Science Fundamentals, Design Patterns, Concurrency"]
    },
    {
      "id":4001,
      "imgsrc":["./src/assets/img/outline-card-icons/outline-card-icon-4.png"],
      "title":"Be a Robust Problem Solver and Systems Expert",
      "topics":["Advance Data Structures and Algorithms, End to End Industry Project, System Design, DevOps, Docker and Kubernetes. "]
    },
    {
      "id":5001,
      "imgsrc":["./src/assets/img/outline-card-icons/outline-card-icon-5.png","./src/assets/img/outline-card-icons/outline-card-icon-6.png"],
      "title":"Launch Your Career",
      "topics":["Assured Paid Internship at a Startup/ In-house Paid Internship at Innovation Lab (Weekend Mentorship and Mock Interviews)"]
    }
  ];

  const ProjectCards=[
    {
      "id":1,
      "imgsrc":"./src/assets/img/projects-imgs/project-img-1.png",
      "heading":"Build an Inventory Management System for Farmley",
      "para":"This project will demonstrate your skills in web development, database integration, and security.",
      "tags":["Springdata JPA","MySQL or PostgreSQL","Spring Security"]
    },
    {
      "id":2,
      "imgsrc":"./src/assets/img/projects-imgs/project-img-2.png",
      "heading":"Build an Customer Grievance Management System for Ship Rocket",
      "para":"We will develop a microservice for user authentication and management. Users can register, log in, and manage their profiles through this service.",
      "tags":["Microservice","Docker","Kubernetes"]
    },
    {
      "id":3,
      "imgsrc":"./src/assets/img/projects-imgs/project-img-3.png",
      "heading":"Built a Fleet Performance for Blue Smart",
      "para":"This project will demonstrate your skills in web development, microservices architecture, and cloud computing.",
      "tags":["Web Devlopment","Cloud Computing","Microservice Architecture"]
    }
  ];

  const PricingPlans=[
    {
      "id":1,
      "plantag":"Basic",
      "trainingduration":"6 Weeks Training",
      "trainingprice":"Rs 24,999",
      "features":"Features"
    },
    {
      "id":2,
      "plantag":"Pro",
      "trainingduration":"12 Weeks Training",
      "trainingprice":"Rs 39,999",
      "features":"Features include in basic, plus"
    },
    {
      "id":3,
      "plantag":"Premium",
      "trainingduration":"24 Weeks Training",
      "trainingprice":"Rs 59,999",
      "features":"Features include in pro, plus"
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
      <div className="program-outline-container">
        <div className='program-outline-text-div'>
          <h2 className='program-outline-heading'>Program Outline</h2>
          <img className='program-outline-trending-icon' src="./src/assets/img/outline-card-icons/program-outline-trending-up.png" alt="" />
        </div>
        <div className="program-outline-cards-container">
          <Slider {...settings}>
          {
            OutlineCards.map((outlinecard,idx)=>
              (
                <OutlineCard key={idx} id={outlinecard.id} title={outlinecard.title} imgsrcs={outlinecard.imgsrc} topics={outlinecard.topics}/>
              )
            )
          }
          </Slider>
        </div>
      </div>
      <div className="how-it-works-section">
        <h2 className='how-it-works-heading'>How it works</h2>
          <HowItWorks/>
      </div>
      <div className="course-curriculum-container">
        <h2 className='course-curriculum-heading'>Course Curriculum</h2>
        <div className="course-curriculum-inner-container">
          <CourseCurriculum/>
        </div>
      </div>
      <div className="hand-on-projects-section">
        <h2 className='hands-on-projects-heading'>
          Learn by Building: Hands-On Projects for Real-World Mastery
        </h2>
        <div className='hands-on-projects-card-container'>
          {
            ProjectCards.map((projectCard)=>(
              <ProjectsCards 
              key={projectCard.id}
              imgsrc={projectCard.imgsrc} 
              heading={projectCard.heading} 
              para={projectCard.para} 
              tags={projectCard.tags}/>
            ))
          }
        </div>
        <button className="apply-now-btn">Apply Now</button>
      </div>
      <div className="pricing-plan-section">
        <h2 className="pricing-plan-heading">Pricing Plans</h2>
        <div className="pricing-plan-card-section">
          {
            PricingPlans.map((pricingplan)=>(
              <PricingCard
              key={pricingplan.id}
              plantag={pricingplan.plantag}
              trainingduration={pricingplan.trainingduration}
              trainingprice={pricingplan.trainingprice}
              features={pricingplan.features}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
