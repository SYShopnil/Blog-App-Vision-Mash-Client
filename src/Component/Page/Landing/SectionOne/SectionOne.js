import React, {useState} from 'react'
import BlogOverview from '../../../Common/BlogOverview/BlogOverview'
import {
  blogDisplayType
} from "../../../../LocalConfig/LandingPage/Landing"

const SectionOne = ({
  data
}) => {
  const [isBlogFound, setIsBlogFound] = useState (data.isBlogFound) 
  const [blogFoundMessage, setBlogFoundMessage] = useState(data.message)
  const [blogs, setBlogs] = useState(data.blogs)
  const [error, setIsError] = useState(data.error)
  return (
    <div className = {`grid grid-rows-12 md:grid-cols-2 gap-4`}>
        {
          blogs.map ((blog, ind) => {
            return (
              <BlogOverview key = {ind} data = {blog} displayType = {blogDisplayType.sectionOne}/>
            )
          })
        }
    </div>
  )
}

export default SectionOne