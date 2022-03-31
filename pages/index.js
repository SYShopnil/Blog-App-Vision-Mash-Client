import Head from 'next/head'
import Image from 'next/image'
import Landing from '../src/View/Landing/Landing'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import gqlApis from "../src/GraphQL/API/API"
import {
  getTopTwoBlogOfTheMonth,
  getBlogDataForSectionTwoAndThreeAndFour,
  getMostReadBlogForSectionThreeAndFive,
  FetchAndGetTopOfTheMonthData
} from "../src/GraphQL/Blog/queries"
import sectionOneFetchResponse from "../src/utils/Landing/Fetch/ResponseStructure/section1"
import sectionTwoFetchResponse from "../src/utils/Landing/Fetch/ResponseStructure/section2"
import sectionFourFetchResponse from "../src/utils/Landing/Fetch/ResponseStructure/section4"
import {
  rightSubSectionOneResponse,
  leftSideUpperPartResponseStructure
} from "../src/utils/Landing/Fetch/ResponseStructure/section5"
import {
  rightSideSubSectionOneStructure,
  leftSideUpperPartStructure,
  leftSideLowerPartStructure
} from "../src/utils/Landing/Fetch/ResponseStructure/section3"
import {
  sectionTwoController,
  sectionThreeController,
  sectionFourController,
  sectionFiveController
} from "../src/utils/Landing/DataPassingController/Landing"

export default function Home({
  sectionOne,
  sectionTwo,
  sectionThree,
  sectionFour,
  sectionFive
}) {
  // console.log({sectionOne,sectionTwo,sectionThree,sectionFour,sectionFive}) //for testing 
  return (
    <>
      <h1>
        <Landing
          sectionOne = {sectionOne}
          sectionTwo = {sectionTwo}
          sectionThree = {sectionThree}
          sectionFour = {sectionFour}
          sectionFive = {sectionFive}
        />
      </h1>
    </>
  )
}

