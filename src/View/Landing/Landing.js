import React, {useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import Layout from "../../Layout/Common/MainLayout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  fa42Group
} from '@fortawesome/free-brands-svg-icons';
import SectionOne from '../../Component/Page/Landing/SectionOne/SectionOne'
import SectionTwo from '../../Component/Page/Landing/SectionTwo/SectionTwo'
import SectionThree from '../../Component/Page/Landing/SectionThree/SectionThree'
import SectionFive from '../../Component/Page/Landing/SectionFive/SectionFive'
import SectionFour from '../../Component/Page/Landing/SectionFour/SectionFour'

const Landing = ({
  isLoading,
  sectionOne,
  sectionTwo
}) => {
  
  return (
    <>
        <Layout>
          <div className = {`mt-12`}  >
             <SectionOne data = {sectionOne}/>
          </div>
          <div className = {`mt-12`}  >
             <SectionTwo data = {sectionTwo}/>
          </div>
          <div className = {`mt-12`}  >
             <SectionThree/>
          </div>
          <div className = {`mt-12`}  >
             <SectionFour/>
          </div>
          <div className = {`mt-12`}  >
              <SectionFive/>
          </div>
        </Layout>
    </>
  )
}

const mapStateToProps = (state) => {
  const {
    official : {
      isLoading
    }
  } = state;
  return {
    isLoading
  }
}

export default connect (mapStateToProps) (Landing)