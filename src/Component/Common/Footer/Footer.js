import React from 'react'
import {connect} from "react-redux"
import {
  copyRight,
  firstColumnData,
  secondColumnData,
  thirdColumnData,
  fourthColumnData
} from "../../../LocalConfig/Footer/FooterConfig"
import capitalizedConvertor from "../../../utils/DefaultFunction/convertToCapitalized"
import NewsLetter from '../../Page/Landing/Footer/NewsLetter'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faFacebookSquare,
    faYoutubeSquare,
    faInstagramSquare,
    faGithubSquare,
    faPinterestSquare,
    faTwitterSquare,
    faGooglePlusSquare
} from "@fortawesome/free-brands-svg-icons"
import FooterStyle from "./Footer.module.css"

const Footer = ({
  companyLogo,
  existCategories,
  availableSocialMedia,
  contactSocialMedia
}) => {
  return (
    <div className = {`grid grid-row-12 lg:grid-cols-5 gap-3`}>
      
      {/* 1st column part (company name part) */}
      <section className = {`lg:col-span-2 p-12`}>
        {/* logo part or title part*/}
        <div>
          <img src= {companyLogo} alt="" />
        </div>

        <div className = {`mt-5`}>
            {
              firstColumnData.content.map ((element, ind) => {
                const content = capitalizedConvertor (element) //it will convert all string to capitalized format which connect with (_) underscore
                return (
                  <a key = {ind} href="" className = {`mr-2 ${FooterStyle.contentFont} ${FooterStyle.contentFontAlphabet}`} >{content} </a>
                )
              })
            }
        </div>
        <div className = {`mt-4`} >
          <p className = {`${FooterStyle.contentFont}`}>{copyRight}</p>
        </div>
      </section>

      {/* 2nd column part (About us part) */}
      <section className = {` p-12`}>
        {/* title part */}
        <div className = {`font-bold text-lg`}>
            <h1>{capitalizedConvertor (secondColumnData.title )}</h1>
        </div>

        {/* content part */}
        <div className = {`mt-5`} >
          {
            secondColumnData.content.map ((data, ind) => {
              const content = capitalizedConvertor (data)
              return (
                <div className = {`${FooterStyle.contentFont} ${FooterStyle.contentFontAlphabet}`} key = {ind} >
                  <a  href="">{content}</a>
                </div>
              )
            })
          }
        </div>
      </section>

      {/* 3rd column part (Categories part) */}
      <section  className = {` p-12`} >
        {/* title part */}
        <div className = {`font-bold text-lg`} >
            <h1>{capitalizedConvertor (thirdColumnData.title )}</h1>
        </div>

        {/* content Part */}
        <div className = {`mt-5`} >
          {
            existCategories.map ((category, ind) => {
              return (
                <div className = {`${FooterStyle.contentFont} ${FooterStyle.contentFontAlphabet}`} key = {ind} >
                  <a href="">{category}</a>
                </div>
              )
            })
          }
        </div>
      </section>

      {/* 4rth column part (Join our news letter) */}
      <section  className = {` p-12`} >
        {/* title part */}
        <div className = {`font-bold text-lg`} >
            <h1>{capitalizedConvertor (fourthColumnData.title )}</h1>
        </div>

        {/* news letter part */}
        <div className = {`mt-5`}>
            <NewsLetter placeHolderOfLetter = {fourthColumnData.emailPlaceHolder}/>
        </div>

        {/* social media part */}
        <div>
          {
            contactSocialMedia.map ((contactMedial) => { //get all company own contact social media which is only for the company .
              const {siteName:companySiteName} = contactMedial //get the company social media  name
              return (availableSocialMedia.map (availableSocialMedia => {
                const {siteName: availableSiteName} = availableSocialMedia //get the  global available site name which is available fro everyone
                if (companySiteName == availableSiteName ) { //incomplete
                  const icon = availableSocialMedia.logo
                  return (
                    <>
                      <i className= {`${icon}`}></i>
                    </>
                  )
                }
              }) )
            })
          }
        </div>
      </section>

      
    </div>
  )
}

const mapStateToProps = (state) => {
  const {
    official: {
      officialData: {
        logo,
        navbarSelectCategory,
        selectSocialMedia,
        availableSocialMedia
      }
    }
  } = state //get the global state data of official information
  return {
    companyLogo: logo,
    existCategories: navbarSelectCategory,
    contactSocialMedia: selectSocialMedia,
    availableSocialMedia: availableSocialMedia
  }
}

export default connect (mapStateToProps) (Footer)