import React, {useEffect} from 'react'
import Footer from '../../Component/Common/Footer/Footer'
import Navbar from '../../Component/Common/Navbar/Navbar'
import {connect} from "react-redux"
import {
  getOfficialData
} from "../../../src/Store/Official/action/Action"
import { Html, Head, Main, NextScript } from 'next/document'
import LayoutStyle from "./MainLayout.module.css"
import axios from 'axios'
import GqAPI from "../../GraphQL/API/API"

const MainLayout = ({children, isLoading, getAll}) => {
  getAll();
  // useEffect (() => {
  //   const body = {
  //     query: `
  //        query blogs ($queryCommand: String, $limit: String){
  //           blogs (
  //               queryBy: $queryCommand,
  //               dataLimit: $limit
  //           ) {
  //               message
  //               status
  //           }
  //       }
  //     `,
  //     variables: {
  //       queryCommand: "recent",
  //       limit: "6"
  //     }
  //   }
  //   axios.post (GqAPI.blog, body)
  //    .then (data => {
  //      console.log(data.data)
  //    })
  //    .catch (err => {
  //      console.log(err)
  //    })
  // })
  if (isLoading) { //whole webPage will be pass a loading phase after verify all necessary step like get all official data including user logged in status
    return (
      <>Loading...</>
    )
  }else {
    return (
      <div>
          {/* header part */}
         <head className = {`${LayoutStyle.HeadercContainer_fluid} ${LayoutStyle.layoutHeaderBorder}`}>
            <div className = {`${LayoutStyle.HeaderContainer}`}>
              <Navbar/>
            </div>
         </head>

          {/* Content part */}
          <body className = {`${LayoutStyle.bodyContainer_Fluid}`}>
            <div className = {`${LayoutStyle.bodyContainer}`}>
              {
                  children
              }
            </div>
          </body>

          {/* Footer part */}
          <footer className = {`${LayoutStyle.HeadercContainer_fluid} ${LayoutStyle.footerWrapper} `} >
            <div className = {`${LayoutStyle.HeaderContainer}`}>
               <Footer/>
            </div>
          </footer>
      </div>
    )
  }
  
}
const mapStateToProps = (state) => {
  const {
    official: {
      isLoading
    }
  } = state

  return {
    isLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAll : () => dispatch (getOfficialData())
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (MainLayout)