export async function getStaticProps(context) {
  const {
    blog:BlogAPI
  } = gqlApis //get all graph ql apis

  //Section 1 part data fetching
  const getTopTwoBlogFetchReq = await axios.post ( //fetching top two blog categories of blog for section 1
    BlogAPI,
    getTopTwoBlogOfTheMonth ()
  )
  const {data:sectionOneData} = getTopTwoBlogFetchReq //store fetch data 
  const structureOfSectionOne = sectionOneFetchResponse (sectionOneData) //get a structure of response what we need to pass in to component

  // Section 2 part data fetching
  const getRecentPostForSectionTwo = await axios.post ( //fetching data
    BlogAPI, 
      getBlogDataForSectionTwoAndThreeAndFour (sectionTwoController.dataLimit, sectionTwoController.queryBy) )  //fetching all recent blog blog for section 2
  const {data:sectionTwoData} = getRecentPostForSectionTwo //store fetch data 
  const structureOfSectionTwo = sectionTwoFetchResponse (sectionTwoData) //get a structure of response what we need to pass in to component

  //Section 3 part 
  //**Right sub section 1 part dataFetching//
  const getRecentPostForSectionThreeRightSubSectionOne = await axios.post ( //fetching data
    BlogAPI, 
    getBlogDataForSectionTwoAndThreeAndFour(sectionThreeController.rightSubSectionOne.dataLimit, sectionThreeController.rightSubSectionOne.queryBy) )  //fetching for section 3
  const {data:sectionThreeRightSubSectionOneData} = getRecentPostForSectionThreeRightSubSectionOne  //store fetch data 
  const structureOfThreeRightSubSectionOneResponse = rightSideSubSectionOneStructure (sectionThreeRightSubSectionOneData) //get a structure of response what we need to pass in to component
  
  //**Left section Upper part dataFetching//
  const getMostReadPostForSectionThreeLeftSubSectionUpper = await axios.post ( //fetching data
    BlogAPI, 
    getMostReadBlogForSectionThreeAndFive(sectionThreeController.leftSide.upperPart.dataLimit, sectionThreeController.leftSide.upperPart.queryBy) )  //fetching for section 3
  const {data:sectionThreeLeftSubSectionUpperData} = getMostReadPostForSectionThreeLeftSubSectionUpper  //store fetch data 
  const structureOfThreeLeftSubSectionUpperResponse = leftSideUpperPartStructure (sectionThreeLeftSubSectionUpperData) //get a structure of response what we need to pass in to component
  
  //**Left section Lower part dataFetching//
  const getFetcherPostForSectionThreeLeftLowerPart = await axios.post ( //fetching data
    BlogAPI, 
    getBlogDataForSectionTwoAndThreeAndFour(sectionThreeController.leftSide.lowerPart.dataLimit, sectionThreeController.leftSide.lowerPart.queryBy) )  //fetching for section 3
  const {data:sectionThreeLeftLowerPartData} = getFetcherPostForSectionThreeLeftLowerPart  //store fetch data 
  const structureOfThreeLeftLowerPartResponse = leftSideLowerPartStructure (sectionThreeLeftLowerPartData) //get a structure of response what we need to pass in to component
  console.log({sectionThreeLeftLowerPartData})
  //Section 4 part 
  const getMostReadPostForSectionFourPart = await axios.post ( //fetching data
    BlogAPI, 
    getBlogDataForSectionTwoAndThreeAndFour(sectionFourController.dataLimit, sectionFourController.queryBy) )  //fetching for section 4
  const {data:sectionFourPartData} = getMostReadPostForSectionFourPart  //store fetch data 
  const structureOfFourPartResponse = sectionFourFetchResponse (sectionFourPartData) //get a structure of response what we need to pass in to component

  //section 5 part 
  //**Right Subsection 1 */
  const getMostReadPostForSectionFiveRightSection = await axios.post ( //fetching data
    BlogAPI, 
    getMostReadBlogForSectionThreeAndFive(sectionFiveController.rightSide.dataLimit, sectionFiveController.rightSide.queryBy) )  //fetching all recent blog blog for section 5
  const {data:sectionFiveRightSectionData} = getMostReadPostForSectionFiveRightSection  //store fetch data 
  const structureOfFiveRightSectionResponse = rightSubSectionOneResponse (sectionFiveRightSectionData) //get a structure of response what we need to pass in to component
  
  //**Left Part Upper Side */
  const getTopOfTheMonthForSectionFiveLeftUpper = await axios.post ( //fetching data
    BlogAPI, 
    // getTopMonthBlogsForSectionFive(sectionFiveController.leftSide.upperPart.dataLimit, sectionFiveController.leftSide.upperPart.queryBy) )  //fetching all recent blog blog for section 5
    FetchAndGetTopOfTheMonthData (sectionFiveController.leftSide.upperPart.dataLimit, sectionFiveController.leftSide.upperPart.queryBy) )  //fetching all recent blog blog for section 5
  const {data:sectionFiveRightSectionUpperData} = getTopOfTheMonthForSectionFiveLeftUpper  //store fetch data 
  const structureOfFiveRightSectionUpperResponse = leftSideUpperPartResponseStructure (sectionFiveRightSectionUpperData) //get a structure of response what we need to pass in to component
  

  return {
    props: {
      sectionOne: structureOfSectionOne,
      sectionTwo: structureOfSectionTwo,
      sectionThree: {
        leftSide: structureOfThreeRightSubSectionOneResponse,
        rightSide: {
          upper: structureOfThreeLeftSubSectionUpperResponse,
          lower: structureOfThreeLeftLowerPartResponse
        }
      },
      sectionFour: structureOfFourPartResponse,
      sectionFive: {
        rightSide: structureOfFiveRightSectionResponse,
        leftSide: {
          upper: structureOfFiveRightSectionUpperResponse
        }
      }
    },
    revalidate: 300 //in second
  }
}
