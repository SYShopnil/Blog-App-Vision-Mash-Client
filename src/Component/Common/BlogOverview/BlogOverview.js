import React from 'react'
import availableDisplayType from  "../../../LocalConfig/Global/BlogOverview/BlogOverview"
import OVERLAY from './LayOut/OVERLAY'
import RIGHT_LEFT from './LayOut/RIGHT_LEFT'
import TOP_DOWN from './LayOut/TOP_DOWN'

const BlogOverview = ({
    data:blog,
    displayType
}) => {
    if (availableDisplayType.OVERLAP == displayType) {
      return (
        <OVERLAY
            blog = {blog}
        />
      )
    }
    if (availableDisplayType.RIGHT_LEFT == displayType) {
       return (
        <RIGHT_LEFT
            blog = {blog}
        />
      )
    }
    if (availableDisplayType.TOP_BOTTOM == displayType) {
      return (
        <TOP_DOWN
            blog = {blog}
        />
      )
    }
}

export default BlogOverview