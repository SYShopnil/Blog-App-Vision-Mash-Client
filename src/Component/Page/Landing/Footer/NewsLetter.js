import React from 'react'

const NewsLetter = ({
    placeHolderOfLetter
}) => {
  return (
    <div>
        <input type="email" placeholder= {placeHolderOfLetter} />
    </div>
  )
}

export default NewsLetter