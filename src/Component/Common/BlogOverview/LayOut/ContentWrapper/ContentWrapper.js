import React from 'react'
import  OverLapStyle from "../OVARLAY.module.css"
import  TOP_BOTTOM_STYLE from "../TOP_DOWN.module.css"
import availableDisplayType from "../../../../../LocalConfig/Global/BlogOverview/BlogOverview"
const ContentWrapper = (
    {
        categoryColor,
        month,
        date,
        year,
        mainCategory,
        title,
        displayType
    }
) => { 
    const localStyleConfig = {
        titleWrap: "",
        categoryAndDateFont: "",
        categoryFont: "",
        dateFont: ""
    }
    //if display type is over lap
    if (availableDisplayType.OVERLAP == displayType) {
        localStyleConfig.categoryAndDateFont = OverLapStyle.CategoryAndDateFontPart
        localStyleConfig.titleWrap = OverLapStyle.TitlePartWrapper
        localStyleConfig.categoryFont = OverLapStyle.CategoryFont
    }
  
    //if display type is Top Bottom
    if (availableDisplayType.TOP_BOTTOM == displayType) {
        localStyleConfig.categoryAndDateFont = TOP_BOTTOM_STYLE.CategoryAndDateFontPart
        localStyleConfig.titleWrap = TOP_BOTTOM_STYLE.TitlePartWrapper
        localStyleConfig.categoryFont = TOP_BOTTOM_STYLE.CategoryFont
        localStyleConfig.dateFont = TOP_BOTTOM_STYLE.DateFont
    }
    return (
        <div>
            <div className = {`flex mb-2`}>
                <h2 
                className = {`pr-4  ${localStyleConfig.categoryAndDateFont} ${localStyleConfig.categoryFont}`}
                    style = {{
                        background: categoryColor
                    }}
                >{mainCategory}</h2>
                <p  className = {` ${localStyleConfig.categoryAndDateFont} ${localStyleConfig.dateFont}`}>{month} {date}, {year}</p>
            </div>
            <h1 className = {` ${localStyleConfig.titleWrap}`}>{title}</h1>
        </div>
    )
}

export default ContentWrapper