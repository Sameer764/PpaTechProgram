import React, { useState } from 'react'
import './FaqAccordian.css'

function FaqAccordian() {
    const [selected,setSelected]=useState(null);
    function handleSingleSelection(currentId){
        setSelected(selected===currentId?null:currentId);
    }
    const faqdata=[
        {
            "id":1,
            "ques":"Can I join the program online?",
            "ans":"No, It is an immersive in-person program.",
        },
        {
            "id":2,
            "ques":"Do I get a Job at the end of the Program?",
            "ans":"Yes, You will be very well prepared for all Software Engineering Roles by the end of the Program.",
        },
        {
            "id":3,
            "ques":"How do I get an assured Internship?",
            "ans":"After completion of the program and 85% attendance on the 4-month coursework, we have assured paid internship opportunities.",
        },
        {
            "id":4,
            "ques":"What if I get a Job in between? ",
            "ans":"If you are part of TFP, we recommend you to finish at least 4 months and complete it. In case you decide to join the Job, you can quit the program. In that case, there will be no refunds. ",
        },
        {
            "id":5,
            "ques":"What is the Prerequisite for the Program? ",
            "ans":"We would like you to have a strong fundamental understanding of a Programming language and mathematical acumen. Except that, grit and perseverance, along with hard work will be required during the program.",
        },
        {
            "id":6,
            "ques":"Are lodging or food facilities included in the fees?",
            "ans":"No, we do not provide any lodging or food services. You must make these arrangements on your end.",
        },
        {
            "id":7,
            "ques":"What is the dress code to attend the program?",
            "ans":"There is no dress code but you are encouraged to dress in smart casuals.",
        },
        {
            "id":8,
            "ques":"What are the timings ?",
            "ans":"The exact timings will be shared before the program starts, but expect full-day sessions, Monday to Friday.",
        },
        {
            "id":9,
            "ques":"Am I eligible for the program if I hold “x” years of non-tech experience?",
            "ans":"As long as you are able to qualify the screening test and have a strong fundamental understanding of a Programming language and mathematical acumen, having non-tech experience should not be a roadblock.",
        },
        {
            "id":10,
            "ques":"Is there any certification provided? If so, what is the eligibility criteria?",
            "ans":"Yes, you will receive a certificate of completion upon successfully finishing the program. Performance shall be evaluated through project submissions, assessments on a regular basis.",
        },
        {
            "id":11,
            "ques":"What do I need to bring to the program on a daily basis?",
            "ans":"You should bring your own laptop and any other personal study materials.",
        },
        {
            "id":12,
            "ques":"Can I choose between the tech stack I want to learn or make a project on?",
            "ans":"This is one stop learning for all that you require for your first role. The tech stack and curriculum is curated by experts. We do not provide optional learning."
        }
    ]
  return (
    <div className='faq-accordian'>
      {
        faqdata.map((data)=>(
            <div className='faq-container' key={data.id}>
                <div className="faq-item" onClick={()=>handleSingleSelection(data.id)}>
                    <h3 className='faq-ques'>{data.ques}</h3>
                </div>
                {
                    (selected === data.id) ?
                    <div className='faq-ans'>{data.ans}</div>
                    : null
                }
                <hr className='faq-hr'/>
            </div>
        ))
      }
    </div>
  )
}

export default FaqAccordian
