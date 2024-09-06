import React from 'react'
import { useState } from 'react'
import './CourseCurriculum.css'
import './CourseResponsive.css'


function CourseCurriculum() {
  const modules=[
    {
      "id":1,
      "topics":[
        "OOPS Concepts and Design Principles.",
        "Reflection, java.lang.reflect library and its relevance in Spring.",
        "Exception Handling in a production system.",
        "Maven - Build Automation Tool, Dependencies, Jar files etc"
      ]
    },
    {
      "id":2,
      "topics":[
        "Core concepts : Dependency Injection and Inversion of Control.",
        "Beans and Types of Autowiring.",
        "In-depth exploration of the Codebase of Spring MVC and its low level architecture - Dispatcher Servlet, Handler Mappings, Adapters, Execution Chains and many more…",
        "Interceptors, Filters and User defined customisations.",
        "Different ways of handling exceptions and their translations.",
        "Reading and managing Config files.",
        "Journey of a Web Request till API layer."
      ]
    },
    {
      "id":3,
      "topics":[
        "Threads, Locks and Race Conditions",
        "Memory Visibility issues",
        "Thread Signaling and Synchronisation",
        "Producer Consumer Problem",
        "Thread Pools and Executor Service"
      ]
    },
    {
      "id":4,
      "topics":[
        "Architecture and Codebase of JDBC : DB Drivers, Connections, ResultSets and many more",
        "Batch Queries, Connection Pools and Prepared Statements.",
        "Object Oriented vs Relational Paradigm.",
        "Internals of JPA and Hibernate : Entities, State Management, Dirty Checking etc",
        "Some Handy Annotations and Constructs in Hibernate.",
        "Modeling Join operations on Tables, Lazy vs Eager loading of data.",
        "Transactions"
      ]
    },
    {
      "id":5,
      "topics":[
        "Proxy Classes, Associations and their applications.",
        "JPQL, Custom Queries etc",
        "Useful annotations"
      ]
    },
    {
      "id":6,
      "topics":[
        "Difference between authentication and authorization.",
        "Brute-force way of authentication.",
        "JWT way of authentication.",
        "Different types of web vulnerabilities."
      ]
    },   
  ]

  const [selected,setSelected]=useState(0);
  const [selectModule,setSelectModule]=useState({...modules[0]});
  const handleSelectModule=(idx)=>{
    setSelectModule({...modules[idx]});
    setSelected(idx);
  }

  return (
    <>
      <div className="course-curriculum-left">
        <div className={selected===0?`module module-1 active-module`:`module module-1`} onClick={()=>handleSelectModule(0)}>
            <span className='month-span'>1st Month</span>
            <span className='module-span'>Module 1</span>
        </div>
        {
          selected===0 ?
          <div className="course-curriculum-right-mobile course-curriculum-right">
            <h3 className='topics-heading'>Topics</h3>
            <hr className='topics-hr' />
            <ul className='topics-div'>
              {
                selectModule.topics.map((topic,idx)=>(
                  <li className='topics-item' key={idx}>{topic}</li>
                ))
              }
            </ul>
          </div> : null
        }
        <div className={selected===1?`module module-2 active-module`:`module module-2`} onClick={()=>handleSelectModule(1)}>
            <span className='month-span'>2nd Month</span>
            <span className='module-span'>Module 2</span>
        </div>
        {
          selected===1 ?
          <div className="course-curriculum-right-mobile course-curriculum-right">
            <h3 className='topics-heading'>Topics</h3>
            <hr className='topics-hr' />
            <ul className='topics-div'>
              {
                selectModule.topics.map((topic,idx)=>(
                  <li className='topics-item' key={idx}>{topic}</li>
                ))
              }
            </ul>
          </div> : null
        }
        <div className={selected===2?`module module-3 active-module`:`module module-3`} onClick={()=>handleSelectModule(2)}>
            <span className='month-span'>3rd Month</span>
            <span className='module-span'>Module 3</span>
        </div>
        {
          selected===2 ?
          <div className="course-curriculum-right-mobile course-curriculum-right">
            <h3 className='topics-heading'>Topics</h3>
            <hr className='topics-hr' />
            <ul className='topics-div'>
              {
                selectModule.topics.map((topic,idx)=>(
                  <li className='topics-item' key={idx}>{topic}</li>
                ))
              }
            </ul>
          </div> : null
        }
        <div className={selected===3?`module module-4 active-module`:`module module-4`} onClick={()=>handleSelectModule(3)}>
            <span className='month-span'>4th Month</span>
            <span className='module-span'>Module 4</span>
        </div>
        {
          selected===3 ?
          <div className="course-curriculum-right-mobile course-curriculum-right">
            <h3 className='topics-heading'>Topics</h3>
            <hr className='topics-hr' />
            <ul className='topics-div'>
              {
                selectModule.topics.map((topic,idx)=>(
                  <li className='topics-item' key={idx}>{topic}</li>
                ))
              }
            </ul>
          </div> : null
        }
        <div className={selected===4?`module module-5 active-module`:`module module-5`} onClick={()=>handleSelectModule(4)}>
            <span className='month-span'>5th Month</span>
            <span className='module-span'>Module 5</span>
        </div>
        {
          selected===4 ?
          <div className="course-curriculum-right-mobile course-curriculum-right">
            <h3 className='topics-heading'>Topics</h3>
            <hr className='topics-hr' />
            <ul className='topics-div'>
              {
                selectModule.topics.map((topic,idx)=>(
                  <li className='topics-item' key={idx}>{topic}</li>
                ))
              }
            </ul>
          </div> : null
        }
        <div className={selected===5?`module module-6 active-module`:`module module-6`} onClick={()=>handleSelectModule(5)}>
            <span className='month-span'>6th Month</span>
            <span className='module-span'>Module 6</span>
        </div>
        {
          selected===5 ?
          <div className="course-curriculum-right-mobile course-curriculum-right">
            <h3 className='topics-heading'>Topics</h3>
            <hr className='topics-hr' />
            <ul className='topics-div'>
              {
                selectModule.topics.map((topic,idx)=>(
                  <li className='topics-item' key={idx}>{topic}</li>
                ))
              }
            </ul>
          </div> : null
        }
      </div>
      <div className="course-curriculum-right-web course-curriculum-right">
        <h3 className='topics-heading'>Topics</h3>
        <hr className='topics-hr' />
        <ul className='topics-div'>
          {
            selectModule.topics.map((topic,idx)=>(
              <li className='topics-item' key={idx}>{topic}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default CourseCurriculum
