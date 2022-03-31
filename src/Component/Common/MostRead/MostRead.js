import React from 'react'
import MostReadLayoutRightLeft from './LayOut/MostReadLayoutRightLeft'
import {sectionsTileName} from "../../../LocalConfig/LandingPage/Landing"
import SectionTitle from '../SectionTitle/SectionTitle'


const MostRead = ({
    data:blogs
}) => {
  return (
    //full wrapper
    <div>
        {/* title wrapper */}
        <div className = {`mb-6 h-10`}>
            <SectionTitle 
                title = {sectionsTileName.sectionThree.rightSide.upper}
            />
        </div>
        {/* content details */}
        <div>
            {
                blogs.map ((blog, ind) => {
                    return (
                        <div key = {ind} className = {`mb-2`}>
                             <MostReadLayoutRightLeft 
                                blog = {blog}
                            />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MostRead