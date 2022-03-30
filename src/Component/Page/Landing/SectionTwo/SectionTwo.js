import React, {useState} from 'react'
import BlogOverview from '../../../Common/BlogOverview/BlogOverview'
import {
  blogDisplayType,
  sectionsTileName
} from "../../../../LocalConfig/LandingPage/Landing.js"
import CommonLayoutStyle from "../CommonStyle.module.css"

const SectionTwo = (
  {
    data
  }
) => {
  const [isBlogFound, setIsBlogFound] = useState (data.isBlogFound) 
  const [blogFoundMessage, setBlogFoundMessage] = useState(data.message)
  const [blogs, setBlogs] = useState(data.blogs)
  const [error, setIsError] = useState(data.error)
  return (
    <div>
      {/* title part */}
      <div className = {`mb-6 h-10 font-bold text-3xl ${CommonLayoutStyle.titleFont}`}>
          <h1>{sectionsTileName.sectionTwo}</h1>
      </div>

      {/* content part */}
      <div className = {`grid grid-rows-12 md:grid-cols-3 gap-5`}>
        
        {
          blogs.map ((blog, ind) => {
            return (
              <div className = {`mb-3`}>
                <BlogOverview
                  data = {blog}
                  displayType = {blogDisplayType.sectionTwo}
                  key = {ind}
                />
              </div>
            )
          })
        }
    </div>
    </div>
  )
}

export default SectionTwo