import React from 'react'
import BlogOverview from '../../../BlogOverview/BlogOverview'
import availableBlogDisplayType from "../../../../../LocalConfig/Global/BlogOverview/BlogOverview"
const FetherPostVertical = ({
    blogs
}) => {
  return (
    <>
        {
            blogs.map ((blog, ind) => {
                return (
                    <div className = {`mb-2`} >
                        <BlogOverview
                            data = {blog}
                            displayType = {availableBlogDisplayType.OVERLAP}
                        />
                    </div>
                )
            })
        }
    </>
  )
}

export default FetherPostVertical