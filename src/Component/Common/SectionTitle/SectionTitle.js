import React from 'react'
import CommonLayoutStyle from "./SectionTitle..module.css"

const SectionTitle = ({
    title
}) => {
  return (
    <div className = {`font-bold text-2xl ${CommonLayoutStyle.titleFont}`}>{title}</div>
  )
}

export default SectionTitle