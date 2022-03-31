import React from 'react'

const MostReadLayoutRightLeft = (
    {
        blog: {
            contentDetails: {
                title,
                titlePic
            }
        }
    }
) => {
  return (
    <div className = {`grid grid-cols-2 gap-3`}>
        {/* title picture part */}
        <div>
            <img src= {titlePic} alt="" />
        </div>

        {/* title part  */}
        <div>
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default MostReadLayoutRightLeft