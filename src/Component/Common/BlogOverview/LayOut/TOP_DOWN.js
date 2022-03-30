import React from 'react'
import {connect} from "react-redux"
import {
    getTimeInFormat
} from "../../../../utils/DefaultFunction/getTime"
import ContentWrapper from './ContentWrapper/ContentWrapper'
import TOP_DOWN_Style from "./TOP_DOWN.module.css"

const TOP_DOWN = ({
  blog,
  rootCategories
}) => {
  const {
        contentDetails: {
            mainCategory,
            title,
            titlePic
        },
        publishedTime
    } = blog 
    const {
        month,
        date,
        year
    } = getTimeInFormat (new Date (+publishedTime))
    let categoryColor = "";
    rootCategories.forEach (category => {
        if (category.name == mainCategory) categoryColor =  category.color
    })
    // console.log(categoryColor)
    return (
      <div>
          <div>
            <img 
              src= {titlePic} 
              alt="" 
              className = {`${TOP_DOWN_Style.image}`}
              />
          </div>
          <div className = {`mt-5`}>
            <ContentWrapper
              categoryColor = {categoryColor}
              month = {month}
              date = {date}
              year = {year}
              mainCategory = {mainCategory}
              title = {title}
              displayType = {"TOP_BOTTOM"}
            />
          </div>
      </div>
    )
}
const mapStateToProps = (state) => {
    const {
        official: {
            officialData: {
                availableCategories
            }
        }
    } = state ;
    return {
        rootCategories: availableCategories
    }
}
export default connect (mapStateToProps) (TOP_DOWN)