import React from 'react'
import {connect} from 'react-redux'
import Image from "next/image"
import Link from "next/link"
import {
  faChartBar
} from "@fortawesome/free-regular-svg-icons"
import {
  faBars, faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarStyle from "./Navbar.module.css"
import {navBarStyle} from "../../../utils/Landing/DataPassingController/Landing"
import SearchBarIcon from '../SearchBar/SearchBarIcon'
import HandburgerIcon from '../Handburger/HandburgerIcon'


const Navbar = ({
  logo,
  visibleCategory,
  availableCategories
}) => {
  return (
    // main Wrapper
    <div className = {`grid  grid-cols-2 xl:grid-cols-4 p-5 xl:p-0`}>
        {/* logo */}
        <div 
        className = {`flex justify-start items-center `}
        >
            <img 
            src= {logo} 
            alt="Logo" 
            className = {`h-8 ${NavbarStyle.logo}`} />
        </div>

        {/* navigation */}
        <nav className = {`xl:col-span-2 hidden xl:block`}>
          <Link  href="/about" >
              <a 
              className = {`${NavbarStyle.navBarContent} ${NavbarStyle.borderLeft}`}>News</a>
          </Link>
          <Link href="/about"  >
              <a 
              className = {`${NavbarStyle.navBarContent}`} >Populer</a>
          </Link>

          {/* navbar dynamic category part */}
          {
              visibleCategory.map ((category, ind) => {
                return (
                  <>
                    {
                       availableCategories.map ((allCategory, ind) => {
                          if (allCategory.name ==  category) { //it will show all matched category name
                            const name = (allCategory.name).split ("").map (n => {
                              if (n != " ") return n;
                            }).join ("").toLowerCase(); //remove all back spaces from string
                            // console.log(name)
                            return (
                              <Link key = {ind} href = {`/${name}`}  >
                                <a 
                                  className = {`${NavbarStyle.navBarContent}`}
                                  style = {{borderBottom :`${navBarStyle.border_width} ${navBarStyle.border_type} ${allCategory.color}`}} 
                                  >
                                    {category}
                                </a>
                              </Link>
                            )
                          }
                      })
                    }
                    
                  </>
                )
              })
          }
        </nav>
        
        {/*  search bar and hand burger part*/}
        <div className = {`xl:col-span-1 flex xl:justify-start justify-end  items-center `}>
          <SearchBarIcon/>
          <HandburgerIcon/>
        </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  const {
    official: {
      officialData: {
        logo,
        navbarSelectCategory:visibleCategory,
        availableCategories
      }
    }
  } = state;
  return {
    logo,
    visibleCategory,
    availableCategories
  }
}

export default connect (mapStateToProps) (Navbar)