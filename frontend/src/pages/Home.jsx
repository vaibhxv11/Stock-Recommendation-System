import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
import Footer from "../components/common/Footer"
// Component Imports

import CTAButton from "../components/core/Homepage/Button"
import HighlightText from "../components/core/Homepage/HighlightText"
import CodeBlocks from "../components/core/Homepage/CodeBlocks"
import TimelineSection from "../components/core/Homepage/TimelineSection"
import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection"
import InstructorSection from "../components/core/Homepage/InstructorSection"
import ExploreMore from "../components/core/Homepage/ExploreMore"
export const Home = () => {
  return (
    <div >

      {/* Section 1 */}
      <div className='realtive mx-auto flex w-10/12 max-w-maxContent flex-col  items-center justify-between gap-8 text-white'>
      {/* //become instructor button */}
      <Link to={"/signup"}>
      <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]  transition-all duration-200 hover:scale-195 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">

        
            <p>Become an Instructor</p>
            <FaArrowRight/>
          </div>
        </div>
      </Link>
      
  {/* Heading */}
  <div className="text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>
      
        {/* Sub Heading */}
        <div className="mt-2 w-[70%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* CTA Button */}
        <div className='mt-8 flex flex-row gap-7'>
          <CTAButton active={true} linkto={"/signup"}>
             Learn More
          </CTAButton>
          <CTAButton  active={false} linkto={"/login"}>
             Book a Demo
            </CTAButton>

        </div>

          {/* Video */}
          <div className=" w-[65%]  mx-3 my-8 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className=" shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}

        <div>
          <CodeBlocks
            position={"lg:glex-row"}  
            heading = {
              <div className="text-4xl font-semibold">
              Unlock your
              <HighlightText text={"coding potential"} /> with our online courses.
            </div>

            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }

            ctabtn1={{
                text: "Try it Yourself" ,
                link :"/signup" ,
                active :true ,
              }}

              ctabtn2={{
                text :"Learn More" ,
                  link :"/signup" ,
                  active :false ,
                }}

            codeColor={"text-yellow-25"} 
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage . I am Vaibhav</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}

            
            />
      
      </div>

       {/* Code Section 2 */}

       <div className='mb-22'>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[65%]">
                Start <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              text: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              text: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* //explore more   */}
        <ExploreMore/>

      </div>


      {/* Section 2 */}
      
          
        <div className=' bg-pure-greys-5 text-richblack-700'>
          <div className='homepage-bg h-[350px] '>

            <div className='w-11/12 max-w-maxContent flex  flex-col items-center justify-between gap-5 mx-auto'>
           <div className='h-[150px]'></div>
           <div className='flex flex-row gap-7 text-white'>
            <CTAButton active={true} linkto={"/signup"}>
              <div className='flex flex-row gap-3 items-center'>
                 Explore Full Catalog
                  <FaArrowRight/>
                </div>
             
               
            </CTAButton>

            <CTAButton active={false} linkto={"/signup"}>
              <div>
                 Learn More
                 </div>
                  
            </CTAButton>      
           


          </div>


        </div>
        </div>

        <div className='mx-auto w-11/12 max-w-maxContent pb-36  flex flex-col items-center justify-between '>

          <div className='flex flex-row  mt-20 justify-between'> 
          
          <div className='w-[45%] font-inter font-semibold text-5xl'>
            Get the Skills you need for a <HighlightText text={"job that is in demand" }/>

          </div>
         
            <div className='flex flex-col  items-start w-[45%]'>
              <div  className='text-richblck-900 mb-8 font-semibold '>
                The Modern StudyNotion is the dictates its own terms .Today, to be 
                a competitive specialist require more than professional skills
              </div>
              <div className=''>
              <CTAButton active={true} linkto={"/signup"}>
                Learn More

              </CTAButton>
              </div>
              </div>

            


        </div>

        <TimelineSection/>
        <LearningLanguageSection/>

        </div>


       </div>
        
        
      {/* Section 3 */}
      <div className='w-11/12 mb-10 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
         
         <InstructorSection/>
         <h2 className='text-center text-4xl font-semibold mt-14'>
          Review from Other Learners
         </h2>
        
        </div>
      {/* Footer */}
      <div>
        <Footer/>
        
        </div>


    
    </div>
  )
}


export default Home;
