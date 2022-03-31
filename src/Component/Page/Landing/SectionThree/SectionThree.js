import React, {useState} from 'react'
import BlogOverview from '../../../Common/BlogOverview/BlogOverview'
import {
  blogDisplayType,
  fetcherPostDisplay
} from "../../../../LocalConfig/LandingPage/Landing"
import MostRead from '../../../Common/MostRead/MostRead'
import FetcherPost from '../../../Common/FetcherPost/FetcherPost'
import SectionTitle from '../../../Common/SectionTitle/SectionTitle'
import {sectionsTileName} from '../../../../LocalConfig/LandingPage/Landing'
const SectionThree = (
  {
    data
  }
) => {
  const [isBlogFound, setIsBlogFound] = useState ({
    leftSide: data.leftSide.isBlogFound,
    rightSide: {
      upperPart: data.rightSide.upper.isBlogFound,
      lowerPart: data.rightSide.lower.isBlogFound
    }
  }) 
  const [blogFoundMessage, setBlogFoundMessage] = useState({
    leftSide: data.leftSide.message,
    rightSide: {
      upperPart: data.rightSide.upper.message,
      lowerPart: data.rightSide.lower.message
    }
  })
  const [blogs, setBlogs] = useState({
    leftSide: data.leftSide.blogs,
    rightSide: {
      upperPart: data.rightSide.upper.blogs,
      lowerPart: data.rightSide.lower.blogs
    }
  })
  const [error, setIsError] = useState({
    leftSide: data.leftSide.error,
    rightSide: {
      upperPart: data.rightSide.upper.error,
      lowerPart: data.rightSide.lower.error
    }
  })
  // console.log(blogs.rightSide.upperPart)
  return (
    // section main wrapper
    <div>
      {/* section title */}
      {/* <div>
        <h1>Section Three</h1>
      </div>
       */}
      {/* content Wrapper */}
      <div className = {`grid md:grid-cols-3`}>
        {/* lef side part Wrapper */}
        <div className = {`grid grid-rows-12 md:grid-cols-2 gap-4 col-span-2`}>
          {
            blogs.leftSide.map ((blog, ind) => {
              if (ind == 0) {
                return (
                  <div className = {`md:col-span-2`}>
                    <BlogOverview
                        data = {blog}
                        displayType = {`${blogDisplayType.sectionThree.leftSide.firstOne}`}
                      />
                  </div>
                )
              }else {
                return (
                  <div className = {``}>
                    <BlogOverview
                        data = {blog}
                        displayType = {`${blogDisplayType.sectionThree.leftSide.restOne}`}
                      />
                  </div>
                )
              }
            } )
          }
        </div>

        {/* right side part wrapper */}
        <div className = {`ml-3`}>
          {/* upper part wrapper */}
          <div className = {`mt-3`}>
              <MostRead
                data = {blogs.rightSide.upperPart}
              />
          </div>

          {/* lower part wrapper */}
          <div>
            {/* title wrapper */}
            <div className = {`mt-3`} >
              <SectionTitle 
                title = {sectionsTileName.sectionThree.rightSide.lower}
              />
            </div>
            {/* content wrapper */}
            <div className = {`mt-3`} >
              <FetcherPost
                data = {blogs.rightSide.lowerPart}
                displayType = {fetcherPostDisplay.sectionThree}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SectionThree