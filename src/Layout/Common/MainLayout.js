import React from 'react'
import Footer from '../../Component/Common/Footer/Footer'
import Navbar from '../../Component/Common/Navbar/Navbar'
import {connect} from "react-redux"
import {
  getOfficialData
} from "../../../src/Store/Official/action/Action"

const MainLayout = ({children, isLoading, getAll}) => {
  getAll();
  if (isLoading) { //whole webPage will be pass a loading phase after verify all necessary step like get all official data including user logged in status
    return (
      <>Loading...</>
    )
  }else {
    return (
      <>
          <Navbar/>
          {
              children
          }
          <Footer/>
      </>
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