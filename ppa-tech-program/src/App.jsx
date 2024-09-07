import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './app.css'
import './appresponsive.css'
import Banner from "./components/Banner/Banner"
import InPerson from "./components/InPerson/InPerson"
import FeatureCard from './components/FeatureCard/FeatureCard';
import OutlineCard from './components/OutlineCard/OutlineCard';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CourseCurriculum from './components/CourseCurriculum/CourseCurriculum';
import ProjectsCards from './components/ProjectsCards/ProjectsCards';
import PricingCard from './components/PricingCard/PricingCard';
import SuccessStoriesCard from './components/SuccessStoriesCard/SuccessStoriesCard';
import FaqAccordian from './components/FaqAccordian/FaqAccordian';
import GalleryCard from './components/GalleryCard/GalleryCard';
import SuccessNextArrow from './components/SuccessCustomArrow/SuccessNextArrow'
import SuccessPrevArrow from './components/SuccessCustomArrow/SuccessPrevArrow';
import OutlineNextArrow from './components/OutlineArrow/OutlineNextArrow';
import OutlinePrevArrow from './components/OutlineArrow/OutlinePrevArrow';

function App() {
  const settings1 = {
    // dots: true,
    className:"outline-arrow",
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <OutlineNextArrow className={"outline-next-arrow"}/>,
    prevArrow: <OutlinePrevArrow className={"outline-next-arrow"}/>
  };
  const settings2 = {
    className:"success-arrow",
    infinite: true,
    autoplay:true,
    speed: 700,
    arrows:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    intialSlide: 0,
    nextArrow: <SuccessNextArrow />,
    prevArrow: <SuccessPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]

  };
  const settings3 = {
    // className:"success-arrow",
    infinite: true,
    autoplay:true,
    speed: 700,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          intialSlide:0,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };
  const FeatureCards=[
    {
      "id":1,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-1.svg",
      "title":"Work and Learn In-Office."
    },
    {
      "id":2,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-2.svg",
      "title":"Build Full Stack Applications with complexity of Scale"
    },
    {
      "id":3,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-3.svg",
      "title":"Collaborate with mentors and Peers in an innovation lab"
    },
    {
      "id":4,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-4.svg",
      "title":"Gain Internship/Full Time Opportunities with Partner Orgs."
    },
    {
      "id":5,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-5.svg",
      "title":"In-depth Practice Based Learning with rigorous coursework"
    },
    {
      "id":6,
      "imgsrc":"./src/assets/img/feature-card-img/feature-card-img-6.svg",
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
      "imgsrc":"./src/assets/img/projects-imgs/project-img-1.svg",
      "heading":"Build an Inventory Management System for Farmley",
      "para":"This project will demonstrate your skills in web development, database integration, and security.",
      "tags":["Springdata JPA","MySQL or PostgreSQL","Spring Security"]
    },
    {
      "id":2,
      "imgsrc":"./src/assets/img/projects-imgs/project-img-2.svg",
      "heading":"Build an Customer Grievance Management System for Ship Rocket",
      "para":"We will develop a microservice for user authentication and management. Users can register, log in, and manage their profiles through this service.",
      "tags":["Microservice","Docker","Kubernetes"]
    },
    {
      "id":3,
      "imgsrc":"./src/assets/img/projects-imgs/project-img-3.svg",
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

  const SuccessCards=[
    {
      "id":1,
      "reviewtext":"The course covers everything in depth and in a very structured way. There is never enough to learn and grow. I felt very prepared for my interviews after being a part of this course, and could enhance my DSA and problem solving skills in greater depth.",
      "imgsrc":"./src/assets/img/success-stories-img/success-stories-img-1.png",
      "studentname":"Balvinder Kaur",
      "companylogo":"./src/assets/img/success-stories-img/success-stories-company-1.png"
    },
    {
      "id":2,
      "reviewtext":"Fortunately, came across Programming Pathshala on Quora and I was amazed to see awesome reviews. I went through the website and checked the Curriculum, and moreover the fee of the course was in my budget.",
      "imgsrc":"./src/assets/img/success-stories-img/success-stories-img-2.png",
      "studentname":"Ayush Srivasthva",
      "companylogo":"./src/assets/img/success-stories-img/success-stories-company-2.png"
    },
    {
      "id":3,
      "reviewtext":"Thanks to the remarkable course - Low Level Design, I am now skilled at navigating complex architectural challenges, evaluating multiple solutions with precision, and making informed decisions by weighing their respective advantages and disadvantages.",
      "imgsrc":"./src/assets/img/success-stories-img/success-stories-img-3.png",
      "studentname":"Chetan Verma",
      "companylogo":"./src/assets/img/success-stories-img/success-stories-company-3.png"
    },
    {
      "id":1,
      "reviewtext":"The course covers everything in depth and in a very structured way. There is never enough to learn and grow. I felt very prepared for my interviews after being a part of this course, and could enhance my DSA and problem solving skills in greater depth.",
      "imgsrc":"./src/assets/img/success-stories-img/success-stories-img-1.png",
      "studentname":"Balvinder Kaur",
      "companylogo":"./src/assets/img/success-stories-img/success-stories-company-1.png"
    },
    {
      "id":2,
      "reviewtext":"Fortunately, came across Programming Pathshala on Quora and I was amazed to see awesome reviews. I went through the website and checked the Curriculum, and moreover the fee of the course was in my budget.",
      "imgsrc":"./src/assets/img/success-stories-img/success-stories-img-2.png",
      "studentname":"Ayush Srivasthva",
      "companylogo":"./src/assets/img/success-stories-img/success-stories-company-2.png"
    },
  ]

  const GalleryCards=[
    {
      "id":1,
      "imgsrc":"./src/assets/img/have-more-crousel-card-img/gallery-img-1.webp",
    },
    {
      "id":2,
      "imgsrc":"./src/assets/img/have-more-crousel-card-img/gallery-img-2.webp",
    },
    {
      "id":3,
      "imgsrc":"./src/assets/img/have-more-crousel-card-img/gallery-img-3.webp",
    },
    {
      "id":4,
      "imgsrc":"./src/assets/img/have-more-crousel-card-img/gallery-img-4.webp",
    },
    {
      "id":5,
      "imgsrc":"./src/assets/img/have-more-crousel-card-img/gallery-img-5.webp",
    }
  ]

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
          <Slider {...settings1}>
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
      <div className="success-stories-section">
        <h2 className='success-stories-heading'>Success Stories</h2>
        <div className="success-stories-card-container">
          <Slider {...settings2}>
            {
              SuccessCards.map((successcard)=>(
                <SuccessStoriesCard
                key={successcard.id}
                reviewtext={successcard.reviewtext}
                imgsrc={successcard.imgsrc}
                studentname={successcard.studentname}
                companylogo={successcard.companylogo}
                />
              ))
            }
          </Slider>
        </div>
        <button className='read-more-btn'>Read More Stories</button>
      </div>
      <div className="why-tech-fellowship-program-section">
        <h2 className="why-tech-fellowship-heading">
          Why Tech Fellowship Program 
        </h2>
        <div className="why-tech-fellowship-program-table-container">
          <table className='why-tech-fellowship-program-table'>
            <tr>
              <th>Online Program</th>
              <th>Classroom Program</th>
              <th>Tech Fellowship Program</th>
            </tr>
            <tr>
              <td>No or Broken Mentorship</td>
              <td>No 1:1 Mentorship</td>
              <td>1:1 F2F Mentorship</td>
            </tr>
            <tr>
              <td>No Industry Exposure</td>
              <td>No Industry Exposure</td>
              <td>Industry Exposure</td>
            </tr>
            <tr>
              <td>Toy Projects</td>
              <td>Toy Projects</td>
              <td>Real projects, MVPs, Hosted applications</td>
            </tr>
            <tr>
              <td>1:1 F2F Mentorship</td>
              <td>No Internships</td>
              <td>Assured onsite Internships</td>
            </tr>
            <tr>
              <td>No Peer Group Learning</td>
              <td>Little peer interaction</td>
              <td>In-built team with Product managers, UI experts, tech leads</td>
            </tr>
            <tr>
              <td>Very Slow Learning</td>
              <td>Slow pace for Huge Groups</td>
              <td>Very High pace of learning</td>
            </tr>
            <tr>
              <td>No Personalized Path</td>
              <td>No Personalisation</td>
              <td>Hyper-Personalized for you</td>
            </tr>
            <tr>
              <td>No ecosystem</td>
              <td>Classroom ecosystem</td>
              <td>Corporate style Learn-as-you-work Ecosystem</td>
            </tr>
            <tr>
              <td>No Discipline</td>
              <td>Little Discipline</td>
              <td>Fun while being disciplined</td>
            </tr>
            <tr>
              <td>Consistency Issues</td>
              <td>Less Consistency Issues</td>
              <td>No consistency Issues, improved leadership and behavioral traits</td>
            </tr>
            <tr>
              <td>Lonely Path, with you on your own</td>
              <td>One to Many Learning Experience</td>
              <td>Immersive Work Experience</td>
            </tr>
          </table>
        </div>
        <div className="why-tech-fellowship-program-table-mobile">
          <table>
            <tr>
              <th></th>
              <th>Online</th>
              <th>Classroom</th>
              <th>TFP</th>
            </tr>
            <tr>
              <td>1:1 F2F Mentorship</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>Industry Exposure</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>Real projects, MVPs, Hosted applications</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>Assured Onsite Internships</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>In-Built Team with Product Managers, UI Experts, Tech Leads</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>Very High pace of learning</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>Hyper-Personalised for you</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>Corporate style Learn-as-you-work Ecosystem</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>Fun while being disciplined </td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>No consistency Issues, improved leadership and behavioral traits</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
            <tr>
              <td>Immersive Work Experience</td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/cross-icon.svg'/></td>
              <td><img src='./src/assets/img/tech-fellowship-table-icon/checked-icon.svg'/></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="frequently-asked-question-section">
        <h2 className='frequently-asked-heading'>
          Frequently Asked Questions
        </h2>
        <FaqAccordian/>
      </div>
      <div className="have-more-questions">
        <h2 className="have-more-heading">Have more questions?</h2>
        <div className='talk-to-us-btn-div'>
          <button className='talk-to-us-btn'>
            <p>Talk to use</p>
            <img src="./src/assets/img/have-more-crousel-card-img/whatsapp-icon.svg" alt="whatsapp-icon" />
          </button>
        </div>
        <div className="have-more-crousel-container">
          <Slider {...settings3}>
            {GalleryCards.map((gallerycard)=>(
              <GalleryCard key={gallerycard.id} imgsrc={gallerycard.imgsrc}/>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default App
