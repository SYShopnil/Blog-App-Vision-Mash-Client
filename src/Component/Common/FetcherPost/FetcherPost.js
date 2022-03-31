import React from 'react'
import NotFound from '../NotFound/NotFound'
import availableFetcherDisplay from "../../../LocalConfig/Global/FetcherPostDisplayOption/FetcherOption"
import FetherPostVertical from './Layout/Vertical/FetherPostVertical'
import FetherPostHorizontal from './Layout/Horizontal/FetherPostHorizontal'


const FetcherPost = (
  {
    data: blogs,
    displayType
  }
) => {
  // console.log({displayType})
  if (blogs.length) {
    if (availableFetcherDisplay.HORIZONTAL == displayType) { //it will show the horizontal type layout
      return (
        <div>
          <FetherPostHorizontal
            blogs = {blogs}
          />
        </div>
      )
    }else if (availableFetcherDisplay.VERTICAL == displayType){ //it will show the vertical type layout
        return (
        <div>
          <FetherPostVertical
            blogs = {blogs}
          />
        </div>
      )
    }
  }else {
    return ( //it will execute if no blog has found
      <>
        <NotFound type = {"Blog"}/>
      </>
    )
  }
}

export default FetcherPost