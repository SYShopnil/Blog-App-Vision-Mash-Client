import React, {useState} from 'react'
import SectionTitle from "../../../Common/SectionTitle/SectionTitle"
import {sectionsTileName} from "../../../../LocalConfig/LandingPage/Landing"
import FetcherPost from "../../../Common/FetcherPost/FetcherPost"

const SectionFour = ({data}) => {
  const [isBlogFound, setIsBlogFound] = useState (data.isBlogFound) 
  const [blogFoundMessage, setBlogFoundMessage] = useState(data.message)
  const [blogs, setBlogs] = useState(data.blogs)
  const [error, setIsError] = useState(data.error)
  return (
    <div>
       <div className = {`text-center mb-5`}>
         <SectionTitle 
          title = {sectionsTileName.sectionFour}
        />
       </div>

       <div>
         <FetcherPost 
            data = {blogs}
            displayType = "HORIZONTAL"
         />
       </div>
    </div>
  )
}

export default SectionFour