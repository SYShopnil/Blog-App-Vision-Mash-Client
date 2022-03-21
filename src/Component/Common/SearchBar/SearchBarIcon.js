import React from 'react'
import {
  faBars
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SearchBarIcon = () => {
  return (
    <a
    className = {`mr-7`}
    >
    <FontAwesomeIcon 
    icon={faBars}
    />
    </a>
  )
}

export default SearchBarIcon