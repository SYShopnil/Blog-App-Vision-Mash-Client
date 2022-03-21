import React, {useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import Layout from "../../Layout/Common/MainLayout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  fa42Group
} from '@fortawesome/free-brands-svg-icons';

const Landing = ({isLoading}) => {
  
  return (
    <>
        <Layout>
          <h1>Hello I am from Children</h1>
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