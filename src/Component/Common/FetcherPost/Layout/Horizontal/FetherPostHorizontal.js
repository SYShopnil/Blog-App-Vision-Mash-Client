import React from 'react'
import BlogOverview from '../../../BlogOverview/BlogOverview'

const FetherPostHorizontal = ({
    blogs
}) => {
  return (
    <div className = {`grid grid-rows-12 md:grid-cols-3 gap-4`}>
        {
          blogs.map ((blog, ind) => {
            return (
              <div>
                  <BlogOverview
                      data = {blogs[0]}
                      displayType = "TOP_BOTTOM"
                  />
              </div>
            )
          })
        }
    </div>
  )
}

export default FetherPostHorizontal