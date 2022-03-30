import React from 'react'
import Image from "next/image"
import {
    getTimeInFormat
} from "../../../../utils/DefaultFunction/getTime"
import parentStyle from "./OVARLAY.module.css"
import {connect} from "react-redux"
import ContentWrapper from './ContentWrapper/ContentWrapper'
import OverLayStyle from "./OVARLAY.module.css"

const OVERLAY = ({
    blog,
    rootCategories
}) => {
    // console.log({blog})
    // console.log({rootCategories})
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
    let categoryColor = ""
    rootCategories.forEach (category => {
        if (category.name == mainCategory) categoryColor =  category.color
    })
    console.log(categoryColor)
    return (
        //content wrapper
        <div className = {`${parentStyle.container}`}>
            {/* image part wrapper */}
            <div>
                <img src= {titlePic} alt="" className = {`${parentStyle.image}`}/>
            </div>
            {/* content part wrap */}
            <div className = {`${parentStyle.containerRelative } ${OverLayStyle.ContentWrapper}  py-5 `} >
                <ContentWrapper
                    categoryColor = {categoryColor}
                    title = {title}
                    month = {month}
                    date = {date}
                    year = {year}
                    mainCategory = {mainCategory}
                    displayType = {"OVERLAP"}
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

export default connect (mapStateToProps) (OVERLAY)
